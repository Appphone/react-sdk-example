import { io, Socket } from "socket.io-client";
import ChatEvent from "../models/ChatEvent";
import {
    appendReceivedEvent,
    joinRoomSuccess,
    joinRoomError,
    openRoom,
    sendMessageSuccess,
    sessionSucess,
    setOffline,
    signUpError,
    blockSignIn,
    leaveRoomSuccess,
} from "./reducer";

const socketMiddleware = () => {
    const URL = "http://localhost:3000";
    let socket: Socket | null = null;

    const setupSocket = (storeAPI: any, auth: any) => {
        if (!socket) socket = io(URL, { autoConnect: false });

        socket.auth = auth;
        socket.connect();

        socket.on("connect_error", (err) => {
            switch (err.message) {
                case "invalid username":
                    storeAPI.dispatch(
                        signUpError({ error: "Please provide a username" })
                    );
                    break;
                case "username exists":
                    storeAPI.dispatch(
                        signUpError({
                            error: "This username is already in use",
                        })
                    );
                    break;
                case "too many sockets":
                    storeAPI.dispatch(blockSignIn());
                    break;
                default:
                    storeAPI.dispatch(setOffline());
            }
        });

        socket.on("session", ({ sessionId, userId, username, rooms }) => {
            localStorage.setItem("sessionId", sessionId);
            storeAPI.dispatch(
                sessionSucess({
                    username,
                    userId,
                    sessionId,
                    isConnected: true,
                })
            );

            rooms.forEach(({ id, name }: { id: string; name: string }) =>
                storeAPI.dispatch(joinRoomSuccess({ id, name }))
            );
        });

        socket.on(
            "rooms:join-success",
            ({ id, name }: { readonly id: string; readonly name: string }) => {
                storeAPI.dispatch(joinRoomSuccess({ id, name }));
                storeAPI.dispatch(openRoom({ id }));
            }
        );

        socket.on(
            "rooms:join-error",
            ({
                error,
                id,
            }: {
                readonly error: string;
                readonly id?: string;
            }) => {
                const errorMessages: { [key: string]: string } = {
                    "room is full": "This room is already full",
                    "too many rooms":
                        "You've reached the maximum allowed number of rooms",
                };

                storeAPI.dispatch(
                    joinRoomError({
                        message:
                            errorMessages[error] ||
                            "Failed to join room, try again later",
                        id: id,
                    })
                );
            }
        );

        socket.on("rooms:leave-success", ({ id }: { readonly id: string }) => {
            storeAPI.dispatch(leaveRoomSuccess({ id }));
        });

        socket.on("message", (event: ChatEvent) => {
            storeAPI.dispatch(appendReceivedEvent(event));
        });
    };

    // todo specify types
    return (storeAPI: any) => (next: any) => (action: any) => {
        switch (action.type) {
            case "messaging/joinRoom":
                action.payload.id = `rooms://${action.payload.id}`;
                break;
            case "messaging/login":
                const sessionId = localStorage.getItem("sessionId");
                if (sessionId) {
                    setupSocket(storeAPI, { sessionId });
                } else {
                    return;
                }
                break;
        }

        next(action);

        switch (action.type) {
            case "messaging/signUp":
                setupSocket(storeAPI, action.payload);
                break;
            case "messaging/signOut":
                if (socket) socket.disconnect();
                localStorage.removeItem("sessionId");
                break;
            case "messaging/joinRoom":
                socket?.emit("rooms:join", action.payload.id);
                break;
            case "messaging/joinNewRoom":
                socket?.emit("rooms:join-new", action.payload.name);
                break;
            case "messaging/leaveRoom":
                socket?.emit("rooms:leave", action.payload.id);
                break;
            case "messaging/sendMessage":
                socket?.emit(
                    "message",
                    action.payload,
                    ({ id }: { readonly id: string }) => {
                        storeAPI.dispatch(
                            sendMessageSuccess({
                                id,
                                localId: action.payload.localId,
                                roomId: action.payload.roomId,
                            })
                        );
                    }
                );
                break;
        }
    };
};

export default socketMiddleware();

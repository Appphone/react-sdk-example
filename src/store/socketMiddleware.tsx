import { io, Socket } from "socket.io-client";
import ChatEvent from "../models/ChatEvent";
import {
    appendReceivedEvent,
    joinRoomSuccess,
    openRoom,
    sendMessageSuccess,
    sessionSucess,
    setOffline,
    signOut,
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
                    storeAPI.dispatch(signOut());
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

            rooms.forEach((roomId: string) =>
                storeAPI.dispatch(joinRoomSuccess(roomId))
            );
        });

        socket.on("message", (event: ChatEvent) => {
            storeAPI.dispatch(appendReceivedEvent(event));
        });
    };

    // todo specify types
    return (storeAPI: any) => (next: any) => (action: any) => {
        if (action.type === "messaging/joinRoom") {
            action.payload.id = `room://${action.payload.id}`;
        }

        // always let the reducers react to actions immediately, to give visual feedback
        // can use ACKs later to update state when appropriate
        next(action);

        switch (action.type) {
            case "messaging/login":
                const sessionId = localStorage.getItem("sessionId");
                if (sessionId) {
                    setupSocket(storeAPI, { sessionId });
                }
                break;
            case "messaging/signUp":
                setupSocket(storeAPI, { username: action.payload });
                break;
            case "messaging/signOut":
                if (socket) socket.disconnect();
                localStorage.removeItem("sessionId");
                break;
            case "messaging/joinRoom":
                socket?.emit("rooms:join", action.payload.id, () => {
                    storeAPI.dispatch(joinRoomSuccess(action.payload.id));
                    storeAPI.dispatch(openRoom({ id: action.payload.id }));
                });
                break;
            case "messaging/joinNewRoom":
                socket?.emit(
                    "rooms:join-new",
                    ({ id }: { readonly id: string }) => {
                        storeAPI.dispatch(joinRoomSuccess(id));
                        storeAPI.dispatch(openRoom({ id }));
                    }
                );
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

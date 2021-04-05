import { io, Socket } from "socket.io-client";
import {
    appendReceivedEvent,
    joinNewRoomSuccess,
    joinRoomSuccess,
    sendMessageSuccess,
    sessionSucess,
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
            if (err.message === "invalid username") {
                storeAPI.dispatch(signOut());
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

            rooms.forEach((roomId: any) =>
                storeAPI.dispatch(joinRoomSuccess(roomId))
            );
        });

        socket.on("message", (event) => {
            storeAPI.dispatch(appendReceivedEvent(event));
        });
    };

    // todo specify types
    return (storeAPI: any) => (next: any) => (action: any) => {
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
            case "messaging/joinNewRoom":
                socket?.emit("rooms:join-new", ({ id }: { id: string }) => {
                    storeAPI.dispatch(joinNewRoomSuccess(id));
                });
                break;
            case "messaging/sendMessage":
                socket?.emit(
                    "message",
                    action.payload,
                    ({ id }: { id: string }) => {
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

        next(action);
    };
};

export default socketMiddleware();

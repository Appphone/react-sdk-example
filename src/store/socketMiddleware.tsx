import { io, Socket } from "socket.io-client";
import {
    joinNewRoomSuccess,
    joinRoomSuccess,
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

        socket.on("session", ({ sessionID, username, rooms }) => {
            localStorage.setItem("sessionID", sessionID);
            storeAPI.dispatch(
                sessionSucess({
                    username,
                    sessionID,
                    isConnected: true,
                })
            );

            rooms.forEach((room: any) =>
                storeAPI.dispatch(joinRoomSuccess(room.id))
            );
        });
    };

    // todo specify types
    return (storeAPI: any) => (next: any) => (action: any) => {
        switch (action.type) {
            case "messaging/login":
                const sessionID = localStorage.getItem("sessionID");
                if (sessionID) {
                    setupSocket(storeAPI, { sessionID });
                }
                break;
            case "messaging/signUp":
                setupSocket(storeAPI, { username: action.payload });
                break;
            case "messaging/signOut":
                if (socket) socket.disconnect();
                localStorage.removeItem("sessionID");
                break;
            case "messaging/joinNewRoom":
                socket?.emit("rooms:join-new", (room: any) => {
                    storeAPI.dispatch(joinNewRoomSuccess(room.id));
                });
                break;
        }

        next(action);
    };
};

export default socketMiddleware();

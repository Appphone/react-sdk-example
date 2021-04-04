import { io, Socket } from "socket.io-client";
import { sessionSucess, signOut } from "./reducer";

// todo specify types
const socketMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
    const URL = "http://localhost:3000";
    let socket: Socket | null = null;

    const setupSocket = (auth: any) => {
        if (!socket) socket = io(URL, { autoConnect: false });

        socket.auth = auth;
        socket.connect();

        socket.on("connect_error", (err) => {
            if (err.message === "invalid username") {
                storeAPI.dispatch(signOut());
            }
        });

        socket.on("session", ({ sessionID, username }) => {
            localStorage.setItem("sessionID", sessionID);
            storeAPI.dispatch(
                sessionSucess({
                    username,
                    sessionID,
                    isConnected: true,
                })
            );
        });
    };

    switch (action.type) {
        case "messaging/login":
            const sessionID = localStorage.getItem("sessionID");
            if (sessionID) {
                setupSocket({ sessionID });
            }
            break;
        case "messaging/signUp":
            setupSocket({ username: action.payload });
            break;
    }

    next(action);
};

export default socketMiddleware;

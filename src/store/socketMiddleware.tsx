import { io } from "socket.io-client";
import { signOut } from "./reducer";

// todo specify types
const socketMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
    const URL = "http://localhost:3000";
    const socket = io(URL, { autoConnect: false });

    socket.onAny((event, ...args) => {
        console.log(event, args);
    });

    socket.on("connect_error", (err) => {
        if (err.message === "invalid username") {
            storeAPI.dispatch(signOut());
        }
    });

    switch (action.type) {
        case "messaging/signUp":
            socket.auth = { username: action.payload };
            socket.connect();
            break;
    }

    next(action);
};

export default socketMiddleware;

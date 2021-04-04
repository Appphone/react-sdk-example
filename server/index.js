const app = require("express")();
const httpServer = require("http").createServer(app);
const crypto = require("crypto");
const SessionStore = require("./sessionStore");

const sessionStore = new SessionStore();

const randomId = () => crypto.randomBytes(8).toString("hex");

const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:8080",
    },
});

io.use(async (socket, next) => {
    const sessionID = socket.handshake.auth.sessionID;
    if (sessionID) {
        const session = sessionStore.findSession(sessionID);
        if (session) {
            socket.sessionID = sessionID;
            socket.userID = session.userID;
            socket.username = session.username;
            return next();
        }
    }

    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }

    socket.sessionID = randomId();
    socket.userID = randomId();
    socket.username = username;
    next();
});

io.on("connection", (socket) => {
    sessionStore.saveSession(socket.sessionID, {
        userID: socket.userID,
        username: socket.username,
        connected: true,
    });

    socket.emit("session", {
        sessionID: socket.sessionID,
        userID: socket.userID,
        username: socket.username,
    });

    socket.join(socket.userID);

    // notify users upon disconnection
    socket.on("disconnect", async () => {
        const matchingSockets = await io.in(socket.userID).allSockets();
        const isDisconnected = matchingSockets.size === 0;
        if (isDisconnected) {
            sessionStore.saveSession(socket.sessionID, {
                userID: socket.userID,
                username: socket.username,
                connected: false,
            });
        }
    });
});

httpServer.listen(3000, () => {
    console.log("listening on *:3000");
});

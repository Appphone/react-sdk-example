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
    const sessionId = socket.handshake.auth.sessionId;
    if (sessionId) {
        const session = sessionStore.findSession(sessionId);
        if (session) {
            socket.sessionId = sessionId;
            socket.userId = session.userId;
            socket.username = session.username;

            if (session.rooms) {
                session.rooms.forEach((roomId) => socket.join(roomId));
            }

            return next();
        }
    }

    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }

    socket.sessionId = randomId();
    socket.userId = randomId();
    socket.username = username;
    next();
});

io.on("connection", (socket) => {
    sessionStore.saveSession(socket.sessionId, {
        userId: socket.userId,
        username: socket.username,
        connected: true,
    });

    socket.emit("session", {
        sessionId: socket.sessionId,
        userId: socket.userId,
        username: socket.username,
        rooms: [...socket.rooms.values()].filter((id) => id !== socket.id),
    });

    socket.join(socket.userId);

    socket.on("rooms:join-new", (callback) => {
        const roomId = "room://" + randomId();
        socket.join(roomId);

        const rooms = [...socket.rooms.values()].filter(
            (id) => id.indexOf("room://") === 0
        );

        sessionStore.saveSession(socket.sessionId, {
            userId: socket.userId,
            username: socket.username,
            rooms,
            connected: true,
        });

        callback({ id: roomId });
    });

    socket.on("message", (event, callback) => {
        // todo add type
        if (event.type === 0) {
            event.id = randomId();
            socket.to(event.roomId).emit("message", event);
            callback({ id: event.id });
        }
    });

    socket.on("disconnect", async () => {
        const matchingSockets = await io.in(socket.userId).allSockets();
        const isDisconnected = matchingSockets.size === 0;
        if (isDisconnected) {
            const session = sessionStore.findSession(socket.sessionId);
            sessionStore.saveSession(socket.sessionId, {
                ...session,
                connected: false,
            });
        }
    });
});

httpServer.listen(3000, () => {
    console.log("listening on *:3000");
});

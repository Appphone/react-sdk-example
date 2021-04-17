const app = require("express")();
const httpServer = require("http").createServer(app);
const crypto = require("crypto");
const SessionStore = require("./sessionStore");

const ENABLE_LOG = true;
const ALLOWED_SOCKETS_PER_ROOM = 10;
const ALLOWED_SOCKETS_PER_USER = 2;
const ALLOWED_ROOMS_PER_SOCKET = 10;

const sessionStore = new SessionStore();

const randomId = () => crypto.randomBytes(8).toString("hex");

const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:8080",
    },
});

const saveSocketRooms = (socket) => {
    const rooms = [...socket.rooms.values()].filter(
        (id) => id.indexOf("rooms://") === 0
    );

    if (ENABLE_LOG) {
        console.log("saving joined rooms", rooms);
    }

    sessionStore.saveSession(socket.sessionId, {
        userId: socket.userId,
        username: socket.username,
        rooms,
        connected: true,
    });
};

const joinRoom = (socket, roomId) => {
    const joinedRoomsCount = socket.rooms.size;
    console.log("rooms count", joinedRoomsCount);
    // Adds 2 because each user has its own user Id room and its own socket Id room
    if (joinedRoomsCount < ALLOWED_ROOMS_PER_SOCKET + 2) {
        io.in(socket.userId).socketsJoin(roomId);
        saveSocketRooms(socket);
        io.in(socket.userId).emit("rooms:join-success", { id: roomId });
    } else {
        io.in(socket.userId).emit("rooms:join-error", {
            error: "too many rooms",
            id: roomId,
        });
    }
};

io.use(async (socket, next) => {
    const sessionId = socket.handshake.auth.sessionId;
    if (sessionId) {
        const session = sessionStore.findSession(sessionId);
        if (session) {
            const activeSocketsForUser = await io
                .in(session.userId)
                .allSockets();

            if (activeSocketsForUser.size + 1 > ALLOWED_SOCKETS_PER_USER) {
                return next(new Error("too many sockets"));
            }

            socket.sessionId = sessionId;
            socket.userId = session.userId;
            socket.username = session.username;

            if (session.rooms) {
                if (ENABLE_LOG) {
                    console.log("joining saved rooms", session.rooms);
                }

                session.rooms.forEach((roomId) => socket.join(roomId));
            }

            return next();
        }
    }

    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }

    if (
        sessionStore
            .findAllSessions()
            .find((session) => session.username === username)
    ) {
        return next(new Error("username exists"));
    }

    socket.sessionId = randomId();
    socket.userId = randomId();
    socket.username = username;
    next();
});

io.on("connection", (socket) => {
    if (ENABLE_LOG) {
        console.log("socket connected");
    }

    sessionStore.saveSession(socket.sessionId, {
        userId: socket.userId,
        username: socket.username,
        connected: true,
    });

    if (ENABLE_LOG) {
        console.log("joined rooms", socket.rooms.values());
    }

    socket.emit("session", {
        sessionId: socket.sessionId,
        userId: socket.userId,
        username: socket.username,
        rooms: [...socket.rooms.values()].filter((id) => id !== socket.id),
    });

    socket.join(socket.userId);

    socket.on("rooms:join-new", (callback) => {
        const roomId = "rooms://" + randomId();
        joinRoom(socket, roomId, callback);
    });

    socket.on("rooms:join", async (roomId) => {
        const socketsInRoom = await io.in(roomId).allSockets();

        if (socketsInRoom.size < ALLOWED_SOCKETS_PER_ROOM) {
            joinRoom(socket, roomId);
        } else {
            io.in(socket.userId).emit("rooms:join-error", {
                error: "room is full",
                id: roomId,
            });
        }
    });

    socket.on("rooms:leave", async (roomId) => {
        if (ENABLE_LOG) {
            console.log("leaving room", roomId);
        }

        io.in(socket.userId).socketsLeave(roomId);
        io.in(socket.userId).emit("rooms:leave-success", { id: roomId });
    });

    socket.on("message", (event, callback) => {
        // todo add type
        if (event.type === 0) {
            if (ENABLE_LOG) console.log("sending message", event.data.content);
            event.id = randomId();
            socket.to(event.roomId).emit("message", event);
            callback({ id: event.id });
        }
    });

    socket.on("disconnect", async () => {
        const matchingSockets = await io.in(socket.userId).allSockets();
        const isDisconnected = matchingSockets.size === 0;

        if (isDisconnected) {
            sessionStore.saveSession(socket.sessionId, {
                connected: false,
            });
        } else if (ENABLE_LOG) {
            console.log("remaining connected sockets", matchingSockets.size);
        }
    });
});

httpServer.listen(3000, () => {
    console.log("listening on *:3000");
});

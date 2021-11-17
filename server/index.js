const path = require("path");
const express = require("express");
const crypto = require("crypto");
const SessionStore = require("./sessionStore");
const RoomStore = require("./roomStore");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const ENABLE_LOG = process.env.NODE_ENV !== "production";
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;
const PORT = process.env.PORT || 3000;

const ALLOWED_SOCKETS_PER_ROOM = 10;
const ALLOWED_SOCKETS_PER_USER = 2;
const ALLOWED_ROOMS_PER_SOCKET = 10;

const server = express()
    .use(express.static(path.join(__dirname, "../build")))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

const sessionStore = new SessionStore();
const roomStore = new RoomStore();

const randomId = () => crypto.randomBytes(8).toString("hex");

const io = require("socket.io")(
    server,
    CLIENT_ORIGIN
        ? {
              cors: {
                  origin: CLIENT_ORIGIN,
              },
          }
        : undefined
);

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

const joinRoom = (socket, roomId, roomData) => {
    const joinedRoomsCount = socket.rooms.size;

    // Adds 2 because each user has its own user Id room and its own socket Id room
    if (joinedRoomsCount < ALLOWED_ROOMS_PER_SOCKET + 2) {
        io.in(socket.userId).socketsJoin(roomId);
        saveSocketRooms(socket);

        if (ENABLE_LOG) {
            console.log("joined room", roomId);
        }

        io.in(socket.userId).emit("rooms:join-success", {
            id: roomId,
            ...roomData,
        });
        io.in(roomId).emit("rooms:event", {
            id: randomId(),
            type: 1,
            createdAt: new Date().toISOString(),
            roomId: roomId,
            senderId: socket.userId,
            senderLabel: socket.username,
        });
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
        } else {
            return next(new Error("invalid session"));
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
        rooms: [...socket.rooms.values()]
            .filter((id) => id !== socket.id)
            .map((id) => ({ id, ...roomStore.findRoom(id) })),
    });

    socket.join(socket.userId);

    socket.on("rooms:create", (name) => {
        const roomId = "rooms://" + randomId();
        const roomData = { name };
        roomStore.saveRoom(roomId, roomData);
        joinRoom(socket, roomId, roomData);
    });

    socket.on("rooms:join", async (roomId) => {
        const roomData = roomStore.findRoom(roomId);

        if (!roomData) {
            io.in(socket.userId).emit("rooms:join-error", {
                error: "not found",
                id: roomId,
            });
            return;
        }

        if (socket.rooms.has(roomId)) {
            io.in(socket.userId).emit("rooms:join-error", {
                error: "already joined",
                id: roomId,
            });
            return;
        }

        const socketsInRoom = await io.in(roomId).allSockets();

        if (socketsInRoom.size < ALLOWED_SOCKETS_PER_ROOM) {
            joinRoom(socket, roomId, roomData);
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
        io.in(roomId).emit("rooms:event", {
            id: randomId(),
            type: 2,
            createdAt: new Date().toISOString(),
            roomId: roomId,
            senderId: socket.userId,
            senderLabel: socket.username,
        });
    });

    socket.on("rooms:message", (event, callback) => {
        // todo add type
        if (event.type === 0) {
            if (ENABLE_LOG) {
                console.log(
                    "message received, broadcasting...",
                    event.data.content
                );
            }

            event.id = randomId();
            socket.to(event.roomId).emit("rooms:event", event);
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

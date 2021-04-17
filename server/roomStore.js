class RoomStore {
    constructor() {
        this.rooms = new Map();
    }

    findRoom(id) {
        return this.rooms.get(id);
    }

    saveRoom(id, room) {
        this.rooms.set(id, room);
    }

    findAllRooms() {
        return [...this.rooms.values()];
    }
}

module.exports = RoomStore;

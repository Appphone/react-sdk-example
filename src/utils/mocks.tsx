import faker from "faker";
import { Message } from "../models/Message";
import Room from "../models/Room";

interface MockFactory<T> {
    one: () => T;
    many: (count?: number) => Array<T>;
}

// Message

const getMessage: () => Message = () => ({
    createdAt: new Date(),
    content: faker.lorem.words(),
    isFromSelf: faker.datatype.number() % 2 === 0,
});

export const messageMockFactory: MockFactory<Message> = {
    one: getMessage,
    many: (count = 10) => [...new Array(count)].map(getMessage),
};

// Room

const getRoom: () => Room = () => ({
    id: faker.lorem.word(),
    unreadCount: faker.datatype.number(),
    isConnected: faker.datatype.number() % 2 === 0,
    events: [],
});

export const roomMockFactory: MockFactory<Room> = {
    one: getRoom,
    many: (count = 10) => [...new Array(count)].map(getRoom),
};

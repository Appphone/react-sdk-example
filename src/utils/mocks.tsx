import { action } from "@storybook/addon-actions";
import faker from "faker";
import { v4 as uuid } from "uuid";
import ChatEvent, { ChatDataType } from "../models/ChatEvent";
import Room from "../models/Room";
import { RootState } from "../store/store";

interface MockFactory<T> {
    one: () => T;
    many: (count?: number) => Array<T>;
}

// Store

export const getStoreMock = (state: RootState) => ({
    getState: () => {
        return state;
    },
    subscribe: () => 0,
    dispatch: action("dispatch"),
});

// Message

const getMessage: () => ChatEvent = () => ({
    localId: uuid(),
    createdAt: new Date().toISOString(),
    roomId: "1",
    senderId: "1",
    type: ChatDataType.Message,
    data: {
        content: faker.lorem.words(),
    },
});

export const messageMockFactory: MockFactory<ChatEvent> = {
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

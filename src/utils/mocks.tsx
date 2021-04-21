import { action } from "@storybook/addon-actions";
import faker from "faker";
import { v4 as uuid } from "uuid";
import ChatEvent, { ChatDataType } from "../models/ChatEvent";
import LoggedScreenType from "../models/LoggedScreenType";
import Room from "../models/Room";
import { RootState } from "../store/store";

interface MockFactory<T> {
    one: () => T;
    many: (count?: number) => Array<T>;
}

// Store

export const getStoreMock = (state: Partial<RootState> = {}) => ({
    getState: () => {
        const roomsMock = roomMockFactory.many();

        const defaultMockState: RootState = {
            isOffline: false,
            isSigningIn: false,
            isSignInBlocked: false,
            isJoiningRoom: false,
            activeScreenType: LoggedScreenType.Chat,
            activeRoomId: roomsMock[0].id,
            rooms: roomsMock,
            socket: { userId: "1", username: "foo", isConnected: true },
        };

        return { ...defaultMockState, ...state };
    },
    subscribe: () => 0,
    dispatch: action("dispatch"),
});

// Message

const getMessage: () => ChatEvent = () => ({
    localId: uuid(),
    createdAt: new Date().toISOString(),
    roomId: "1",
    senderId: faker.datatype.number() % 2 === 0 ? "1" : "2",
    senderLabel: faker.internet.userName(),
    type: ChatDataType.Message,
    data: {
        content: faker.lorem.words(),
    },
});

export const messageMockFactory: MockFactory<ChatEvent> = {
    one: getMessage,
    many: (count = 10) => [...new Array(count)].map(getMessage),
};

// EventInfo

const getChatEvent: () => ChatEvent = () => ({
    localId: uuid(),
    createdAt: new Date().toISOString(),
    roomId: "1",
    senderId: faker.datatype.number() % 2 === 0 ? "1" : "2",
    senderLabel: faker.internet.userName(),
    type: ChatDataType.UserArrival,
});

export const chatEventMockFactory: MockFactory<ChatEvent> = {
    one: getChatEvent,
    many: (count = 10) => [...new Array(count)].map(getChatEvent),
};

// Room

const getRoom: () => Room = () => ({
    id: faker.datatype.number().toString(),
    name: faker.internet.userName(),
    unreadCount: faker.datatype.number(),
    isConnected: faker.datatype.number() % 2 === 0,
    isLeaving: false,
    events: messageMockFactory.many(),
});

export const roomMockFactory: MockFactory<Room> = {
    one: getRoom,
    many: (count = 10) => [...new Array(count)].map(getRoom),
};

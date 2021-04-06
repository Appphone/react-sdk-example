import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChatEvent from "../models/ChatEvent";
import LoggedScreenType from "../models/LoggedScreenType";
import Room from "../models/Room";
import SocketMeta from "../models/SocketMeta";

interface MessagingState {
    activeScreenType: LoggedScreenType;
    socket?: SocketMeta;
    activeRoomId?: string;
    rooms?: Room[];
}

const initialState: MessagingState = {
    activeScreenType: LoggedScreenType.Chat,
};

const messagingSlice = createSlice({
    name: "messaging",
    initialState,
    reducers: {
        showRoomCreator(state) {
            state.activeScreenType = LoggedScreenType.RoomCreator;
            state.activeRoomId = undefined;
        },
        login() {},
        signUp(state, action: PayloadAction<string>) {
            state.socket = { username: action.payload, isConnected: false };
        },
        signOut(state) {
            state.socket = undefined;
            state.activeRoomId = undefined;
            state.rooms = undefined;
        },
        sessionSucess(state, action: PayloadAction<SocketMeta>) {
            state.socket = action.payload;
            state.rooms = [];
            // todo: restore active room
        },
        joinRoom(state, action: PayloadAction<{ id: string }>) {
            state.rooms?.push({
                id: action.payload.id,
                isConnected: false,
                unreadCount: 0,
                events: [],
            });
        },
        joinNewRoom() {},
        joinRoomSuccess(state, action: PayloadAction<string>) {
            const room = state.rooms?.find(
                (room) => room.id === action.payload
            );
            if (room) {
                room.isConnected = true;
            } else {
                state.rooms?.push({
                    id: action.payload,
                    isConnected: true,
                    unreadCount: 0,
                    events: [],
                });
            }
        },
        openRoom(state, action: PayloadAction<{ id: string }>) {
            const room = state.rooms?.find(
                (room) => room.id === action.payload.id
            );
            if (room && room.isConnected) {
                room.unreadCount = 0;
                state.activeScreenType = LoggedScreenType.Chat;
                state.activeRoomId = action.payload.id;
            }
        },
        leaveRoom(state, action: PayloadAction<string>) {
            const indexToRemove = state.rooms?.findIndex(
                (room) => room.id === action.payload
            );
            if (indexToRemove && indexToRemove >= 0) {
                state.rooms?.splice(indexToRemove, 1);
            }
        },
        sendMessage(state, action: PayloadAction<ChatEvent>) {
            const activeRoom = state.rooms?.find(
                (room) => room.id === state.activeRoomId
            );
            activeRoom?.events.push(action.payload);
        },
        sendMessageSuccess(
            state,
            action: PayloadAction<{
                localId: string;
                id: string;
                roomId: string;
            }>
        ) {
            const room = state.rooms?.find(
                (room) => room.id === action.payload.roomId
            );
            if (room) {
                const event = room.events?.find((event) => event.localId);
                if (event) {
                    event.id = action.payload.id;
                }
            }
        },
        appendReceivedEvent(state, action: PayloadAction<ChatEvent>) {
            const room = state.rooms?.find(
                (room) => room.id === action.payload.roomId
            );
            if (room) {
                room.events?.push(action.payload);
                room.unreadCount += room.id !== state.activeRoomId ? 1 : 0;
            }
        },
    },
});

export default messagingSlice.reducer;

export const {
    showRoomCreator,
    login,
    signUp,
    signOut,
    sessionSucess,
    joinRoom,
    joinNewRoom,
    joinRoomSuccess,
    openRoom,
    leaveRoom,
    sendMessage,
    sendMessageSuccess,
    appendReceivedEvent,
} = messagingSlice.actions;

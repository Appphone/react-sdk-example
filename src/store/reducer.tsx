import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChatEvent from "../models/ChatEvent";
import Room from "../models/Room";
import SocketMeta from "../models/SocketMeta";

interface MessagingState {
    socket?: SocketMeta;
    activeRoomId?: string;
    rooms?: Room[];
}

const initialState: MessagingState = {};

const messagingSlice = createSlice({
    name: "messaging",
    initialState,
    reducers: {
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
        joinRoom(state, action: PayloadAction<string>) {
            state.rooms?.push({
                id: action.payload,
                isConnected: false,
                unreadCount: 0,
                events: [],
            });
        },
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
        joinNewRoom() {},
        joinNewRoomSuccess(state, action: PayloadAction<string>) {
            state.rooms?.push({
                id: action.payload,
                isConnected: true,
                unreadCount: 0,
                events: [],
            });
        },
        openRoom(state, action: PayloadAction<{ id: string }>) {
            state.activeRoomId = action.payload.id;
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
            }
        },
    },
});

export default messagingSlice.reducer;

export const {
    login,
    signUp,
    signOut,
    sessionSucess,
    joinRoom,
    joinRoomSuccess,
    joinNewRoom,
    joinNewRoomSuccess,
    openRoom,
    leaveRoom,
    sendMessage,
    sendMessageSuccess,
    appendReceivedEvent,
} = messagingSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../models/Message";
import MessagingEvent from "../models/MessagingEvent";
import Room from "../models/Room";
import SocketMeta from "../models/SocketMeta";

interface MessagingState {
    socket?: SocketMeta;
    activeRoom?: Room;
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
            state.activeRoom = undefined;
            state.rooms = undefined;
        },
        sessionSucess(state, action: PayloadAction<SocketMeta>) {
            state.socket = action.payload;
            state.rooms = [];
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
        goToRoom(state, action: PayloadAction<string>) {
            state.activeRoom = state.rooms?.find(
                (room) => room.id === action.payload
            );
        },
        leaveRoom(state, action: PayloadAction<string>) {
            const indexToRemove = state.rooms?.findIndex(
                (room) => room.id === action.payload
            );
            if (indexToRemove && indexToRemove >= 0) {
                state.rooms?.splice(indexToRemove, 1);
            }
        },
        sendMessage(state, action: PayloadAction<Message>) {
            state.activeRoom?.events.push(action.payload);
        },
        appendReceivedEvent(state, action: PayloadAction<MessagingEvent>) {
            state.activeRoom?.events.push(action.payload);
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
    goToRoom,
    leaveRoom,
    sendMessage,
} = messagingSlice.actions;

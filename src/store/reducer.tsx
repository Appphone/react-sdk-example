import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../models/Message";
import MessagingEvent from "../models/MessagingEvent";
import Room from "../models/Room";
import Socket from "../models/Socket";

interface MessagingState {
    socket?: Socket;
    activeRoom?: Room;
    rooms?: Room[];
}

const initialState: MessagingState = {};

const messagingSlice = createSlice({
    name: "messaging",
    initialState,
    reducers: {
        signUp(state, action: PayloadAction<string>) {
            state.socket = { username: action.payload, isConnected: true };
        },
        signOut(state) {
            state.socket = undefined;
            state.activeRoom = undefined;
            state.rooms = undefined;
        },
        joinRoom(state, action: PayloadAction<string>) {
            state.rooms?.push({
                id: action.payload,
                isConnected: false,
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
    signUp,
    signOut,
    joinRoom,
    goToRoom,
    leaveRoom,
    sendMessage,
} = messagingSlice.actions;

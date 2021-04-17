import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChatEvent from "../models/ChatEvent";
import LoggedScreenType from "../models/LoggedScreenType";
import Room from "../models/Room";
import SocketMeta from "../models/SocketMeta";

interface MessagingState {
    isOffline: boolean;
    isSigningIn: boolean;
    isSignInBlocked: boolean;
    signUpError?: string;
    isJoiningRoom: boolean;
    joinRoomError?: string;
    activeScreenType: LoggedScreenType;
    socket?: SocketMeta;
    activeRoomId?: string;
    rooms?: Room[];
}

const initialState: MessagingState = {
    isOffline: false,
    isSigningIn: false,
    isSignInBlocked: false,
    isJoiningRoom: false,
    activeScreenType: LoggedScreenType.Chat,
};

const messagingSlice = createSlice({
    name: "messaging",
    initialState,
    reducers: {
        setOffline(state) {
            state.isOffline = true;
        },
        showRoomCreator(state) {
            state.activeScreenType = LoggedScreenType.RoomCreator;
            state.activeRoomId = undefined;
        },
        login(state) {
            state.signUpError = undefined;
            state.isSigningIn = true;
        },
        signUp(state, action: PayloadAction<{ username: string }>) {
            state.socket = {
                username: action.payload.username,
                isConnected: false,
            };
            state.signUpError = undefined;
            state.isSigningIn = true;
            state.isSignInBlocked = false;
        },
        signUpError(state, action: PayloadAction<{ error: string }>) {
            state.signUpError = action.payload.error;
            state.isSigningIn = false;
        },
        blockSignIn(state) {
            state.isSignInBlocked = true;
            state.isSigningIn = false;
        },
        signOut(state) {
            state.socket = undefined;
            state.activeRoomId = undefined;
            state.rooms = undefined;
            state.signUpError = undefined;
        },
        sessionSucess(state, action: PayloadAction<SocketMeta>) {
            state.isOffline = false;
            state.socket = action.payload;
            state.rooms = [];
            state.isSigningIn = false;
        },
        joinRoom(state, action: PayloadAction<{ id: string }>) {
            state.isJoiningRoom = true;
            state.joinRoomError = undefined;
            state.rooms?.push({
                id: action.payload.id,
                isConnected: false,
                unreadCount: 0,
                events: [],
            });
        },
        joinNewRoom(state) {
            state.isJoiningRoom = true;
            state.joinRoomError = undefined;
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
            state.isJoiningRoom = false;
        },
        joinRoomError(
            state,
            action: PayloadAction<{ message: string; id?: string }>
        ) {
            state.joinRoomError = action.payload.message;
            state.isJoiningRoom = false;

            if (action.payload.id) {
                const indexToRemove = state.rooms?.findIndex(
                    (room) => room.id === action.payload.id
                );
                if (indexToRemove) {
                    state.rooms?.splice(indexToRemove, 1);
                }
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
    setOffline,
    showRoomCreator,
    login,
    signUp,
    signUpError,
    blockSignIn,
    signOut,
    sessionSucess,
    joinRoom,
    joinNewRoom,
    joinRoomSuccess,
    joinRoomError,
    openRoom,
    leaveRoom,
    sendMessage,
    sendMessageSuccess,
    appendReceivedEvent,
} = messagingSlice.actions;

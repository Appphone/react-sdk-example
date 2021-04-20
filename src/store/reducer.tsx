import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChatEvent from "../models/ChatEvent";
import LoggedScreenType from "../models/LoggedScreenType";
import PendingRoom from "../models/PendingRoom";
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
    pendingRooms?: PendingRoom[];
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
            state.isOffline = false;
            state.isSigningIn = false;
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
            state.pendingRooms?.push({
                id: action.payload.id,
            });
        },
        createRoom(state, action: PayloadAction<{ name: string }>) {
            state.isJoiningRoom = true;
            state.joinRoomError = undefined;
            state.pendingRooms?.push({
                name: action.payload.name,
            });
        },
        joinRoomSuccess(
            state,
            action: PayloadAction<{ id: string; name: string }>
        ) {
            state.rooms?.push({
                id: action.payload.id,
                name: action.payload.name,
                isLeaving: false,
                unreadCount: 0,
                events: [],
            });
            state.isJoiningRoom = false;
        },
        joinRoomError(
            state,
            action: PayloadAction<{ message: string; id?: string }>
        ) {
            state.joinRoomError = action.payload.message;
            state.isJoiningRoom = false;

            if (action.payload.id) {
                const indexToRemove = state.pendingRooms?.findIndex(
                    (room) => room.id === action.payload.id
                );
                if (indexToRemove !== undefined && indexToRemove >= 0) {
                    state.pendingRooms?.splice(indexToRemove, 1);
                }
            }
        },
        leaveRoom(state, action: PayloadAction<{ id: string }>) {
            if (state.rooms) {
                const room = state.rooms.find(
                    (room) => room.id === action.payload.id
                );
                if (room) {
                    room.isLeaving = true;
                    state.activeRoomId = undefined;
                }
            }
        },
        openRoom(state, action: PayloadAction<{ id: string }>) {
            const room = state.rooms?.find(
                (room) => room.id === action.payload.id
            );
            if (room) {
                room.unreadCount = 0;
                state.activeScreenType = LoggedScreenType.Chat;
                state.activeRoomId = action.payload.id;
            }
        },
        leaveRoomSuccess(state, action: PayloadAction<{ id: string }>) {
            const indexToRemove = state.rooms?.findIndex(
                (room) => room.id === action.payload.id
            );
            if (indexToRemove !== undefined && indexToRemove >= 0) {
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
    createRoom,
    joinRoomSuccess,
    joinRoomError,
    openRoom,
    leaveRoom,
    leaveRoomSuccess,
    sendMessage,
    sendMessageSuccess,
    appendReceivedEvent,
} = messagingSlice.actions;

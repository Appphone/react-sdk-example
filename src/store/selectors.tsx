import { RootState } from "./store";

export const getUserId = (state: RootState) => state.socket?.userId;

export const getUsername = (state: RootState) => state.socket?.username;

export const getActiveRoom = (state: RootState) =>
    state.rooms?.find((room) => room.id === state.activeRoomId);

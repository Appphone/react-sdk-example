import { RootState } from "./store";

export const getUserId = (state: RootState) => state.socket?.userId;

export const getUsername = (state: RootState) => state.socket?.username;

export const getActiveRoomId = (state: RootState) => state.activeRoomId;

export const getActiveRoom = (state: RootState) =>
    state.rooms?.find((room) => room.id === state.activeRoomId);

export const hasJoinedRoom = (roomId: string) => (state: RootState) =>
    !!state.rooms?.find((room) => room.id === "rooms://" + roomId);

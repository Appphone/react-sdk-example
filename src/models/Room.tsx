import ChatEvent from "./ChatEvent";

export default interface Room {
    id: string;
    isConnected: boolean;
    isLeaving: boolean;
    unreadCount: number;
    events: ChatEvent[];
}

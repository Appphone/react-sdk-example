import ChatEvent from "./ChatEvent";

export default interface Room {
    id: string;
    isConnected: boolean;
    unreadCount: number;
    events: ChatEvent[];
}

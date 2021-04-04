import MessagingEvent from "./MessagingEvent";

export default interface Room {
    id: string;
    isConnected: boolean;
    unreadCount: number;
    events: MessagingEvent[];
}

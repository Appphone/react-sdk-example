import ChatEvent from "./ChatEvent";

export default interface Room {
    id: string;
    name?: string;
    isLeaving: boolean;
    unreadCount: number;
    events: ChatEvent[];
}

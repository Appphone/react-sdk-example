import Message from "./Message";

export enum ChatDataType {
    Message,
}

export default interface ChatEvent {
    id?: string;
    localId: string;
    createdAt: string;
    roomId: string;
    senderId: string;
    type: ChatDataType;
    data: Message;
}

import Message from "./Message";

export enum ChatDataType {
    Message,
}

export default interface ChatEvent {
    id?: string;
    readonly localId: string;
    readonly createdAt: string;
    readonly roomId: string;
    readonly senderId: string;
    readonly senderLabel: string;
    readonly type: ChatDataType;
    readonly data: Message;
}

import React from "react";
import { Message } from "../../../models/Message";
import RoomMessageSlot from "../message-list-slot/MessageListSlot";
import "./MessageList.css";

export interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    const renderedMessages = messages.map((message, index) => (
        <RoomMessageSlot
            message={message}
            isLastOfType={
                index + 1 === messages.length ||
                message.isFromSelf !== messages[index + 1].isFromSelf
            }
        />
    ));

    return <div className="message-list">{renderedMessages}</div>;
};

export default MessageList;

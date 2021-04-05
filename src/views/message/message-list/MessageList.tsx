import React from "react";
import ChatEvent, { ChatDataType } from "../../../models/ChatEvent";
import RoomMessageSlot from "../message-list-slot/MessageListSlot";
import "./MessageList.css";

export interface MessageListProps {
    userId: string;
    events: ChatEvent[];
}

const MessageList: React.FC<MessageListProps> = ({ userId, events }) => {
    const renderedMessages = events.map((event, index) => {
        switch (event.type) {
            case ChatDataType.Message:
                return (
                    <RoomMessageSlot
                        key={event.localId || event.id}
                        message={event}
                        isLastOfType={
                            index + 1 === events.length ||
                            event.type !== events[index + 1].type ||
                            event.senderId !== events[index + 1].senderId
                        }
                        isFromSelf={userId === event.senderId}
                    />
                );
            default:
                return null;
        }
    });

    return <div className="message-list">{renderedMessages}</div>;
};

export default MessageList;

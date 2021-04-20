import React, { useEffect, useState } from "react";
import ChatEvent, { ChatDataType } from "../../../models/ChatEvent";
import EventInfoConnect from "../../event-info/EventInfoConnect";
import RoomMessageSlot from "../message-list-slot/MessageListSlot";
import "./MessageList.css";

export interface MessageListProps {
    userId: string;
    events: ChatEvent[];
}

const MessageList: React.FC<MessageListProps> = ({ userId, events }) => {
    const [
        dummyElToScroll,
        setDummyElToScroll,
    ] = useState<HTMLDivElement | null>();

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
                return <EventInfoConnect event={event} />;
        }
    });

    useEffect(() => {
        dummyElToScroll?.scrollIntoView({ behavior: "smooth" });
    }, [dummyElToScroll, events]);

    return (
        <div className="message-list medium-content">
            <div>
                {renderedMessages}
                <div
                    ref={(el) => {
                        setDummyElToScroll(el);
                    }}
                ></div>
            </div>
        </div>
    );
};

export default MessageList;

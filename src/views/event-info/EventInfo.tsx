import React from "react";
import ChatEvent, { ChatDataType } from "../../models/ChatEvent";
import "./EventInfo.css";

export interface EventInfoProps {
    event: ChatEvent;
    isFromSelf: boolean;
}

const EventInfo: React.FC<EventInfoProps> = ({
    event: { type, senderLabel },
    isFromSelf,
}) => {
    let description;
    switch (type) {
        case ChatDataType.UserArrival:
            description = `${isFromSelf ? "You" : senderLabel} joined the room`;
            break;
        case ChatDataType.UserExit:
            description = `${isFromSelf ? "You" : senderLabel} left the room`;
            break;
    }

    if (!description) {
        return null;
    }

    return (
        <div className="event-info text-sm">
            <div className="event-info__content">{description}</div>
        </div>
    );
};

export default EventInfo;

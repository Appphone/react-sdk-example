import React from "react";
import { useSelector } from "react-redux";
import ChatEvent from "../../models/ChatEvent";
import EventInfo from "./EventInfo";
import { getUserId } from "../../store/selectors";

export interface EventInfoConnectProps {
    event: ChatEvent;
}

const EventInfoConnect: React.FC<EventInfoConnectProps> = ({ event }) => {
    const userId = useSelector(getUserId);
    const isFromSelf = event.senderId === userId;
    return <EventInfo event={event} isFromSelf={isFromSelf} />;
};

export default EventInfoConnect;

import React from "react";
import { useSelector } from "react-redux";
import ChatEvent from "../../../models/ChatEvent";
import ChatEventInfo from "./ChatEventInfo";
import { getUserId } from "../../../store/selectors";

export interface EventInfoConnectProps {
    event: ChatEvent;
}

const EventInfoConnect: React.FC<EventInfoConnectProps> = ({ event }) => {
    const userId = useSelector(getUserId);
    const isFromSelf = event.senderId === userId;
    return <ChatEventInfo event={event} isFromSelf={isFromSelf} />;
};

export default EventInfoConnect;

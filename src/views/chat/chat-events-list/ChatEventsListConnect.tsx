import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { getActiveRoom, getUserId } from "../../../store/selectors";
import ChatEventsList from "./ChatEventsList";

const MessageListConnect: React.FC = () => {
    const userId = useAppSelector(getUserId);
    const room = useAppSelector(getActiveRoom);

    return userId && room ? (
        <ChatEventsList userId={userId} events={room.events} />
    ) : null;
};

export default MessageListConnect;

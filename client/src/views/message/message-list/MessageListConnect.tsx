import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { getActiveRoom, getUserId } from "../../../store/selectors";
import MessageList from "./MessageList";

const MessageListConnect: React.FC = () => {
    const userId = useAppSelector(getUserId);
    const room = useAppSelector(getActiveRoom);

    return userId && room ? (
        <MessageList userId={userId} events={room.events} />
    ) : null;
};

export default MessageListConnect;

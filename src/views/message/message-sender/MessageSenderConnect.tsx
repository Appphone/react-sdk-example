import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { sendMessage } from "../../../store/reducer";
import {
    getActiveRoom,
    getUserId,
    getUsername,
} from "../../../store/selectors";
import { v4 as uuid } from "uuid";
import MessageSender from "./MessageSender";
import { ChatDataType } from "../../../models/ChatEvent";

const MessageSenderConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(getUserId);
    const username = useAppSelector(getUsername);
    const room = useAppSelector(getActiveRoom);
    const isOffline = useAppSelector((state) => state.isOffline);

    const onSubmit = (content: string) => {
        if (userId && username && room) {
            dispatch(
                sendMessage({
                    localId: uuid(),
                    createdAt: new Date().toISOString(),
                    roomId: room.id,
                    senderId: userId,
                    senderLabel: username,
                    type: ChatDataType.Message,
                    data: {
                        content,
                    },
                })
            );
        }
    };

    return <MessageSender isOffline={isOffline} onSubmit={onSubmit} />;
};

export default MessageSenderConnect;

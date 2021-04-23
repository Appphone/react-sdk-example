import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { sendMessage } from "../../../store/reducer";
import {
    getActiveRoomId,
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
    const roomId = useAppSelector(getActiveRoomId);
    const isOffline = useAppSelector((state) => state.isOffline);

    const onSubmit = (content: string) => {
        if (userId && username && roomId) {
            dispatch(
                sendMessage({
                    localId: uuid(),
                    createdAt: new Date().toISOString(),
                    roomId: roomId,
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

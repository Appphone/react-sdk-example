import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { sendMessage } from "../../../store/reducer";
import { getActiveRoom, getUserId } from "../../../store/selectors";
import { v4 as uuid } from "uuid";
import MessageSender from "./MessageSender";
import { ChatDataType } from "../../../models/ChatEvent";

const MessageSenderConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(getUserId);
    const room = useAppSelector(getActiveRoom);

    const onSubmit = (content: string) => {
        if (userId && room) {
            dispatch(
                sendMessage({
                    localId: uuid(),
                    createdAt: new Date().toISOString(),
                    roomId: room.id,
                    senderId: userId,
                    type: ChatDataType.Message,
                    data: {
                        content,
                    },
                })
            );
        }
    };

    return <MessageSender onSubmit={onSubmit} />;
};

export default MessageSenderConnect;

import classNames from "classnames";
import React from "react";
import { Message } from "../../../models/Message";
import MessageListItem from "../message-list-item/MessageListItem";
import "./MessageListSlot.css";

export interface MessageListSlotProps {
    message: Message;
    isLastOfType: boolean;
}

const MessageListSlot: React.FC<MessageListSlotProps> = ({
    message,
    isLastOfType,
}) => {
    const classes = classNames("message-list__slot", {
        "message-list__slot__arrow_left": isLastOfType && !message.isFromSelf,
        "message-list__slot__arrow_right": isLastOfType && message.isFromSelf,
    });

    return (
        <div className={classes}>
            <MessageListItem message={message} />
        </div>
    );
};

export default MessageListSlot;

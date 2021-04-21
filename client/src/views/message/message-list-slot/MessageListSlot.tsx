import classNames from "classnames";
import React from "react";
import ChatEvent from "../../../models/ChatEvent";
import MessageListItem from "../message-list-item/MessageListItem";
import "./MessageListSlot.css";

export interface MessageListSlotProps {
    message: ChatEvent;
    isLastOfType: boolean;
    isFromSelf: boolean;
}

const MessageListSlot: React.FC<MessageListSlotProps> = ({
    message,
    isLastOfType,
    isFromSelf,
}) => {
    const classes = classNames("message-list__slot", {
        "message-list__slot__arrow_left": isLastOfType && !isFromSelf,
        "message-list__slot__arrow_right": isLastOfType && isFromSelf,
    });

    return (
        <div className={classes}>
            <MessageListItem message={message} isFromSelf={isFromSelf} />
        </div>
    );
};

export default MessageListSlot;

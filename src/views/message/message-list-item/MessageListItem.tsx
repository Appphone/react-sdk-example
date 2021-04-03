import classNames from "classnames";
import { format } from "date-fns";
import React from "react";
import { Message } from "../../../models/Message";
import "./MessageListItem.css";

export interface MessageListItemProps {
    message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({
    message: { content, isFromSelf, createdAt },
}) => {
    const msgClass = classNames("message-list__item", {
        "message-list__item--out": isFromSelf,
        "message-list__item--in": !isFromSelf,
    });

    return (
        <div className={msgClass}>
            <div className="message-list__item__content">{content}</div>
            <div className="message-list__item__time text-sm">
                {format(createdAt, "HH:mm")}
            </div>
        </div>
    );
};

export default MessageListItem;

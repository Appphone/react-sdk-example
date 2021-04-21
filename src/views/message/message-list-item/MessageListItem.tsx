import classNames from "classnames";
import { format } from "date-fns";
import React from "react";
import ChatEvent from "../../../models/ChatEvent";
import "./MessageListItem.css";

export interface MessageListItemProps {
    message: ChatEvent;
    isFromSelf: boolean;
}

const MessageListItem: React.FC<MessageListItemProps> = ({
    message,
    isFromSelf,
}) => {
    // todo from
    const msgClass = classNames("message-list__item", {
        "message-list__item--out": isFromSelf,
        "message-list__item--in": !isFromSelf,
    });

    return (
        <div className={msgClass}>
            {!isFromSelf && (
                <div className="message-list__item__sender text-sm">
                    {message.senderLabel}
                </div>
            )}
            <div className="message-list__item__content">
                <div className="message-list__item__text">
                    {message.data?.content}
                </div>
                <div className="message-list__item__time">
                    {format(new Date(message.createdAt), "HH:mm")}
                </div>
            </div>
        </div>
    );
};

export default MessageListItem;

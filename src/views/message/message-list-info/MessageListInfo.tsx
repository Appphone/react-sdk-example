import React from "react";
import "./MessageListInfo.css";

export interface MessageListInfoProps {
    content: string;
}

const MessageListInfo: React.FC<MessageListInfoProps> = ({ content }) => {
    return <div className="message-list-info text-sm">{content}</div>;
};

export default MessageListInfo;

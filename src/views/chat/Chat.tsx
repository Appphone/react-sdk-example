import React from "react";
import { Message } from "../../models/Message";
import MessageList from "../message/message-list/MessageList";
import MessageSender from "../message/message-sender/MessageSender";
import "./Chat.css";

export interface ChatProps {
    messages: Message[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
    return (
        <div className="chat">
            <div className="chat__messages">
                <MessageList messages={messages} />
            </div>
            <div className="chat__sender">
                <MessageSender />
            </div>
        </div>
    );
};

export default Chat;

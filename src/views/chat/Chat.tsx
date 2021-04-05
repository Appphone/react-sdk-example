import React from "react";
import MessageListConnect from "../message/message-list/MessageListConnect";
import MessageSenderConnect from "../message/message-sender/MessageSenderConnect";
import "./Chat.css";

const Chat: React.FC = () => {
    return (
        <div className="chat">
            <div className="chat__messages">
                <MessageListConnect />
            </div>
            <div className="chat__sender">
                <MessageSenderConnect />
            </div>
        </div>
    );
};

export default Chat;

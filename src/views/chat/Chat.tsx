import React from "react";
import Button from "../button/Button";
import MessageListConnect from "../message/message-list/MessageListConnect";
import MessageSenderConnect from "../message/message-sender/MessageSenderConnect";
import "./Chat.css";

export interface ChatProps {
    onToggleSidebar: () => void;
}

const Chat: React.FC<ChatProps> = ({ onToggleSidebar }) => {
    return (
        <div className="chat">
            <div className="chat__header">
                <Button onClick={onToggleSidebar}>Hide Sidebar</Button>
                <h2>Room</h2>
            </div>
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

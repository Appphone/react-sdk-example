import React from "react";
import { Message } from "../../models/Message";
import Room from "../../models/Room";
import RoomChat from "../../views/chat/Chat";
import Sidebar from "../../views/sidebar/Sidebar";
import "./LoggedScreen.css";

export interface LoggedScreenProps {
    rooms: Room[];
    messages: Message[];
}

const LoggedScreen: React.FC<LoggedScreenProps> = ({ rooms, messages }) => {
    return (
        <div className="logged">
            <Sidebar rooms={rooms} />
            <RoomChat messages={messages} />
        </div>
    );
};

export default LoggedScreen;

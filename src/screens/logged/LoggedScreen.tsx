import React from "react";
import Chat from "../../views/chat/Chat";
import SidebarConnect from "../../views/sidebar/SidebarConnect";
import "./LoggedScreen.css";

const LoggedScreen: React.FC = () => {
    return (
        <div className="logged">
            <SidebarConnect />
            <Chat />
        </div>
    );
};

export default LoggedScreen;

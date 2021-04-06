import React from "react";
import LoggedScreenType from "../../models/LoggedScreenType";
import Chat from "../../views/chat/Chat";
import RoomCreatorConnect from "../../views/room/room-creator/RoomCreatorConnect";
import SidebarConnect from "../../views/sidebar/SidebarConnect";
import "./LoggedScreen.css";

export interface LoggedScreenProps {
    type: LoggedScreenType;
}

const LoggedScreen: React.FC<LoggedScreenProps> = ({ type }) => {
    let renderedContent: JSX.Element | null = null;

    switch (type) {
        case LoggedScreenType.Chat:
            renderedContent = <Chat />;
            break;
        case LoggedScreenType.RoomCreator:
            renderedContent = <RoomCreatorConnect />;
            break;
    }

    return (
        <div className="logged">
            <SidebarConnect />
            {renderedContent}
        </div>
    );
};

export default LoggedScreen;

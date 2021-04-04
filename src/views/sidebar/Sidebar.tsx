import React from "react";
import Button from "../button/Button";
import RoomListConnect from "../room/room-list/RoomListConnect";
import "./Sidebar.css";

export interface SidebarProps {
    onSignOut: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSignOut }) => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h1 className="sidebar__header__title">Rooms</h1>
            </div>
            <RoomListConnect />
            <div className="sidebar__footer">
                <Button onClick={onSignOut}>Sign out</Button>
            </div>
        </div>
    );
};

export default Sidebar;

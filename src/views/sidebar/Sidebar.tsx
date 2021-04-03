import React from "react";
import Room from "../../models/Room";
import RoomList from "../room/room-list/RoomList";
import "./Sidebar.css";

export interface SidebarProps {
    rooms: Room[];
}

const Sidebar: React.FC<SidebarProps> = ({ rooms }) => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h1 className="sidebar__header__title">Rooms</h1>
            </div>
            <RoomList rooms={rooms} />
        </div>
    );
};

export default Sidebar;

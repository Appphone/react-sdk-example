import React from "react";
import Room from "../../../models/Room";
import SidebarListItem from "../../sidebar-list-item/SidebarListItem";
import "./RoomListItem.css";

export interface RoomListItemProps {
    room: Room;
    isActive: boolean;
    onClick: () => void;
}

const RoomListItem: React.FC<RoomListItemProps> = ({
    room: { id, unreadCount },
    isActive,
    onClick,
}) => {
    return (
        <SidebarListItem isActive={isActive} onClick={onClick}>
            <div className="sidebar__list__item__room">
                <div className="sidebar__list__item__room__label">{id}</div>
                <div className="sidebar__list__item__room__badge">
                    {unreadCount}
                </div>
            </div>
        </SidebarListItem>
    );
};

export default RoomListItem;

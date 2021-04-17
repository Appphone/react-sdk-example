import React from "react";
import Room from "../../../models/Room";
import SidebarListItem from "../../sidebar/sidebar-list-item/SidebarListItem";

export interface RoomListItemProps {
    room: Room;
    isActive: boolean;
    onClick: () => void;
}

const RoomListItem: React.FC<RoomListItemProps> = ({
    room: { id, unreadCount, isLeaving },
    isActive,
    onClick,
}) => {
    return (
        <SidebarListItem
            title={id}
            unreadCount={unreadCount}
            isActive={isActive}
            disabled={isLeaving}
            onClick={onClick}
        />
    );
};

export default RoomListItem;

import React from "react";
import SidebarListItem from "../../sidebar/sidebar-list-item/SidebarListItem";

export interface RoomEntranceLinkProps {
    isActive: boolean;
    isOffline: boolean;
    onClick: () => void;
}

const RoomEntranceLink: React.FC<RoomEntranceLinkProps> = ({
    isActive,
    isOffline,
    onClick,
}) => {
    return (
        <SidebarListItem
            title="Join a room"
            isActive={isActive}
            disabled={isOffline}
            onClick={onClick}
        />
    );
};

export default RoomEntranceLink;

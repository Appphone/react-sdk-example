import React from "react";
import SidebarListItem from "../../sidebar/sidebar-list-item/SidebarListItem";

export interface RoomCreatorLinkProps {
    isActive: boolean;
    isOffline: boolean;
    onClick: () => void;
}

const RoomCreatorLink: React.FC<RoomCreatorLinkProps> = ({
    isActive,
    isOffline,
    onClick,
}) => {
    return (
        <SidebarListItem
            title="Create a new room"
            isActive={isActive}
            disabled={isOffline}
            onClick={onClick}
        />
    );
};

export default RoomCreatorLink;

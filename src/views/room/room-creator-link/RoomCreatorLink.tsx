import React from "react";
import SidebarListItem from "../../sidebar/sidebar-list-item/SidebarListItem";

export interface RoomCreatorLinkProps {
    isActive: boolean;
    onClick: () => void;
}

const RoomCreatorLink: React.FC<RoomCreatorLinkProps> = ({
    isActive,
    onClick,
}) => {
    return (
        <SidebarListItem
            title="Create a new room"
            isActive={isActive}
            onClick={onClick}
        />
    );
};

export default RoomCreatorLink;

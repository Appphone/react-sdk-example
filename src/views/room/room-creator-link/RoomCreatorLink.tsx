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
        <SidebarListItem isActive={isActive} onClick={onClick}>
            Create a new room
        </SidebarListItem>
    );
};

export default RoomCreatorLink;

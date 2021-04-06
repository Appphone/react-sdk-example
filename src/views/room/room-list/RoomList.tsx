import React from "react";
import Room from "../../../models/Room";
import SidebarList from "../../sidebar/sidebar-list/SidebarList";
import RoomCreatorLinkConnect from "../room-creator-link/RoomCreatorLinkConnect";
import RoomListItemConnect from "../room-list-item/RoomListItemConnect";

export interface RoomListProps {
    rooms: Room[];
}

const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
    const renderedRooms = rooms.map((room) => (
        <RoomListItemConnect key={room.id} room={room} />
    ));

    return (
        <SidebarList>
            {renderedRooms}
            <RoomCreatorLinkConnect />
        </SidebarList>
    );
};

export default RoomList;

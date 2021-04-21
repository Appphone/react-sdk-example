import React from "react";
import Room from "../../../models/Room";
import Alert from "../../alert/Alert";
import SidebarList from "../../sidebar/sidebar-list/SidebarList";
import RoomCreatorLinkConnect from "../room-creator-link/RoomCreatorLinkConnect";
import RoomEntranceLinkConnect from "../room-entrance-link/RoomEntranceLinkConnect";
import RoomListItemConnect from "../room-list-item/RoomListItemConnect";

export interface RoomListProps {
    rooms: Room[];
    isOffline: boolean;
}

const RoomList: React.FC<RoomListProps> = ({ rooms, isOffline }) => {
    const renderedRooms = rooms.map((room) => (
        <RoomListItemConnect key={room.id} room={room} />
    ));

    return (
        <SidebarList>
            {isOffline && (
                <Alert warning>
                    You seem to be offline. Trying to reconnect...
                </Alert>
            )}
            {renderedRooms}
            <RoomCreatorLinkConnect />
            <RoomEntranceLinkConnect />
        </SidebarList>
    );
};

export default RoomList;

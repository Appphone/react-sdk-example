import React from "react";
import Room from "../../../models/Room";
import RoomListItemConnect from "../room-list-item/RoomListItemConnect";
import "./RoomList.css";

export interface RoomListProps {
    rooms: Room[];
}

const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
    const renderedRooms = rooms.map((room) => (
        <RoomListItemConnect key={room.id} room={room} />
    ));

    return <ul className="room-list">{renderedRooms}</ul>;
};

export default RoomList;

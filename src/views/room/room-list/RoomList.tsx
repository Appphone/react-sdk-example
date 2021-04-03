import React from "react";
import Room from "../../../models/Room";
import RoomListItem from "../room-list-item/RoomListItem";
import "./RoomList.css";

export interface RoomListProps {
    rooms: Room[];
}

const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
    const renderedRooms = rooms.map((room) => (
        <RoomListItem room={room} onClick={() => {}} />
    ));

    return <ul className="room-list">{renderedRooms}</ul>;
};

export default RoomList;

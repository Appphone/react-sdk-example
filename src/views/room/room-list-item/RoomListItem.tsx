import React from "react";
import Room from "../../../models/Room";
import "./RoomListItem.css";

export interface RoomListItemProps {
    room: Room;
    onClick: () => void;
}

const RoomListItem: React.FC<RoomListItemProps> = ({
    room: { id, unreadCount },
    onClick,
}) => {
    return (
        <li className="room-list__item text-sm" onClick={onClick}>
            <div className="room-list__item__label">{id}</div>
            <div className="room-list__item__badge">{unreadCount}</div>
        </li>
    );
};

export default RoomListItem;

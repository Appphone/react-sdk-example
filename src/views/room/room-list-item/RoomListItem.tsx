import classNames from "classnames";
import React from "react";
import Room from "../../../models/Room";
import "./RoomListItem.css";

export interface RoomListItemProps {
    room: Room;
    isActive: boolean;
    onClick: () => void;
}

const RoomListItem: React.FC<RoomListItemProps> = ({
    room: { id, unreadCount },
    isActive,
    onClick,
}) => {
    const className = classNames("room-list__item text-sm", {
        "room-list__item--active": isActive,
    });

    return (
        <li className={className} onClick={onClick}>
            <div className="room-list__item__label">{id}</div>
            <div className="room-list__item__badge">{unreadCount}</div>
        </li>
    );
};

export default RoomListItem;

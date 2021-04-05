import React from "react";
import Room from "../../../models/Room";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { openRoom } from "../../../store/reducer";
import { getActiveRoom } from "../../../store/selectors";
import RoomListItem from "./RoomListItem";

export interface RoomListItemProps {
    room: Room;
}

const RoomListItemConnect: React.FC<RoomListItemProps> = ({ room }) => {
    const dispatch = useAppDispatch();
    const activeRoom = useAppSelector(getActiveRoom);

    const onRoomClick = () => {
        dispatch(openRoom({ id: room.id }));
    };

    return (
        <RoomListItem
            room={room}
            isActive={activeRoom?.id === room.id}
            onClick={onRoomClick}
        />
    );
};

export default RoomListItemConnect;

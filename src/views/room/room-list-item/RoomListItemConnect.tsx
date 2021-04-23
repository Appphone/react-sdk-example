import React from "react";
import { useSelector } from "react-redux";
import Room from "../../../models/Room";
import { useAppDispatch } from "../../../store/hooks";
import { openRoom } from "../../../store/reducer";
import { getActiveRoomId } from "../../../store/selectors";
import RoomListItem from "./RoomListItem";

export interface RoomListItemProps {
    room: Room;
}

const RoomListItemConnect: React.FC<RoomListItemProps> = ({ room }) => {
    const dispatch = useAppDispatch();
    const activeRoomId = useSelector(getActiveRoomId);

    const onRoomClick = () => {
        dispatch(openRoom({ id: room.id }));
    };

    return (
        <RoomListItem
            room={room}
            isActive={activeRoomId === room.id}
            onClick={onRoomClick}
        />
    );
};

export default RoomListItemConnect;

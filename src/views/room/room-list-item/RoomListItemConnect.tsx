import React from "react";
import { useSelector } from "react-redux";
import Room from "../../../models/Room";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { openRoom } from "../../../store/reducer";
import { getActiveRoomId } from "../../../store/selectors";
import RoomListItem from "./RoomListItem";

export interface RoomListItemProps {
    room: Room;
}

const RoomListItemConnect: React.FC<RoomListItemProps> = ({ room }) => {
    const dispatch = useAppDispatch();
    const activeRoomId = useSelector(getActiveRoomId);
    const isOffline = useAppSelector((state) => state.isOffline);

    const onRoomClick = () => {
        dispatch(openRoom({ id: room.id }));
    };

    return (
        <RoomListItem
            room={room}
            isActive={activeRoomId === room.id}
            isOffline={isOffline}
            onClick={onRoomClick}
        />
    );
};

export default RoomListItemConnect;

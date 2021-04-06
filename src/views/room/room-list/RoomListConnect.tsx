import React from "react";
import { useAppSelector } from "../../../store/hooks";
import RoomList from "./RoomList";

const RoomListConnect: React.FC = () => {
    const rooms = useAppSelector((state) => state.rooms);

    return rooms ? <RoomList rooms={rooms} /> : null;
};

export default RoomListConnect;

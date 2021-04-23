import React from "react";
import { useAppSelector } from "../../../store/hooks";
import RoomList from "./RoomList";

const RoomListConnect: React.FC = () => {
    const rooms = useAppSelector((state) => state.rooms);
    const isOffline = useAppSelector((state) => state.isOffline);

    return rooms ? <RoomList rooms={rooms} isOffline={isOffline} /> : null;
};

export default RoomListConnect;

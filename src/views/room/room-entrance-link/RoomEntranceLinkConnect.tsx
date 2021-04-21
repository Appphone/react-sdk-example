import React from "react";
import LoggedScreenType from "../../../models/LoggedScreenType";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { showRoomEntrance } from "../../../store/reducer";
import RoomEntranceLink from "./RoomEntranceLink";

const RoomEntranceLinkConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const isOffline = useAppSelector((state) => state.isOffline);
    const isActive = useAppSelector(
        (state) => state.activeScreenType === LoggedScreenType.RoomEntrance
    );

    const onClick = () => {
        dispatch(showRoomEntrance());
    };

    return (
        <RoomEntranceLink
            isActive={isActive}
            isOffline={isOffline}
            onClick={onClick}
        />
    );
};

export default RoomEntranceLinkConnect;

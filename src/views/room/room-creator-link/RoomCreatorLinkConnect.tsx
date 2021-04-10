import React from "react";
import LoggedScreenType from "../../../models/LoggedScreenType";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { showRoomCreator } from "../../../store/reducer";
import RoomCreatorLink from "./RoomCreatorLink";

const RoomCreatorLinkConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const isOffline = useAppSelector((state) => state.isOffline);
    const isActive = useAppSelector(
        (state) => state.activeScreenType === LoggedScreenType.RoomCreator
    );

    const onClick = () => {
        dispatch(showRoomCreator());
    };

    return (
        <RoomCreatorLink
            isActive={isActive}
            isOffline={isOffline}
            onClick={onClick}
        />
    );
};

export default RoomCreatorLinkConnect;

import React from "react";
import LoggedScreenType from "../../../models/LoggedScreenType";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { showRoomCreator } from "../../../store/reducer";
import RoomCreatorLink from "./RoomCreatorLink";

const RoomCreatorLinkConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const isActive = useAppSelector(
        (state) => state.activeScreenType === LoggedScreenType.RoomCreator
    );

    const onClick = () => {
        dispatch(showRoomCreator());
    };

    return <RoomCreatorLink isActive={isActive} onClick={onClick} />;
};

export default RoomCreatorLinkConnect;

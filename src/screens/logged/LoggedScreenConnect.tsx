import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { getActiveRoomId } from "../../store/selectors";
import LoggedScreen from "./LoggedScreen";

const LoggedScreenConnect: React.FC = () => {
    const type = useAppSelector((state) => state.activeScreenType);
    const activeRoomId = useSelector(getActiveRoomId);

    return <LoggedScreen type={type} activeRoomId={activeRoomId} />;
};

export default LoggedScreenConnect;

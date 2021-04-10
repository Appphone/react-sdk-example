import React from "react";
import useUrlHash from "../../hooks/useUrlHash";
import { useAppSelector } from "../../store/hooks";
import LoggedScreen from "./LoggedScreen";

const LoggedScreenConnect: React.FC = () => {
    const type = useAppSelector((state) => state.activeScreenType);
    const { hash: roomIdToJoin, onClear: onDismissRoomId } = useUrlHash();

    return (
        <LoggedScreen
            type={type}
            roomIdToJoin={roomIdToJoin}
            onDismissRoomId={onDismissRoomId}
        />
    );
};

export default LoggedScreenConnect;

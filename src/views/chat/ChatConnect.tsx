import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/hooks";
import { leaveRoom } from "../../store/reducer";
import { getActiveRoom } from "../../store/selectors";
import Chat from "./Chat";

const ChatConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const activeRoom = useSelector(getActiveRoom);

    const onLeaveRoomClick = () => {
        activeRoom && dispatch(leaveRoom({ id: activeRoom.id }));
    };

    return activeRoom ? (
        <Chat room={activeRoom} onLeaveRoomClick={onLeaveRoomClick} />
    ) : null;
};

export default ChatConnect;

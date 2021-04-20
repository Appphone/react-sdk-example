import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/hooks";
import { leaveRoom } from "../../store/reducer";
import { getActiveRoomId } from "../../store/selectors";
import Chat from "./Chat";

interface ChatConnectProps {
    onToggleSidebar: () => void;
}

const ChatConnect: React.FC<ChatConnectProps> = ({ onToggleSidebar }) => {
    const dispatch = useAppDispatch();
    const activeRoomId = useSelector(getActiveRoomId);

    const onLeaveRoomClick = () => {
        activeRoomId && dispatch(leaveRoom({ id: activeRoomId }));
    };

    return activeRoomId ? (
        <Chat
            roomId={activeRoomId}
            onToggleSidebar={onToggleSidebar}
            onLeaveRoomClick={onLeaveRoomClick}
        />
    ) : null;
};

export default ChatConnect;

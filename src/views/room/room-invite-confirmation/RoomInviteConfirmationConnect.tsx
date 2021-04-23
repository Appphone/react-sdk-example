import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/hooks";
import { joinRoom } from "../../../store/reducer";
import { hasJoinedRoom } from "../../../store/selectors";
import RoomInviteConfirmation from "./RoomInviteConfirmation";

interface RoomInviteConfirmationConnectProps {
    roomId: string;
    onDone: () => void;
}

const RoomInviteConfirmationConnect: React.FC<RoomInviteConfirmationConnectProps> = ({
    roomId,
    onDone,
}) => {
    const dispatch = useAppDispatch();
    const hasAlreadyJoined = useSelector(hasJoinedRoom(roomId));

    const onConfirm = () => {
        dispatch(joinRoom({ id: roomId }));
        onDone();
    };

    return (
        <RoomInviteConfirmation
            roomId={roomId}
            hasAlreadyJoined={hasAlreadyJoined}
            onConfirm={onConfirm}
            onCancel={onDone}
        />
    );
};

export default RoomInviteConfirmationConnect;

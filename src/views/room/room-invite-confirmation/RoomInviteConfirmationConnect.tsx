import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { joinRoom } from "../../../store/reducer";
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

    const onConfirm = () => {
        dispatch(joinRoom({ id: roomId }));
        onDone();
    };

    return (
        <RoomInviteConfirmation
            roomId={roomId}
            onConfirm={onConfirm}
            onCancel={onDone}
        />
    );
};

export default RoomInviteConfirmationConnect;

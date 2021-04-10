import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { joinRoom } from "../../../store/reducer";
import RoomInviteConfirmation from "./RoomInviteConfirmation";

interface RoomInviteConfirmationConnectProps {
    roomId: string;
    onCancel: () => void;
}

const RoomInviteConfirmationConnect: React.FC<RoomInviteConfirmationConnectProps> = ({
    roomId,
    onCancel,
}) => {
    const dispatch = useAppDispatch();

    const onConfirm = () => {
        dispatch(joinRoom({ id: roomId }));
    };

    return (
        <RoomInviteConfirmation
            roomId={roomId}
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    );
};

export default RoomInviteConfirmationConnect;

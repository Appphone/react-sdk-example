import Field from "@bit/jorgemoreira.react.input.field";
import React from "react";
import Button from "../../button/Button";

export interface RoomInviteConfirmationProps {
    roomId: string;
    hasAlreadyJoined: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const RoomInviteConfirmation: React.FC<RoomInviteConfirmationProps> = ({
    roomId,
    hasAlreadyJoined,
    onConfirm,
    onCancel,
}) => {
    return hasAlreadyJoined ? (
        <div>
            <p>You have already joined this room</p>
            <Button onClick={onCancel}>OK</Button>
        </div>
    ) : (
        <Field label={`Do you want to join the room "${roomId}"?`}>
            <Button primary onClick={onConfirm}>
                Yes
            </Button>
            <Button onClick={onCancel}>No</Button>
        </Field>
    );
};

export default RoomInviteConfirmation;

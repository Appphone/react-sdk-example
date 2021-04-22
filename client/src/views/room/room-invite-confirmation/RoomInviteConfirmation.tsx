import React from "react";
import Button from "../../button/Button";
import Modal from "../../modal/Modal";

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
    const modalContent = (
        <p>
            {hasAlreadyJoined
                ? "You have already joined this room."
                : `Do you want to join the room with ID "${roomId}"?`}
        </p>
    );

    const modalFooter = hasAlreadyJoined ? (
        <Button primary onClick={onCancel}>
            OK
        </Button>
    ) : (
        <React.Fragment>
            <Button primary onClick={onConfirm}>
                Yes
            </Button>
            <Button onClick={onCancel}>No</Button>
        </React.Fragment>
    );

    return (
        <Modal
            title="Join room"
            show={!!roomId}
            onDismiss={onCancel}
            content={modalContent}
            footer={modalFooter}
        />
    );
};

export default RoomInviteConfirmation;

import React from "react";
import SignUpFormRoomOption, {
    SignUpRoomOption,
} from "../../sign-up-form-room-option/SignUpFormRoomOption";
import SignUpFormRoomId from "../../sign-up-room-id/SignUpFormRoomId";
import "./RoomCreator.css";

export enum RoomCreatorStep {
    RoomOption,
    RoomId,
}

export interface RoomCreatorProps {
    step: RoomCreatorStep;
    onChooseRoomOption: (option: SignUpRoomOption) => void;
    onEnterRoomId: (id: string) => void;
}

const RoomCreator: React.FC<RoomCreatorProps> = ({
    step,
    onChooseRoomOption,
    onEnterRoomId,
}) => {
    const renderedStep =
        step === RoomCreatorStep.RoomOption ? (
            <SignUpFormRoomOption onSubmit={onChooseRoomOption} />
        ) : (
            <SignUpFormRoomId onSubmit={onEnterRoomId} />
        );

    return <div className="room-creator">{renderedStep}</div>;
};

export default RoomCreator;

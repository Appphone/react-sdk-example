import React from "react";
import RoomIdForm from "../room-id-form/RoomIdForm";
import RoomOptionForm, { RoomOption } from "../room-option-form/RoomOptionForm";

export enum RoomCreatorStep {
    RoomOption,
    RoomId,
}

export interface RoomCreatorProps {
    step: RoomCreatorStep;
    isJoining: boolean;
    errorMessage?: string;
    onChooseRoomOption: (option: RoomOption) => void;
    onEnterRoomId: (id: string) => void;
}

const RoomCreator: React.FC<RoomCreatorProps> = ({
    step,
    isJoining,
    errorMessage,
    onChooseRoomOption,
    onEnterRoomId,
}) => {
    const renderedStep =
        step === RoomCreatorStep.RoomOption ? (
            <RoomOptionForm
                isJoining={isJoining}
                errorMessage={errorMessage}
                onSubmit={onChooseRoomOption}
            />
        ) : (
            <RoomIdForm
                isJoining={isJoining}
                errorMessage={errorMessage}
                onSubmit={onEnterRoomId}
            />
        );

    return <div className="room-creator">{renderedStep}</div>;
};

export default RoomCreator;

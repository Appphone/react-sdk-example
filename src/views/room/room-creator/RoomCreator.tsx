import React from "react";
import RoomIdForm from "../room-id-form/RoomIdForm";
import RoomOptionForm, { RoomOption } from "../room-option-form/RoomOptionForm";

export enum RoomCreatorStep {
    RoomOption,
    RoomId,
}

export interface RoomCreatorProps {
    step: RoomCreatorStep;
    onChooseRoomOption: (option: RoomOption) => void;
    onEnterRoomId: (id: string) => void;
}

const RoomCreator: React.FC<RoomCreatorProps> = ({
    step,
    onChooseRoomOption,
    onEnterRoomId,
}) => {
    const renderedStep =
        step === RoomCreatorStep.RoomOption ? (
            <RoomOptionForm onSubmit={onChooseRoomOption} />
        ) : (
            <RoomIdForm onSubmit={onEnterRoomId} />
        );

    return <div className="room-creator">{renderedStep}</div>;
};

export default RoomCreator;

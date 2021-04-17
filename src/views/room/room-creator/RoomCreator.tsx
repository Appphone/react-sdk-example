import React from "react";
import RoomIdForm from "../room-id-form/RoomIdForm";
import RoomOptionForm, { RoomOption } from "../room-option-form/RoomOptionForm";
import RoomNameForm from "../room-name-form/RoomNameForm";

export enum RoomCreatorStep {
    RoomOption,
    RoomId,
    RoomName,
}

export interface RoomCreatorProps {
    step: RoomCreatorStep;
    isJoining: boolean;
    errorMessage?: string;
    onSubmitRoomOption: (option: RoomOption) => void;
    onSubmitRoomId: (id: string) => void;
    onSubmitNewRoomName: (name: string) => void;
}

const RoomCreator: React.FC<RoomCreatorProps> = ({
    step,
    isJoining,
    errorMessage,
    onSubmitRoomOption,
    onSubmitRoomId,
    onSubmitNewRoomName,
}) => {
    let renderedStep;
    switch (step) {
        case RoomCreatorStep.RoomId:
            renderedStep = (
                <RoomIdForm
                    isJoining={isJoining}
                    errorMessage={errorMessage}
                    onSubmit={onSubmitRoomId}
                />
            );
            break;
        case RoomCreatorStep.RoomName:
            renderedStep = (
                <RoomNameForm
                    isJoining={isJoining}
                    errorMessage={errorMessage}
                    onSubmit={onSubmitNewRoomName}
                />
            );
            break;
        default:
            renderedStep = (
                <RoomOptionForm
                    isJoining={isJoining}
                    errorMessage={errorMessage}
                    onSubmit={onSubmitRoomOption}
                />
            );
    }

    return <div className="room-creator">{renderedStep}</div>;
};

export default RoomCreator;

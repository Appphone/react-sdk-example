import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { joinNewRoom, joinRoom } from "../../../store/reducer";
import { RoomOption } from "../room-option-form/RoomOptionForm";
import RoomCreator, { RoomCreatorStep } from "./RoomCreator";

const RoomCreatorConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const isJoining = useAppSelector((state) => state.isJoiningRoom);
    const joinErrorMessage = useAppSelector((state) => state.joinRoomError);
    const [roomOption, setRoomOption] = useState<RoomOption>();

    const onSubmitRoomId = (id: string) => {
        dispatch(joinRoom({ id }));
    };

    const onSubmitNewRoomName = (name: string) => {
        dispatch(joinNewRoom({ name }));
    };

    let step = RoomCreatorStep.RoomOption;
    if (roomOption === RoomOption.New) {
        step = RoomCreatorStep.RoomName;
    } else if (roomOption === RoomOption.Existing) {
        step = RoomCreatorStep.RoomId;
    }

    return (
        <RoomCreator
            step={step}
            isJoining={isJoining}
            errorMessage={joinErrorMessage}
            onSubmitRoomOption={setRoomOption}
            onSubmitRoomId={onSubmitRoomId}
            onSubmitNewRoomName={onSubmitNewRoomName}
        />
    );
};

export default RoomCreatorConnect;

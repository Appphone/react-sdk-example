import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { joinNewRoom, joinRoom } from "../../../store/reducer";
import { SignUpRoomOption } from "../../sign-up-form-room-option/SignUpFormRoomOption";
import RoomCreator, { RoomCreatorStep } from "./RoomCreator";

const RoomCreatorConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const [roomOption, setRoomOption] = useState<SignUpRoomOption>();

    const onChooseRoomOption = (option: SignUpRoomOption) => {
        setRoomOption(option);
        if (option === SignUpRoomOption.New) {
            dispatch(joinNewRoom());
        }
    };

    const onEnterRoomId = (id: string) => {
        dispatch(joinRoom({ id }));
    };

    return (
        <RoomCreator
            step={
                !!roomOption
                    ? RoomCreatorStep.RoomId
                    : RoomCreatorStep.RoomOption
            }
            onChooseRoomOption={onChooseRoomOption}
            onEnterRoomId={onEnterRoomId}
        />
    );
};

export default RoomCreatorConnect;

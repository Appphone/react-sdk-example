import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { joinNewRoom, joinRoom } from "../../../store/reducer";
import { RoomOption } from "../room-option-form/RoomOptionForm";
import RoomCreator, { RoomCreatorStep } from "./RoomCreator";

const RoomCreatorConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const [roomOption, setRoomOption] = useState<RoomOption>();

    const onChooseRoomOption = (option: RoomOption) => {
        setRoomOption(option);
        if (option === RoomOption.New) {
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

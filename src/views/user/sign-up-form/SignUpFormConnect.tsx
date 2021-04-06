import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { joinNewRoom, joinRoom, signUp } from "../../../store/reducer";
import { RoomOption } from "../../room/room-option-form/RoomOptionForm";
import SignUpForm, { SignUpFormStep } from "./SignUpForm";

const SignUpFormConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const isConnected = useAppSelector((state) => !!state.socket?.isConnected);
    const [roomOption, setRoomOption] = useState<RoomOption>();

    const onUsernameSet = (username: string) => {
        dispatch(signUp(username));
    };

    const onChooseRoomOption = (option: RoomOption) => {
        setRoomOption(option);
        if (option === RoomOption.New) {
            dispatch(joinNewRoom());
        }
    };

    const onEnterRoomId = (id: string) => {
        dispatch(joinRoom({ id }));
    };

    let step: SignUpFormStep | undefined = undefined;

    if (!isConnected) {
        step = SignUpFormStep.Username;
    } else {
        step = SignUpFormStep.RoomOption;
    }

    if (roomOption === RoomOption.Existing) {
        step = SignUpFormStep.Room;
    }

    return step !== undefined ? (
        <SignUpForm
            step={step}
            onUsernameSet={onUsernameSet}
            onChooseRoomOption={onChooseRoomOption}
            onEnterRoomId={onEnterRoomId}
        />
    ) : null;
};

export default SignUpFormConnect;

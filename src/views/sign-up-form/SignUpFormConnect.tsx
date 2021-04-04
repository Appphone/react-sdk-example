import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { joinNewRoom, signUp } from "../../store/reducer";
import { SignUpRoomOption } from "../sign-up-form-room-option/SignUpFormRoomOption";
import SignUpForm, { SignUpFormStep } from "./SignUpForm";

const SignUpFormConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const isConnected = useAppSelector((state) => !!state.socket?.isConnected);
    const [roomOption, setRoomOption] = useState<SignUpRoomOption>();

    const onUsernameSet = (username: string) => {
        dispatch(signUp(username));
    };

    const onChooseRoomOption = (option: SignUpRoomOption) => {
        setRoomOption(option);
        if (option === SignUpRoomOption.New) {
            dispatch(joinNewRoom());
        }
    };

    let step: SignUpFormStep | undefined = undefined;

    if (!isConnected) {
        step = SignUpFormStep.Username;
    } else {
        step = SignUpFormStep.RoomOption;
    }

    if (roomOption === SignUpRoomOption.Existing) {
        step = SignUpFormStep.Room;
    }

    return step !== undefined ? (
        <SignUpForm
            step={step}
            onUsernameSet={onUsernameSet}
            onChooseRoomOption={onChooseRoomOption}
        />
    ) : null;
};

export default SignUpFormConnect;

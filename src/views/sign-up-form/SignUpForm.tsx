import React from "react";
import SignUpFormRoomOption, {
    SignUpRoomOption,
} from "../sign-up-form-room-option/SignUpFormRoomOption";
import SignUpFormUsername from "../sign-up-form-username/SignUpFormUsername";
import "./SignUpForm.css";

export enum SignUpFormStep {
    Username,
    RoomOption,
    Room,
}

export interface SignUpFormProps {
    step: SignUpFormStep;
    onUsernameSet: (username: string) => void;
    onChooseRoomOption: (option: SignUpRoomOption) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
    step,
    onUsernameSet,
    onChooseRoomOption,
}) => {
    let renderedStep = null;

    switch (step) {
        case SignUpFormStep.Username:
            renderedStep = <SignUpFormUsername onSubmit={onUsernameSet} />;
            break;
        case SignUpFormStep.RoomOption:
            renderedStep = (
                <SignUpFormRoomOption onSubmit={onChooseRoomOption} />
            );
            break;
    }

    return <div className="signup__form">{renderedStep}</div>;
};

export default SignUpForm;

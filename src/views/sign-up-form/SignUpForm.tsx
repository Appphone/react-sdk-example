import React from "react";
import SignUpFormRoomOption, {
    SignUpRoomOption,
} from "../sign-up-form-room-option/SignUpFormRoomOption";
import SignUpFormUsername from "../sign-up-form-username/SignUpFormUsername";
import SignUpFormRoomId from "../sign-up-room-id/SignUpFormRoomId";
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
    onEnterRoomId: (id: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
    step,
    onUsernameSet,
    onChooseRoomOption,
    onEnterRoomId,
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
        case SignUpFormStep.Room:
            renderedStep = <SignUpFormRoomId onSubmit={onEnterRoomId} />;
            break;
    }

    return (
        <div className="signup__form">
            <div className="signup__form__step">
                <div className="font-extra-bold">{step + 1})</div>
                <div>{renderedStep}</div>
            </div>
        </div>
    );
};

export default SignUpForm;

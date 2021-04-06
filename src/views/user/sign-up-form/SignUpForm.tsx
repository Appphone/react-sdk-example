import React from "react";
import RoomIdForm from "../../room/room-id-form/RoomIdForm";
import RoomOptionForm, {
    RoomOption,
} from "../../room/room-option-form/RoomOptionForm";
import SignUpFormUsername from "../username-form/UsernameForm";
import "./SignUpForm.css";

export enum SignUpFormStep {
    Username,
    RoomOption,
    Room,
}

export interface SignUpFormProps {
    step: SignUpFormStep;
    onUsernameSet: (username: string) => void;
    onChooseRoomOption: (option: RoomOption) => void;
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
            renderedStep = <RoomOptionForm onSubmit={onChooseRoomOption} />;
            break;
        case SignUpFormStep.Room:
            renderedStep = <RoomIdForm onSubmit={onEnterRoomId} />;
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

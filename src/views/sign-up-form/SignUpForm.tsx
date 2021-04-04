import React, { useState } from "react";
import SignUpPayload from "../../models/SignUpPayload";
import SignUpFormRoomOption, {
    SignUpRoomOption,
} from "../sign-up-form-room-type/SignUpFormRoomOption";
import SignUpFormUsername from "../sign-up-form-username/SignUpFormUsername";
import "./SignUpForm.css";

export interface SignUpFormProps {
    onSubmit: (payload: SignUpPayload) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = useState<string | undefined>(undefined);

    const onChooseRoomOption = (option: SignUpRoomOption) => {
        if (username && option === "new") onSubmit({ username });
    };

    return (
        <div className="signup__form">
            <SignUpFormUsername onInput={setUsername} />
            <SignUpFormRoomOption
                disabled={!username}
                onSubmit={onChooseRoomOption}
            />
        </div>
    );
};

export default SignUpForm;

import React, { useState } from "react";
import SignUpFormRoomOption from "../sign-up-form-room-type/SignUpFormRoomOption";
import SignUpFormUsername from "../sign-up-form-username/SignUpFormUsername";
import "./SignUpForm.css";

const SignUpForm: React.FC = () => {
    const [username, setUsername] = useState<string | undefined>(undefined);

    return (
        <div className="signup__form">
            <SignUpFormUsername onInput={setUsername} />
            <SignUpFormRoomOption onSubmit={() => {}} />
        </div>
    );
};

export default SignUpForm;

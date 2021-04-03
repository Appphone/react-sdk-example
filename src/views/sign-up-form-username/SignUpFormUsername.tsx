import React, { useState } from "react";
import TextField from "../text-field/TextField";
import Field from "@bit/jorgemoreira.react.input.field";

export interface SignUpFormUsernameProps {
    onInput: (username?: string) => void;
}

const SignUpFormUsername: React.FC<SignUpFormUsernameProps> = ({ onInput }) => {
    const [usernameError, setUsernameError] = useState<string | boolean>(false);

    const validateUsername = (username: string) => {
        if (!/^[a-zA-Z0-9-]+$/.test(username)) {
            setUsernameError("Please use only alphanumeric characteres");
            onInput(undefined);
        } else {
            setUsernameError(false);
            onInput(username);
        }
    };

    return (
        <div className="signup__form__step">
            <p className="font-extra-bold">1)</p>
            <div>
                <p>Choose a username</p>
                <p className="text-sm">
                    Only alphanumeric characteres are allowed, without spaces
                </p>
                <Field error={usernameError}>
                    <TextField onInput={validateUsername} />
                </Field>
            </div>
        </div>
    );
};

export default SignUpFormUsername;

import React, { useState } from "react";
import TextField from "../text-field/TextField";
import Field from "@bit/jorgemoreira.react.input.field";
import Button from "../button/Button";

export interface SignUpFormUsernameProps {
    onSubmit: (username: string) => void;
}

const SignUpFormUsername: React.FC<SignUpFormUsernameProps> = ({
    onSubmit,
}) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState<string | boolean>(false);

    const validateUsername = (username: string) => {
        setUsername(username);

        if (!/^[a-zA-Z0-9-]+$/.test(username)) {
            setUsernameError("Please use only alphanumeric characteres");
        } else {
            setUsernameError(false);
        }
    };

    const onSubmitClick = () => {
        if (!usernameError) onSubmit(username);
    };

    return (
        <div>
            <Field
                label="Choose a username"
                hint="Only alphanumeric characteres are allowed, without spaces"
                error={usernameError}
            >
                <TextField onInput={validateUsername} />
            </Field>
            <Button onClick={onSubmitClick}>Next</Button>
        </div>
    );
};

export default SignUpFormUsername;

import React, { useState } from "react";
import TextField from "../../text-field/TextField";
import Field from "@bit/jorgemoreira.react.input.field";
import Button from "../../button/Button";

export interface UsernameFormProps {
    errorMessage?: string;
    onSubmit: (username: string) => void;
}

const UsernameForm: React.FC<UsernameFormProps> = ({
    errorMessage,
    onSubmit,
}) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState<string | boolean>(false);

    const errorToShow = usernameError || errorMessage;

    const validateUsername = (username: string) => {
        setUsername(username);

        if (!/^[a-zA-Z0-9-]+$/.test(username)) {
            setUsernameError("Please use only alphanumeric characters");
        } else if (username.length > 20) {
            setUsernameError("Please don't use more than 20 characters");
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
                error={errorToShow}
            >
                <TextField onInput={validateUsername} />
            </Field>
            <Button primary onClick={onSubmitClick}>
                Next
            </Button>
        </div>
    );
};

export default UsernameForm;

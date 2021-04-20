import React, { useState } from "react";
import TextField from "../../text-field/TextField";
import Field from "@bit/jorgemoreira.react.input.field";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import Button from "../../button/Button";
import "./UsernameForm.css";

export interface UsernameFormProps {
    isSigningIn: boolean;
    isOffline: boolean;
    errorMessage?: string;
    onSubmit: (username: string) => void;
}

const UsernameForm: React.FC<UsernameFormProps> = ({
    isSigningIn,
    isOffline,
    errorMessage,
    onSubmit,
}) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState<string | boolean>(false);

    const errorToShow = usernameError || errorMessage;

    const validateUsername = (username: string) => {
        setUsername(username);

        if (!/^[a-zA-Z0-9-]+$/.test(username)) {
            setUsernameError(
                "Please use only alphanumeric characters, without spaces"
            );
        } else if (username.length > 20) {
            setUsernameError("Please don't use more than 20 characters");
        } else {
            setUsernameError(false);
        }
    };

    const onSubmitClick = () => {
        if (!usernameError) onSubmit(username);
    };

    const usernameInput = !isSigningIn && !isOffline && (
        <TextField
            value={username}
            placeholder="Username"
            error={!!errorToShow}
            disabled={isOffline}
            onChange={validateUsername}
            onEnter={onSubmitClick}
        />
    );

    const submitButton = !isSigningIn && !isOffline && (
        <Button primary onClick={onSubmitClick}>
            Next
        </Button>
    );

    return (
        <div className="username-form">
            <Field error={errorToShow}>
                <div className="username-form__field">
                    {usernameInput}
                    {submitButton}
                </div>
            </Field>
            {isSigningIn && !isOffline && (
                <Spinner inline>Please wait...</Spinner>
            )}
        </div>
    );
};

export default UsernameForm;

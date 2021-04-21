import React, { useState } from "react";
import TextField from "../../text-field/TextField";
import Field from "@bit/jorgemoreira.react.input.field";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import Button from "../../button/Button";
import "./UsernameForm.css";
import Alert from "../../alert/Alert";
import ResponsiveFieldContent from "../../responsive-field-content/ResponsiveFieldContent";

export interface UsernameFormProps {
    isBlocked: boolean;
    isSigningIn: boolean;
    isOffline: boolean;
    errorMessage?: string;
    onSubmit: (username: string) => void;
}

const UsernameForm: React.FC<UsernameFormProps> = ({
    isBlocked,
    isSigningIn,
    isOffline,
    errorMessage,
    onSubmit,
}) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState<string>();

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
            setUsernameError(undefined);
        }
    };

    const onSubmitClick = () => {
        if (!usernameError) onSubmit(username);
    };

    let content;

    if (isBlocked) {
        content = (
            <div>You've reached the maximum number of active connections.</div>
        );
    } else if (isOffline) {
        content = <Alert danger>{errorMessage}</Alert>;
    } else if (isSigningIn) {
        content = <Spinner inline>Please wait...</Spinner>;
    } else {
        content = (
            <Field error={errorToShow}>
                <ResponsiveFieldContent
                    textField={
                        <TextField
                            value={username}
                            placeholder="Username"
                            error={!!errorToShow}
                            disabled={isOffline}
                            onChange={validateUsername}
                            onEnter={onSubmitClick}
                        />
                    }
                    button={
                        <Button primary onClick={onSubmitClick}>
                            Next
                        </Button>
                    }
                />
            </Field>
        );
    }

    return <div className="username-form">{content}</div>;
};

export default UsernameForm;

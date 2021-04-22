import React from "react";
import TextField from "../../text-field/TextField";
import Field from "@bit/jorgemoreira.react.input.field";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import Button from "../../button/Button";
import "./UsernameForm.css";
import Alert from "../../alert/Alert";
import ResponsiveFieldContent from "../../responsive-field-content/ResponsiveFieldContent";
import useResourceName from "../../../hooks/useResourceName";

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
    const {
        name: username,
        setAndValidateName: setAndValidateUsername,
        error: usernameError,
    } = useResourceName();

    const errorToShow = usernameError || errorMessage;

    const onSubmitClick = () => {
        if (!usernameError) onSubmit(username);
    };

    let content;

    if (isBlocked) {
        content = (
            <Alert warning>
                You've reached the maximum number of active connections.
            </Alert>
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
                            onChange={setAndValidateUsername}
                            onEnter={onSubmitClick}
                        />
                    }
                    button={
                        <Button
                            primary
                            disabled={!!usernameError}
                            onClick={onSubmitClick}
                        >
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

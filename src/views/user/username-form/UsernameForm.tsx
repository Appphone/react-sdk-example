import React, { useState } from "react";
import TextField from "../../text-field/TextField";
import Field from "@bit/jorgemoreira.react.input.field";
import Button from "../../button/Button";
import { useAppSelector } from "../../../store/hooks";

export interface UsernameFormProps {
    onSubmit: (username: string) => void;
}

const UsernameForm: React.FC<UsernameFormProps> = ({ onSubmit }) => {
    const isOffline = useAppSelector((state) => state.isOffline);
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState<string | boolean>(false);

    const errorToShow =
        usernameError ||
        (isOffline
            ? `We're having connection issues. Are you online?`
            : undefined);

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
                error={errorToShow}
            >
                <TextField onInput={validateUsername} />
            </Field>
            <Button onClick={onSubmitClick}>Next</Button>
        </div>
    );
};

export default UsernameForm;

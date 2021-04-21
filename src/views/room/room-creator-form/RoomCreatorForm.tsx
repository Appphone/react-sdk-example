import Field from "@bit/jorgemoreira.react.input.field";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import React, { useState } from "react";
import Button from "../../button/Button";
import TextField from "../../text-field/TextField";

export interface RoomCreatorFormProps {
    isJoining: boolean;
    errorMessage?: string;
    onSubmit: (id: string) => void;
}

const RoomCreatorForm: React.FC<RoomCreatorFormProps> = ({
    isJoining,
    errorMessage,
    onSubmit,
}) => {
    const [name, setName] = useState<string>("");

    return (
        <div>
            <Field label="Enter a name for your new room" error={errorMessage}>
                {!isJoining && (
                    <TextField
                        value={name}
                        onChange={setName}
                        onEnter={() => name && onSubmit(name)}
                    />
                )}
            </Field>
            {isJoining ? (
                <Spinner inline>Creating room...</Spinner>
            ) : (
                <Button primary onClick={() => name && onSubmit(name)}>
                    Create
                </Button>
            )}
        </div>
    );
};

export default RoomCreatorForm;

import Field from "@bit/jorgemoreira.react.input.field";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import React, { useState } from "react";
import Button from "../../button/Button";
import TextField from "../../text-field/TextField";

export interface RoomIdFormProps {
    isJoining: boolean;
    errorMessage?: string;
    onSubmit: (id: string) => void;
}

const RoomIdForm: React.FC<RoomIdFormProps> = ({
    isJoining,
    errorMessage,
    onSubmit,
}) => {
    const [id, setId] = useState<string>();

    return (
        <div>
            <Field label="Enter the room id" error={errorMessage}>
                {!isJoining && (
                    <TextField
                        value={id}
                        onChange={setId}
                        onEnter={() => id && onSubmit(id)}
                    />
                )}
            </Field>
            {isJoining ? (
                <Spinner inline>Joining room...</Spinner>
            ) : (
                <Button primary onClick={() => id && onSubmit(id)}>
                    Join
                </Button>
            )}
        </div>
    );
};

export default RoomIdForm;

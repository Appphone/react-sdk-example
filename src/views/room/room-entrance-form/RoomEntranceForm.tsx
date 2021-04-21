import Field from "@bit/jorgemoreira.react.input.field";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import React, { useState } from "react";
import Button from "../../button/Button";
import ResponsiveFieldContent from "../../responsive-field-content/ResponsiveFieldContent";
import TextField from "../../text-field/TextField";

export interface RoomEntranceFormProps {
    isJoining: boolean;
    errorMessage?: string;
    onSubmit: (id: string) => void;
}

const RoomEntranceForm: React.FC<RoomEntranceFormProps> = ({
    isJoining,
    errorMessage,
    onSubmit,
}) => {
    const [id, setId] = useState<string>("");

    return (
        <Field label="Enter the room id:" error={errorMessage}>
            {isJoining ? (
                <Spinner inline>Joining room...</Spinner>
            ) : (
                <ResponsiveFieldContent
                    textField={
                        <TextField
                            value={id}
                            onChange={setId}
                            onEnter={() => id && onSubmit(id)}
                        />
                    }
                    button={
                        <Button primary onClick={() => id && onSubmit(id)}>
                            Join
                        </Button>
                    }
                />
            )}
        </Field>
    );
};

export default RoomEntranceForm;

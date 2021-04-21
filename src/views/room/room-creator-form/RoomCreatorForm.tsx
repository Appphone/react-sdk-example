import Field from "@bit/jorgemoreira.react.input.field";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import React, { useState } from "react";
import Button from "../../button/Button";
import ResponsiveFieldContent from "../../responsive-field-content/ResponsiveFieldContent";
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
        <Field
            label="Enter a name for your new room:"
            error={!isJoining && errorMessage}
        >
            {isJoining ? (
                <Spinner inline>Creating room...</Spinner>
            ) : (
                <ResponsiveFieldContent
                    textField={
                        <TextField
                            value={name}
                            onChange={setName}
                            onEnter={() => name && onSubmit(name)}
                        />
                    }
                    button={
                        <Button primary onClick={() => name && onSubmit(name)}>
                            Create
                        </Button>
                    }
                />
            )}
        </Field>
    );
};

export default RoomCreatorForm;

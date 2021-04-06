import Field from "@bit/jorgemoreira.react.input.field";
import React, { useState } from "react";
import Button from "../../button/Button";
import TextField from "../../text-field/TextField";

export interface RoomIdFormProps {
    onSubmit: (id: string) => void;
}

const RoomIdForm: React.FC<RoomIdFormProps> = ({ onSubmit }) => {
    const [id, setId] = useState<string>();

    return (
        <div>
            <Field label="Enter the room id">
                <TextField value={id} onInput={setId} />
            </Field>
            <Button onClick={() => id && onSubmit(id)}>Join</Button>
        </div>
    );
};

export default RoomIdForm;

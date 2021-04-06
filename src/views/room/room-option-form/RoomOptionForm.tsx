import Field from "@bit/jorgemoreira.react.input.field";
import React from "react";
import Button from "../../button/Button";

export enum RoomOption {
    New,
    Existing,
}

export interface RoomOptionFormProps {
    onSubmit: (option: RoomOption) => void;
}

const RoomOptionForm: React.FC<RoomOptionFormProps> = ({ onSubmit }) => {
    return (
        <div>
            <Field
                label="Join a room"
                hint="You will be able to join multiple rooms later"
            />
            <div>
                <Button onClick={() => onSubmit(RoomOption.New)}>
                    Join a new room
                </Button>
                <Button onClick={() => onSubmit(RoomOption.Existing)}>
                    Join an existing room
                </Button>
            </div>
        </div>
    );
};

export default RoomOptionForm;

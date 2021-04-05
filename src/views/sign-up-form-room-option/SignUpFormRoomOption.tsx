import Field from "@bit/jorgemoreira.react.input.field";
import React from "react";
import Button from "../button/Button";

export enum SignUpRoomOption {
    New,
    Existing,
}

export interface SignUpFormRoomOptionProps {
    onSubmit: (option: SignUpRoomOption) => void;
}

const SignUpFormRoomOption: React.FC<SignUpFormRoomOptionProps> = ({
    onSubmit,
}) => {
    return (
        <div>
            <Field
                label="Join a room"
                hint="You will be able to join multiple rooms later"
            />
            <div>
                <Button onClick={() => onSubmit(SignUpRoomOption.New)}>
                    Join a new room
                </Button>
                <Button onClick={() => onSubmit(SignUpRoomOption.Existing)}>
                    Join an existing room
                </Button>
            </div>
        </div>
    );
};

export default SignUpFormRoomOption;

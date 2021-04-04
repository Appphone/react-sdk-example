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
        <div className="signup__form__step">
            <p className="font-extra-bold">2)</p>
            <div>
                <p>Join a room</p>
                <p className="text-sm">
                    You will be able to join multiple rooms later
                </p>
                <div>
                    <Button onClick={() => onSubmit(SignUpRoomOption.New)}>
                        Join a new room
                    </Button>
                    <Button onClick={() => onSubmit(SignUpRoomOption.Existing)}>
                        Join an existing room
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignUpFormRoomOption;

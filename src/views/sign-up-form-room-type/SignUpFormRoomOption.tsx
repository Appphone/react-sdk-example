import React from "react";
import Button from "../button/Button";

export type SignUpRoomOption = "new" | "existing";

export interface SignUpFormRoomOptionProps {
    disabled: boolean;
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
                    <Button onClick={() => onSubmit("new")}>
                        Join a new room
                    </Button>
                    <Button onClick={() => onSubmit("existing")}>
                        Join an existing room
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignUpFormRoomOption;

import Field from "@bit/jorgemoreira.react.input.field";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import React from "react";
import Button from "../../button/Button";

export enum RoomOption {
    New,
    Existing,
}

export interface RoomOptionFormProps {
    isJoining: boolean;
    errorMessage?: string;
    onSubmit: (option: RoomOption) => void;
}

const RoomOptionForm: React.FC<RoomOptionFormProps> = ({
    isJoining,
    errorMessage,
    onSubmit,
}) => {
    return (
        <div>
            <Field
                label="Join a room"
                hint="You will be able to join multiple rooms later"
                error={errorMessage}
            />
            {isJoining ? (
                <Spinner inline>Joining room...</Spinner>
            ) : (
                <div>
                    <Button primary onClick={() => onSubmit(RoomOption.New)}>
                        Join a new room
                    </Button>
                    <Button
                        primary
                        onClick={() => onSubmit(RoomOption.Existing)}
                    >
                        Join an existing room
                    </Button>
                </div>
            )}
        </div>
    );
};

export default RoomOptionForm;

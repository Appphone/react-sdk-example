import Field from "@bit/jorgemoreira.headless-react.input.field";
import Spinner from "@bit/jorgemoreira.headless-react.progress.spinner";
import React, { useEffect } from "react";
import useResourceName from "../../../hooks/useResourceName";
import { useAppDispatch } from "../../../store/hooks";
import { resetJoinRoomError } from "../../../store/reducer";
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
    const dispatch = useAppDispatch();
    const { name, setAndValidateName, error: nameError } = useResourceName();

    const errorToShow = isJoining ? undefined : nameError || errorMessage;

    useEffect(() => {
        dispatch(resetJoinRoomError());
    }, [dispatch]);

    return (
        <Field label="Enter a name for your new room:" error={errorToShow}>
            {isJoining ? (
                <Spinner inline>Creating room...</Spinner>
            ) : (
                <ResponsiveFieldContent
                    textField={
                        <TextField
                            value={name}
                            onChange={setAndValidateName}
                            onEnter={() => name && onSubmit(name)}
                        />
                    }
                    button={
                        <Button
                            primary
                            disabled={!!nameError}
                            onClick={() => name && onSubmit(name)}
                        >
                            Create
                        </Button>
                    }
                />
            )}
        </Field>
    );
};

export default RoomCreatorForm;

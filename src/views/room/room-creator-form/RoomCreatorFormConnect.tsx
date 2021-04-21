import React from "react";
import useRoomJoinState from "../../../hooks/useRoomJoinState";
import { useAppDispatch } from "../../../store/hooks";
import { createRoom } from "../../../store/reducer";
import RoomCreatorForm from "./RoomCreatorForm";

const RoomCreatorFormConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isJoining, joinErrorMessage } = useRoomJoinState();

    const onSubmitNewRoomName = (name: string) => {
        dispatch(createRoom({ name }));
    };

    return (
        <RoomCreatorForm
            isJoining={isJoining}
            errorMessage={joinErrorMessage}
            onSubmit={onSubmitNewRoomName}
        />
    );
};

export default RoomCreatorFormConnect;

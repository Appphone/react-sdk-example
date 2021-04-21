import React from "react";
import useRoomJoinState from "../../../hooks/useRoomJoinState";
import { useAppDispatch } from "../../../store/hooks";
import { joinRoom } from "../../../store/reducer";
import RoomEntranceForm from "./RoomEntranceForm";

const RoomEntranceFormConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isJoining, joinErrorMessage } = useRoomJoinState();

    const onSubmitRoomId = (id: string) => {
        dispatch(joinRoom({ id }));
    };

    return (
        <RoomEntranceForm
            isJoining={isJoining}
            errorMessage={joinErrorMessage}
            onSubmit={onSubmitRoomId}
        />
    );
};

export default RoomEntranceFormConnect;

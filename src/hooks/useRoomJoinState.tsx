import { useAppSelector } from "../store/hooks";

const useRoomJoinState = () => {
    const isJoining = useAppSelector((state) => state.isJoiningRoom);
    const joinErrorMessage = useAppSelector((state) => state.joinRoomError);

    return { isJoining, joinErrorMessage };
};

export default useRoomJoinState;

import React from "react";
import useUrlHash from "../../../hooks/useUrlHash";
import { useAppSelector } from "../../../store/hooks";
import SignUpForm from "./SignUpForm";

const SignUpFormConnect: React.FC = () => {
    const isConnected = useAppSelector((state) => !!state.socket?.isConnected);
    const { hash: roomIdToJoin, onClear: onDismissRoomId } = useUrlHash();

    return (
        <SignUpForm
            isConnected={isConnected}
            roomIdToJoin={roomIdToJoin}
            onDismissRoomId={onDismissRoomId}
        />
    );
};

export default SignUpFormConnect;

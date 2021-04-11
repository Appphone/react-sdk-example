import React from "react";
import useUrlHash from "../../../hooks/useUrlHash";
import { useAppSelector } from "../../../store/hooks";
import SignUpForm from "./SignUpForm";

const SignUpFormConnect: React.FC = () => {
    const isConnected = useAppSelector((state) => !!state.socket?.isConnected);
    const isBlocked = useAppSelector((state) => state.isSignInBlocked);
    const { hash: roomIdToJoin, onClear: onDismissRoomId } = useUrlHash();

    return (
        <SignUpForm
            isConnected={isConnected}
            isBlocked={isBlocked}
            roomIdToJoin={roomIdToJoin}
            onDismissRoomId={onDismissRoomId}
        />
    );
};

export default SignUpFormConnect;

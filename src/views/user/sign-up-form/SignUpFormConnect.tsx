import React, { useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import SignUpForm from "./SignUpForm";

const SignUpFormConnect: React.FC = () => {
    const isConnected = useAppSelector((state) => !!state.socket?.isConnected);
    const [roomIdToJoin, setRoomIdToJoin] = useState<string | undefined>(
        window.location.hash.substr(1)
    );

    const onDeclineRoomId = () => {
        window.location.hash = "";
        setRoomIdToJoin(undefined);
    };

    return (
        <SignUpForm
            isConnected={isConnected}
            roomIdToJoin={roomIdToJoin}
            onDeclineRoomId={onDeclineRoomId}
        />
    );
};

export default SignUpFormConnect;

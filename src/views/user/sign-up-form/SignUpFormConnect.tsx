import React from "react";
import { useAppSelector } from "../../../store/hooks";
import RoomCreatorConnect from "../../room/room-creator/RoomCreatorConnect";
import UsernameFormConnect from "../username-form/UsernameFormConnect";
import SignUpForm from "./SignUpForm";

const SignUpFormConnect: React.FC = () => {
    const isConnected = useAppSelector((state) => !!state.socket?.isConnected);

    return (
        <SignUpForm step={isConnected ? 2 : 1}>
            {isConnected ? <RoomCreatorConnect /> : <UsernameFormConnect />}
        </SignUpForm>
    );
};

export default SignUpFormConnect;

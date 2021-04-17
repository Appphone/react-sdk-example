import React from "react";
import { useAppSelector } from "../../../store/hooks";
import SignUpForm from "./SignUpForm";

const SignUpFormConnect: React.FC = () => {
    const isConnected = useAppSelector((state) => !!state.socket?.isConnected);
    const isBlocked = useAppSelector((state) => state.isSignInBlocked);

    return <SignUpForm isConnected={isConnected} isBlocked={isBlocked} />;
};

export default SignUpFormConnect;

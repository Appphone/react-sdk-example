import React from "react";
import SignUpPayload from "../../models/SignUpPayload";
import { useAppDispatch } from "../../store/hooks";
import { signUp } from "../../store/reducer";
import SignUpScreen from "./SignUpScreen";

const SignUpScreenConnect: React.FC = () => {
    const dispatch = useAppDispatch();

    const onSubmit = (payload: SignUpPayload) => {
        dispatch(signUp(payload.username));
    };

    return <SignUpScreen onSubmit={onSubmit} />;
};

export default SignUpScreenConnect;

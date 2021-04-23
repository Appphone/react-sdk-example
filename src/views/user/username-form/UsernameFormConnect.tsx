import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { signUp } from "../../../store/reducer";
import UsernameForm from "./UsernameForm";

const UsernameFormConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const isOffline = useAppSelector((state) => state.isOffline);
    const signUpError = useAppSelector((state) => state.signUpError);
    const isSigningIn = useAppSelector((state) => state.isSigningIn);
    const isBlocked = useAppSelector((state) => state.isSignInBlocked);

    const onUsernameSet = (username: string) => {
        dispatch(signUp({ username }));
    };

    const errorMessage = isOffline
        ? "We're having connection issues. Are you online?"
        : signUpError;

    return (
        <UsernameForm
            isBlocked={isBlocked}
            isSigningIn={isSigningIn}
            isOffline={isOffline}
            errorMessage={errorMessage}
            onSubmit={onUsernameSet}
        />
    );
};

export default UsernameFormConnect;

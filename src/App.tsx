import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import Layout from "./views/layout/Layout";
import SignUpScreenConnect from "./screens/sign-up/SignUpScreenConnect";
import { login } from "./store/reducer";

const App: React.FC = () => {
    const dispatch = useAppDispatch();

    const isLoggedIn = useAppSelector((state) => state.socket?.isConnected);
    const isSigning = useAppSelector(
        (state) => state.socket?.username && !state.socket?.isConnected
    );

    useEffect(() => {
        dispatch(login());
    }, [dispatch]);

    const content = isSigning ? (
        <Spinner />
    ) : isLoggedIn ? (
        <div>Logged In</div>
    ) : (
        <SignUpScreenConnect />
    );

    return <Layout>{content}</Layout>;
};

export default App;

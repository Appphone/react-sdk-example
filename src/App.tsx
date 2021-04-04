import React from "react";
import { useAppSelector } from "./store/hooks";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import Layout from "./views/layout/Layout";
import SignUpScreenConnect from "./screens/sign-up/SignUpScreenConnect";

const App: React.FC = () => {
    const isLoggedIn = useAppSelector((state) => state.socket?.isConnected);
    const isSigning = useAppSelector(
        (state) => state.socket?.username && !state.socket?.isConnected
    );

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

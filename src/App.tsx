import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import Layout from "./views/layout/Layout";
import SignUpScreenConnect from "./screens/sign-up/SignUpScreenConnect";
import { login, signOut } from "./store/reducer";
import Button from "./views/button/Button";

const App: React.FC = () => {
    const dispatch = useAppDispatch();

    const isLoggedIn = useAppSelector(
        (state) => state.socket?.isConnected && state.rooms?.length
    );

    useEffect(() => {
        dispatch(login());
    }, [dispatch]);

    const content = isLoggedIn ? (
        <div>
            Logged In
            <Button onClick={() => dispatch(signOut())}>Sign out</Button>
        </div>
    ) : (
        <SignUpScreenConnect />
    );

    return <Layout>{content}</Layout>;
};

export default App;

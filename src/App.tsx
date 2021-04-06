import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import Layout from "./views/layout/Layout";
import { login } from "./store/reducer";
import SignUpScreen from "./screens/sign-up/SignUpScreen";
import LoggedScreenConnect from "./screens/logged/LoggedScreenConnect";

const App: React.FC = () => {
    const dispatch = useAppDispatch();

    const isLoggedIn = useAppSelector(
        (state) => state.socket?.isConnected && state.rooms?.length
    );

    useEffect(() => {
        dispatch(login());
    }, [dispatch]);

    const content = isLoggedIn ? <LoggedScreenConnect /> : <SignUpScreen />;

    return <Layout>{content}</Layout>;
};

export default App;

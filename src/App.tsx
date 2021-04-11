import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
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

    return isLoggedIn ? <LoggedScreenConnect /> : <SignUpScreen />;
};

export default App;

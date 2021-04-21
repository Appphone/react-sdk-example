import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/hooks";
import { signOut } from "../../store/reducer";
import { getUsername } from "../../store/selectors";
import Header from "./Header";
import "./Header.css";

const HeaderConnect: React.FC = () => {
    const dispatch = useAppDispatch();
    const username = useSelector(getUsername);

    const onSignOut = () => {
        dispatch(signOut());
    };

    return username ? (
        <Header username={username} onSignOut={onSignOut} />
    ) : null;
};

export default HeaderConnect;

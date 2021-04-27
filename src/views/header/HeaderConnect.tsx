import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/hooks";
import { signOut } from "../../store/reducer";
import { getUsername } from "../../store/selectors";
import Header from "./Header";
import "./Header.css";

interface HeaderConnectProps {
    onMenuClick: () => void;
}

const HeaderConnect: React.FC<HeaderConnectProps> = ({ onMenuClick }) => {
    const dispatch = useAppDispatch();
    const username = useSelector(getUsername);

    const onSignOut = () => {
        dispatch(signOut());
    };

    return username ? (
        <Header
            username={username}
            onMenuClick={onMenuClick}
            onSignOut={onSignOut}
        />
    ) : null;
};

export default HeaderConnect;

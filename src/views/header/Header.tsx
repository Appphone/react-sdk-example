import React from "react";
import Button from "../button/Button";
import "./Header.css";

export interface HeaderProps {
    username: string;
    onSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({ username, onSignOut }) => {
    return (
        <div className="header">
            <h1 className="header__title">Private Messaging</h1>
            <div className="header__logged-label">Logged as</div>
            <div className="header__logged-username">@{username}</div>
            <div className="header__sign-out">
                <Button transparent onClick={onSignOut}>
                    Sign Out
                </Button>
            </div>
        </div>
    );
};

export default Header;

import React from "react";
import Button from "../button/Button";
import MenuIcon from "../icons/MenuIcon";
import "./Header.css";

export interface HeaderProps {
    username: string;
    onMenuClick: () => void;
    onSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({
    username,
    onMenuClick,
    onSignOut,
}) => {
    return (
        <div className="header">
            <div className="header__icon" onClick={onMenuClick}>
                <MenuIcon />
            </div>
            <h1 className="header__title">Private Messaging</h1>
            <div className="header__user">
                <div className="header__user__label">Logged as</div>
                <div className="header__user__username">@{username}</div>
                <div className="header__user__sign-out">
                    <Button transparent onClick={onSignOut}>
                        Sign Out
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;

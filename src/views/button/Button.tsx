import classNames from "classnames";
import React from "react";
import "./Button.css";

export interface ButtonProps {
    primary?: boolean;
    small?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    primary,
    small,
    disabled,
    onClick,
    children,
}) => {
    const className = classNames("btn", {
        "btn--primary": primary,
        "btn--sm": small,
    });
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

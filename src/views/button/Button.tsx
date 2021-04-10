import classNames from "classnames";
import React from "react";
import "./Button.css";

export interface ButtonProps {
    primary?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    primary,
    disabled,
    onClick,
    children,
}) => {
    const className = classNames("btn", {
        "btn--primary": primary,
    });
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

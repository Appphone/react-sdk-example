import classNames from "classnames";
import React from "react";
import "./Button.css";

export interface ButtonProps {
    primary?: boolean;
    transparent?: boolean;
    small?: boolean;
    large?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    primary,
    transparent,
    small,
    large,
    disabled,
    onClick,
    children,
}) => {
    const className = classNames("btn", {
        "btn--primary": primary,
        "btn--transparent": transparent,
        "btn--sm": small,
        "btn--lg": large,
    });
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

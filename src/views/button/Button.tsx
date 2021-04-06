import React from "react";
import "./Button.css";

export interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ disabled, onClick, children }) => {
    return (
        <button className="btn" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

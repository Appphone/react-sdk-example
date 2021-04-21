import classNames from "classnames";
import React from "react";
import "./Alert.css";

export interface AlertProps {
    accent?: boolean;
    warning?: boolean;
    danger?: boolean;
}

const Alert: React.FC<AlertProps> = ({ children, accent, warning, danger }) => {
    const className = classNames("alert", {
        "alert--accent": accent,
        "alert--warning": warning,
        "alert--danger": danger,
    });
    return <div className={className}>{children}</div>;
};

export default Alert;

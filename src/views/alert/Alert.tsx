import classNames from "classnames";
import React from "react";
import "./Alert.css";

export interface AlertProps {
    accent?: boolean;
    warning?: boolean;
}

const Alert: React.FC<AlertProps> = ({ children, accent, warning }) => {
    const className = classNames("alert", {
        "alert--accent": accent,
        "alert--warning": warning,
    });
    return <div className={className}>{children}</div>;
};

export default Alert;

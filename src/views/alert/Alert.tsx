import classNames from "classnames";
import React from "react";
import "./Alert.css";

export interface AlertProps {
    message: string;
    warning?: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, warning }) => {
    const className = classNames("alert", {
        "alert--warning": warning,
    });
    return <div className={className}>{message}</div>;
};

export default Alert;

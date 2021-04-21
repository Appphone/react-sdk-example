import React from "react";
import "./ResponsiveFieldContent.css";

export interface ResponsiveFieldContentProps {
    textField: JSX.Element;
    button: JSX.Element;
}

const ResponsiveFieldContent: React.FC<ResponsiveFieldContentProps> = ({
    textField,
    button,
}) => {
    return (
        <div className="responsive-field-content">
            {textField}
            {button}
        </div>
    );
};

export default ResponsiveFieldContent;

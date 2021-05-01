import React from "react";
import IconProps from "./IconProps";

const CloseIcon: React.FC<IconProps> = ({ width = "24", height = "24" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={width}
            height={height}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
};

export default CloseIcon;

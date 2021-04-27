import React from "react";

interface MenuIconProps {
    width?: string;
    height?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({
    width = "100%",
    height = "100%",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={width}
            height={height}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    );
};

export default MenuIcon;

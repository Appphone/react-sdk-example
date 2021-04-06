import classNames from "classnames";
import React from "react";
import "./SidebarListItem.css";

export interface SidebarListItemProps {
    isActive?: boolean;
    onClick?: () => void;
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({
    isActive,
    onClick,
    children,
}) => {
    const className = classNames("sidebar__list__item", {
        "sidebar__list__item--active": isActive,
    });

    return (
        <li className={className} onClick={onClick}>
            {children}
        </li>
    );
};

export default SidebarListItem;

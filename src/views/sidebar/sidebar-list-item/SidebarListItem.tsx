import classNames from "classnames";
import React from "react";
import "./SidebarListItem.css";

export interface SidebarListItemProps {
    title: string;
    unreadCount?: number;
    isActive?: boolean;
    onClick?: () => void;
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({
    title,
    unreadCount,
    isActive,
    onClick,
}) => {
    const className = classNames("sidebar__list__item", {
        "sidebar__list__item--active": isActive,
        "sidebar__list__item--unread": !!unreadCount,
    });

    return (
        <li className={className} onClick={onClick}>
            <div className="sidebar__list__item__label">{title}</div>
            {!!unreadCount && (
                <div className="sidebar__list__item__badge">{unreadCount}</div>
            )}
        </li>
    );
};

export default SidebarListItem;

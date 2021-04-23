import React from "react";
import "./SidebarList.css";

const SidebarList: React.FC = ({ children }) => {
    return <ul className="sidebar__list">{children}</ul>;
};

export default SidebarList;

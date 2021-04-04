import React from "react";
import "./Layout.css";

const Layout: React.FC = ({ children }) => {
    return (
        <div className="layout">
            <div className="layout__content">{children}</div>
        </div>
    );
};

export default Layout;

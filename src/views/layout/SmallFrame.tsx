import React from "react";
import "./SmallFrame.css";

const SmallFrame: React.FC = ({ children }) => {
    return (
        <div className="small-frame">
            <div className="small-frame__content">{children}</div>
        </div>
    );
};

export default SmallFrame;

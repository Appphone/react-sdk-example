import classNames from "classnames";
import React from "react";
import "./MasterDetail.css";

export interface MasterDetailProps {
    master: JSX.Element;
    detail: JSX.Element;
    showMaster: boolean;
    onHideMaster: () => void;
}

const MasterDetail: React.FC<MasterDetailProps> = ({
    master,
    detail,
    showMaster = true,
    onHideMaster,
}) => {
    const className = classNames("master-detail", {
        "master-detail--closed": !showMaster,
    });

    return (
        <div className={className}>
            <div className="master-detail__master">{master}</div>
            <div className="master-detail__detail">{detail}</div>
            <div className="master-detail__overlay" onClick={onHideMaster} />
        </div>
    );
};

export default MasterDetail;

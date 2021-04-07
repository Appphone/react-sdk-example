import classNames from "classnames";
import React from "react";
import "./MasterDetail.css";

export interface MasterDetailProps {
    master: JSX.Element;
    detail: JSX.Element;
    hideMaster: boolean;
}

const MasterDetail: React.FC<MasterDetailProps> = ({
    master,
    detail,
    hideMaster,
}) => {
    const className = classNames("master-detail", {
        "master-detail--closed": hideMaster,
    });

    return (
        <div className={className}>
            {!hideMaster && (
                <div className="master-detail__master">{master}</div>
            )}
            <div className="master-detail__detail">{detail}</div>
        </div>
    );
};

export default MasterDetail;

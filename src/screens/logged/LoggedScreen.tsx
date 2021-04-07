import React from "react";
import useToggle from "../../hooks/useToggle";
import LoggedScreenType from "../../models/LoggedScreenType";
import Chat from "../../views/chat/Chat";
import MasterDetail from "../../views/master-detail/MasterDetail";
import RoomCreatorConnect from "../../views/room/room-creator/RoomCreatorConnect";
import SidebarConnect from "../../views/sidebar/sidebar/SidebarConnect";

export interface LoggedScreenProps {
    type: LoggedScreenType;
}

const LoggedScreen: React.FC<LoggedScreenProps> = ({ type }) => {
    const { isOn, toggle } = useToggle(true);
    let renderedContent: JSX.Element | null = null;

    switch (type) {
        case LoggedScreenType.Chat:
            renderedContent = <Chat onToggleSidebar={toggle} />;
            break;
        case LoggedScreenType.RoomCreator:
            renderedContent = <RoomCreatorConnect />;
            break;
    }

    return (
        <MasterDetail
            master={<SidebarConnect />}
            detail={renderedContent}
            showMaster={isOn}
        />
    );
};

export default LoggedScreen;

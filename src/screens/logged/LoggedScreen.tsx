import React from "react";
import LoggedScreenType from "../../models/LoggedScreenType";
import Chat from "../../views/chat/Chat";
import MasterDetail from "../../views/master-detail/MasterDetail";
import RoomCreatorConnect from "../../views/room/room-creator/RoomCreatorConnect";
import SidebarConnect from "../../views/sidebar/sidebar/SidebarConnect";

export interface LoggedScreenProps {
    type: LoggedScreenType;
}

const LoggedScreen: React.FC<LoggedScreenProps> = ({ type }) => {
    let renderedContent: JSX.Element | null = null;

    switch (type) {
        case LoggedScreenType.Chat:
            renderedContent = <Chat />;
            break;
        case LoggedScreenType.RoomCreator:
            renderedContent = <RoomCreatorConnect />;
            break;
    }

    return (
        <MasterDetail
            master={<SidebarConnect />}
            detail={renderedContent}
            hideMaster={false}
        />
    );
};

export default LoggedScreen;

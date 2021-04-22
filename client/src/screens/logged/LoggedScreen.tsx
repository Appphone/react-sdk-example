import React from "react";
import LoggedScreenType from "../../models/LoggedScreenType";
import MasterDetail from "../../views/master-detail/MasterDetail";
import SidebarConnect from "../../views/sidebar/sidebar/SidebarConnect";
import RoomInviteConfirmationConnect from "../../views/room/room-invite-confirmation/RoomInviteConfirmationConnect";
import ChatConnect from "../../views/chat/ChatConnect";
import useUrlHash from "../../hooks/useUrlHash";
import "./LoggedScreen.css";
import HeaderConnect from "../../views/header/HeaderConnect";
import RoomEntranceFormConnect from "../../views/room/room-entrance-form/RoomEntranceFormConnect";
import RoomCreatorFormConnect from "../../views/room/room-creator-form/RoomCreatorFormConnect";

export interface LoggedScreenProps {
    type: LoggedScreenType;
}

const LoggedScreen: React.FC<LoggedScreenProps> = ({ type }) => {
    const { hash: roomIdToJoin, onClear: onDismissRoomId } = useUrlHash();
    let renderedContent: JSX.Element | null = null;

    switch (type) {
        case LoggedScreenType.Chat:
            renderedContent = <ChatConnect />;
            break;
        case LoggedScreenType.RoomCreator:
            renderedContent = <RoomCreatorFormConnect />;
            break;
        case LoggedScreenType.RoomEntrance:
            renderedContent = <RoomEntranceFormConnect />;
            break;
    }

    if (type !== LoggedScreenType.Chat) {
        renderedContent = (
            <div className="logged-screen__content__centered content content--medium">
                {renderedContent}
            </div>
        );
    }

    return (
        <div className="logged-screen">
            <div className="logged-screen__header">
                <HeaderConnect />
            </div>
            <div className="logged-screen__content">
                <MasterDetail
                    master={<SidebarConnect />}
                    detail={renderedContent}
                    showMaster
                />
            </div>
            {roomIdToJoin && (
                <RoomInviteConfirmationConnect
                    roomId={roomIdToJoin}
                    onDone={onDismissRoomId}
                />
            )}
        </div>
    );
};

export default LoggedScreen;

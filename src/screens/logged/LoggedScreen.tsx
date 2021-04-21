import React from "react";
import useToggle from "../../hooks/useToggle";
import LoggedScreenType from "../../models/LoggedScreenType";
import MasterDetail from "../../views/master-detail/MasterDetail";
import SidebarConnect from "../../views/sidebar/sidebar/SidebarConnect";
import Modal from "@bit/jorgemoreira.react.surface.modal";
import RoomInviteConfirmationConnect from "../../views/room/room-invite-confirmation/RoomInviteConfirmationConnect";
import ChatConnect from "../../views/chat/ChatConnect";
import useUrlHash from "../../hooks/useUrlHash";
import Card from "../../views/card/Card";
import "./LoggedScreen.css";
import HeaderConnect from "../../views/header/HeaderConnect";
import RoomEntranceFormConnect from "../../views/room/room-entrance-form/RoomEntranceFormConnect";
import RoomCreatorFormConnect from "../../views/room/room-creator-form/RoomCreatorFormConnect";

export interface LoggedScreenProps {
    type: LoggedScreenType;
}

const LoggedScreen: React.FC<LoggedScreenProps> = ({ type }) => {
    const { hash: roomIdToJoin, onClear: onDismissRoomId } = useUrlHash();
    const { isOn: showSidebar, onToggle: toggleSidebar } = useToggle(true);
    let renderedContent: JSX.Element | null = null;

    switch (type) {
        case LoggedScreenType.Chat:
            renderedContent = <ChatConnect onToggleSidebar={toggleSidebar} />;
            break;
        case LoggedScreenType.RoomCreator:
            renderedContent = <RoomCreatorFormConnect />;
            break;
        case LoggedScreenType.RoomEntrance:
            renderedContent = <RoomEntranceFormConnect />;
            break;
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
                    showMaster={showSidebar}
                />
                {roomIdToJoin && (
                    <Modal
                        title=""
                        show={!!roomIdToJoin}
                        onDismiss={onDismissRoomId}
                    >
                        <Card>
                            <RoomInviteConfirmationConnect
                                roomId={roomIdToJoin}
                                onDone={onDismissRoomId}
                            />
                        </Card>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default LoggedScreen;

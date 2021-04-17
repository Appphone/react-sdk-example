import React from "react";
import useToggle from "../../hooks/useToggle";
import LoggedScreenType from "../../models/LoggedScreenType";
import MasterDetail from "../../views/master-detail/MasterDetail";
import RoomCreatorConnect from "../../views/room/room-creator/RoomCreatorConnect";
import SidebarConnect from "../../views/sidebar/sidebar/SidebarConnect";
import Modal from "@bit/jorgemoreira.react.surface.modal";
import RoomInviteConfirmationConnect from "../../views/room/room-invite-confirmation/RoomInviteConfirmationConnect";
import ChatConnect from "../../views/chat/ChatConnect";

export interface LoggedScreenProps {
    type: LoggedScreenType;
    roomIdToJoin?: string;
    onDismissRoomId: () => void;
}

const LoggedScreen: React.FC<LoggedScreenProps> = ({
    type,
    roomIdToJoin,
    onDismissRoomId,
}) => {
    const { isOn: showSidebar, onToggle: toggleSidebar } = useToggle(true);
    const { isOn: showModal, setOff: onDismissModal } = useToggle(
        !!roomIdToJoin
    );
    let renderedContent: JSX.Element | null = null;

    switch (type) {
        case LoggedScreenType.Chat:
            renderedContent = <ChatConnect onToggleSidebar={toggleSidebar} />;
            break;
        case LoggedScreenType.RoomCreator:
            renderedContent = <RoomCreatorConnect />;
            break;
    }

    const onDismissRoomIdConfirmation = () => {
        onDismissModal();
        onDismissRoomId();
    };

    return (
        <div>
            <MasterDetail
                master={<SidebarConnect />}
                detail={renderedContent}
                showMaster={showSidebar}
            />
            {roomIdToJoin && (
                <Modal
                    title=""
                    show={showModal}
                    onDismiss={onDismissRoomIdConfirmation}
                >
                    <RoomInviteConfirmationConnect
                        roomId={roomIdToJoin}
                        onDone={onDismissRoomIdConfirmation}
                    />
                </Modal>
            )}
        </div>
    );
};

export default LoggedScreen;

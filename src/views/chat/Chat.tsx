import Modal from "@bit/jorgemoreira.react.surface.modal";
import React from "react";
import useToggle from "../../hooks/useToggle";
import Button from "../button/Button";
import Card from "../card/Card";
import MessageListConnect from "../message/message-list/MessageListConnect";
import MessageSenderConnect from "../message/message-sender/MessageSenderConnect";
import RoomInvite from "../room/room-invite/RoomInvite";
import "./Chat.css";

export interface ChatProps {
    roomId: string;
    onToggleSidebar: () => void;
    onLeaveRoomClick: () => void;
}

const Chat: React.FC<ChatProps> = ({
    roomId,
    onToggleSidebar,
    onLeaveRoomClick,
}) => {
    const { isOn, setOn, setOff } = useToggle(false);

    return (
        <React.Fragment>
            <div className="chat">
                <div className="chat__header">
                    <div className="medium-content">
                        <Button onClick={onToggleSidebar}>Hide Sidebar</Button>
                        <Button onClick={onLeaveRoomClick}>Leave Room</Button>
                        <Button onClick={setOn}>Invite Others</Button>
                        <h2>Room</h2>
                    </div>
                </div>
                <div className="chat__messages">
                    <MessageListConnect />
                </div>
                <div className="chat__sender">
                    <MessageSenderConnect />
                </div>
            </div>
            <Modal title="Invite others" show={isOn} onDismiss={setOff}>
                <Card>
                    <RoomInvite roomId={roomId} />
                </Card>
            </Modal>
        </React.Fragment>
    );
};

export default Chat;

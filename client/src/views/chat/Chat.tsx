import React from "react";
import useToggle from "../../hooks/useToggle";
import Room from "../../models/Room";
import Button from "../button/Button";
import MessageListConnect from "../message/message-list/MessageListConnect";
import MessageSenderConnect from "../message/message-sender/MessageSenderConnect";
import RoomInvite from "../room/room-invite/RoomInvite";
import "./Chat.css";

export interface ChatProps {
    room: Room;
    onLeaveRoomClick: () => void;
}

const Chat: React.FC<ChatProps> = ({ room, onLeaveRoomClick }) => {
    const {
        isOn: isShowingInvite,
        setOn: showInvite,
        setOff: hideInvite,
    } = useToggle(false);

    if (!room) return null;

    return (
        <React.Fragment>
            <div className="chat">
                <div className="chat__header">
                    <div className="chat__header__content content content--medium">
                        <h2 className="chat__header__content__title">
                            {room.name}
                        </h2>
                        <Button small onClick={onLeaveRoomClick}>
                            Leave Room
                        </Button>
                        <Button small onClick={showInvite}>
                            Invite Others
                        </Button>
                    </div>
                </div>
                <div className="chat__messages">
                    <MessageListConnect />
                </div>
                <div className="chat__sender">
                    <MessageSenderConnect />
                </div>
            </div>
            <RoomInvite
                roomId={room.id}
                show={isShowingInvite}
                onCancel={hideInvite}
            />
        </React.Fragment>
    );
};

export default Chat;

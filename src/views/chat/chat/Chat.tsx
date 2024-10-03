import React, { useRef, useState } from "react";
// import createPortal from "react-dom";
import { useToggle } from "@bit/jorgemoreira.headless-react.hooks";
import Room from "../../../models/Room";
import Button from "../../button/Button";
import MessageListConnect from "../chat-events-list/ChatEventsListConnect";
import MessageSenderConnect from "../../message/message-sender/MessageSenderConnect";
import RoomInvite from "../../room/room-invite/RoomInvite";
import "./Chat.css";
import ChatVideoCall from "../chat-video-call/ChatVideoCall";
import { JitsiMeeting } from "@jitsi/react-sdk";

export interface ChatProps {
    room: Room;
    onLeaveRoomClick: () => void;
}


const Chat: React.FC<ChatProps> = ({ room, onLeaveRoomClick }) => {

    const [isVideoCallOpen, setIsVideoCallOpen] = useState<Boolean>(false);
    // const apiRef = useRef();
    
    const {
        isOn: isShowingInvite,
        setOn: showInvite,
        setOff: hideInvite,
    } = useToggle(false);

    if (!room) return null;

    const makeVideoCall = () => {
        setIsVideoCallOpen(true);
    }

    const handleCloseVideoCall = () => {
        setIsVideoCallOpen(false);
    };
    
    const handleJitsiIFrameRef1 = iframeRef => {
        iframeRef.style.border = '10px solid #3d3d3d';
        iframeRef.style.background = '#3d3d3d';
        iframeRef.style.height = '400px';
        iframeRef.style.marginBottom = '20px';
    };

    // const handleApiReady = apiObj => {
    //     apiRef.current = apiObj;
    //     apiRef.current.on('knockingParticipant', handleKnockingParticipant);
    //     apiRef.current.on('audioMuteStatusChanged', payload => handleAudioStatusChange(payload, 'audio'));
    //     apiRef.current.on('videoMuteStatusChanged', payload => handleAudioStatusChange(payload, 'video'));
    //     apiRef.current.on('raiseHandUpdated', printEventOutput);
    //     apiRef.current.on('titleViewChanged', printEventOutput);
    //     apiRef.current.on('chatUpdated', handleChatUpdates);
    //     apiRef.current.on('knockingParticipant', handleKnockingParticipant);
    // };

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
                        <Button small onClick={makeVideoCall}>
                            Start Video Caldl
                        </Button>
                        {isVideoCallOpen && (
                            <ChatVideoCall onClose={handleCloseVideoCall}>
                                <JitsiMeeting
                                    domain = { 'dev.proptimize.co.uk' }
                                    roomName = { 'react room' }
                                    configOverwrite = {{
                                        startWithAudioMuted: true,
                                        disableMoeratorIndicator: true,
                                        startScreenSharing: true,
                                        enableEmailInStats: false,
                                        prejoinConfig: {
                                            // When 'true', it shows an intermediate page before joining, where the user can configure their devices.
                                            // This replaces `prejoinPageEnabled`. Defaults to true.
                                            enabled: false,
                                        },
                                    }}
                                    interfaceConfigOverwrite = {{
                                        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
                                    }}
                                    userInfo = {{
                                        email: 'anon@abc.com',
                                        displayName: 'YOUR_USERNAME'
                                    }}
                                    onApiReady = { (externalApi) => {
                                        // here you can attach custom event listeners to the Jitsi Meet External API
                                        // you can also store it locally to execute commands
                                    } }
                                    getIFrameRef = { handleJitsiIFrameRef1 }
                                />
                            </ChatVideoCall>  
                        )}
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

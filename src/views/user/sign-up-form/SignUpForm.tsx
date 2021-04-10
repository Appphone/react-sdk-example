import React from "react";
import RoomCreatorConnect from "../../room/room-creator/RoomCreatorConnect";
import RoomInviteConfirmationConnect from "../../room/room-invite-confirmation/RoomInviteConfirmationConnect";
import UsernameFormConnect from "../username-form/UsernameFormConnect";
import "./SignUpForm.css";

export interface SignUpFormProps {
    isConnected: boolean;
    roomIdToJoin?: string;
    onDeclineRoomId: () => void
}

const SignUpForm: React.FC<SignUpFormProps> = ({
    isConnected,
    roomIdToJoin,
    onDeclineRoomId
}) => {
    const renderedRoomStep = roomIdToJoin ? (
        <RoomInviteConfirmationConnect roomId={roomIdToJoin} onCancel={onDeclineRoomId}/>
    ) : (
        <RoomCreatorConnect />
    );

    return (
        <div className="signup__form">
            <div className="signup__form__step">
                <div className="font-extra-bold">{isConnected ? 2 : 1})</div>
                {isConnected ? renderedRoomStep : <UsernameFormConnect />}
            </div>
        </div>
    );
};

export default SignUpForm;

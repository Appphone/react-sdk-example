import React from "react";
import { copyToClipboard } from "../../../utils/clipboard";
import Alert from "../../alert/Alert";
import Button from "../../button/Button";

export interface RoomInviteProps {
    roomId: string;
}

const RoomInvite: React.FC<RoomInviteProps> = ({ roomId }) => {
    const inviteLink = window.location.origin + "#" + roomId.substr(8);

    const copyRoomId = () => copyToClipboard(inviteLink);

    return (
        <div>
            <p>Share the following link so others can join this room:</p>
            <Alert accent>
                <strong>{inviteLink}</strong>
            </Alert>
            <Button primary onClick={copyRoomId}>
                Copy to clipboard
            </Button>
        </div>
    );
};

export default RoomInvite;

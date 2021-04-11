import React, { useState } from "react";
import Button from "../../button/Button";
import TextField from "../../text-field/TextField";
import "./MessageSender.css";

export interface MessageSenderProps {
    isOffline: boolean;
    onSubmit: (content: string) => void;
}

const MessageSender: React.FC<MessageSenderProps> = ({
    isOffline,
    onSubmit,
}) => {
    const [content, setContent] = useState("");

    const onSubmitClick = () => {
        if (content.length) {
            onSubmit(content);
            setContent("");
        }
    };

    return (
        <div className="message-sender">
            <div className="message-sender__contents medium-content">
                <div className="message-sender__field">
                    <TextField
                        value={content}
                        placeholder="Type a message"
                        onInput={setContent}
                        disabled={isOffline}
                    />
                </div>
                <Button
                    primary
                    disabled={!content.length || isOffline}
                    onClick={onSubmitClick}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};

export default MessageSender;

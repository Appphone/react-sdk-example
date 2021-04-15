import React, { useEffect, useRef, useState } from "react";
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
    const messageInput = useRef<TextField | null>(null);
    const [content, setContent] = useState("");

    const focusMsgInput = () => messageInput.current?.focus();

    useEffect(focusMsgInput, []);

    const onSubmitMessage = () => {
        if (content.length) {
            onSubmit(content);
            setContent("");
            focusMsgInput();
        }
    };

    return (
        <div className="message-sender">
            <div className="message-sender__contents medium-content">
                <div className="message-sender__field">
                    <TextField
                        ref={messageInput}
                        value={content}
                        placeholder="Type a message"
                        disabled={isOffline}
                        onChange={setContent}
                        onEnter={onSubmitMessage}
                    />
                </div>
                <Button
                    primary
                    disabled={!content.length || isOffline}
                    onClick={onSubmitMessage}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};

export default MessageSender;

import React, { useState } from "react";
import Button from "../../button/Button";
import TextField from "../../text-field/TextField";
import "./MessageSender.css";

export interface MessageSenderProps {
    onSubmit: (content: string) => void;
}

const MessageSender: React.FC<MessageSenderProps> = ({ onSubmit }) => {
    const [content, setContent] = useState("");

    const onSubmitClick = () => {
        if (content.length) {
            onSubmit(content);
            setContent("");
        }
    };

    return (
        <div className="message-sender">
            <div className="message-sender__field">
                <TextField
                    value={content}
                    placeholder="Type a message"
                    onInput={setContent}
                />
            </div>
            <Button disabled={!content.length} onClick={onSubmitClick}>
                Send
            </Button>
        </div>
    );
};

export default MessageSender;

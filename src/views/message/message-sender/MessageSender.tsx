import React, { useState } from "react";
import Button from "../../button/Button";
import TextField from "../../text-field/TextField";
import "./MessageSender.css";

const MessageSender: React.FC = () => {
    const [content, setContent] = useState("");

    const onSubmit = () => {
        console.log(content);
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
            <Button onClick={onSubmit}>Send</Button>
        </div>
    );
};

export default MessageSender;

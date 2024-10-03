import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface ChatVideoCallProps {
    children: any,
    onClose: ()=>void
}

const ChatVideoCall: React.FC<ChatVideoCallProps> = (
    props: ChatVideoCallProps
) => {
    const [container, setContainer] = useState<HTMLDivElement>();

    useEffect(() => {

        // open a new window
        const newWindow = window.open(
            "about:blank",
            "newWin",
            `width=400,height=300,left=${window.screen.availWidth / 2 -
            200},top=${window.screen.availHeight / 2 - 150}`
        );
        const div = document.createElement('div');
        newWindow?.document.body.appendChild(div);
        setContainer(div);

        // cleanup when the comp is unmounted
        return () => {
            newWindow?.close();
            if(props.onClose) props.onClose();
        }
    
    }, []);
    
    if (!container) return null;

    return createPortal(props.children, container);
}

export default ChatVideoCall;
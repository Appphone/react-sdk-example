const Help: React.FC = () => {
    return (
        <>
            <p>
                Create a username and click the <strong>Join</strong> button on
                the home page.
            </p>

            <p>
                When you join, your username is stored in your local browser. If
                you try to join on another browser or another device with the
                same username, it will not work. That's why you don't need a
                password (as long as your device is secure).
            </p>

            <p>
                To chat with someone, create a new room and then click the
                <strong>Invite Others</strong> button to share the link.
            </p>

            <p>
                When someone visits your link, they will be asked to create a
                username (if it has not been already created) and then they will
                be able to chat with you.
            </p>

            <p>
                No messages are persisted on the server. Therefore, users can
                only see messages that are exchanged when they are online.
            </p>

            <p>
                If you sign out, it will not be possible to use your previous
                username again.
            </p>
        </>
    );
};

export default Help;

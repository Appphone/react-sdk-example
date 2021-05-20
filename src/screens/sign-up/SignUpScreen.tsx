import React from "react";
import useToggle from "../../hooks/useToggle";
import Help from "../../views/help/Help";
import Modal from "../../views/modal/Modal";
import Nodes from "../../views/nodes/Nodes";
import UsernameFormConnect from "../../views/user/username-form/UsernameFormConnect";
import "./SignUpScreen.css";

const SignUpScreen: React.FC = () => {
    const {
        isOn: isShowingHelp,
        setOn: showHelp,
        setOff: hideHelp,
    } = useToggle(false);

    return (
        <div className="signup">
            <div className="signup__nodes-wrapper">
                <Nodes />
            </div>
            <div className="signup__content content content--large">
                <div className="signup__content__centered">
                    <h1 className="headline signup__headline">
                        Private
                        <br />
                        Messaging
                    </h1>
                    <div className="signup__subtitle subtitle">
                        <p>Create a username.</p>
                        <p>Start chatting.</p>
                    </div>
                    <div className="signup__form">
                        <UsernameFormConnect />
                    </div>
                    <p className="signup__help" onClick={showHelp}>
                        How it works
                    </p>
                </div>
            </div>

            <Modal
                title="How it works"
                show={isShowingHelp}
                onDismiss={hideHelp}
                content={<Help />}
            />
        </div>
    );
};

export default SignUpScreen;

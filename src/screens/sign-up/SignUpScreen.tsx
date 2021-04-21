import React from "react";
import Nodes from "../../views/nodes/Nodes";
import UsernameFormConnect from "../../views/user/username-form/UsernameFormConnect";
import "./SignUpScreen.css";

const SignUpScreen: React.FC = () => {
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
                        <p>Choose a username.</p>
                        <p>Start chatting.</p>
                    </div>
                    <div className="signup__form">
                        <UsernameFormConnect />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpScreen;

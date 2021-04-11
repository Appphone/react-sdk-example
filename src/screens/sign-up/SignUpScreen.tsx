import React from "react";
import SmallFrame from "../../views/layout/SmallFrame";
import SignUpFormConnect from "../../views/user/sign-up-form/SignUpFormConnect";
import "./SignUpScreen.css";

const SignUpScreen: React.FC = () => {
    return (
        <SmallFrame>
            <div className="signup">
                <div className="signup__header">
                    <h1 className="signup__header__headline">
                        Private
                        <br />
                        Messaging
                    </h1>
                    <p className="signup__header__subtitle subtitle">
                        Start chatting in a room in just 2 steps
                    </p>
                </div>
                <div className="signup__form">
                    <SignUpFormConnect />
                </div>
            </div>
        </SmallFrame>
    );
};

export default SignUpScreen;

import React from "react";
import SignUpForm from "../../views/sign-up-form/SignUpForm";
import "./SignUpScreen.css";

const SignUpScreen: React.FC = () => {
    return (
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
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUpScreen;

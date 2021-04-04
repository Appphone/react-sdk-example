import React from "react";
import SignUpForm, {
    SignUpFormProps,
} from "../../views/sign-up-form/SignUpForm";
import "./SignUpScreen.css";

export type SignUpScreenProps = SignUpFormProps;

const SignUpScreen: React.FC<SignUpScreenProps> = ({ onSubmit }) => {
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
                <SignUpForm onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default SignUpScreen;

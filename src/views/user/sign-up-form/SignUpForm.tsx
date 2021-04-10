import React from "react";
import "./SignUpForm.css";
export interface SignUpFormProps {
    step: number;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ step, children }) => {
    return (
        <div className="signup__form">
            <div className="signup__form__step">
                <div className="font-extra-bold">{step})</div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default SignUpForm;

import React from "react";
import UsernameFormConnect from "../username-form/UsernameFormConnect";
import "./SignUpForm.css";

export interface SignUpFormProps {
    isConnected: boolean;
    isBlocked: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ isConnected, isBlocked }) => {
    if (isBlocked) {
        return (
            <div>You've reached the maximum number of active connections.</div>
        );
    } else {
        return <UsernameFormConnect />;
    }
};

export default SignUpForm;

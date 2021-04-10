import React from "react";
import LibTextField from "@bit/jorgemoreira.react.input.text-field";
import "./TextField.css";

export interface TextFieldProps {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    onInput?: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
    value,
    placeholder,
    disabled,
    onInput,
}) => {
    return (
        <LibTextField
            className="text-field"
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onInput}
        />
    );
};

export default TextField;

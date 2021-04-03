import React from "react";
import LibTextField from "@bit/jorgemoreira.react.input.text-field";
import "./TextField.css";

export interface TextFieldProps {
    value?: string;
    placeholder?: string;
    onInput?: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
    value,
    placeholder,
    onInput,
}) => {
    return (
        <LibTextField
            className="text-field"
            value={value}
            placeholder={placeholder}
            onChange={onInput}
        />
    );
};

export default TextField;

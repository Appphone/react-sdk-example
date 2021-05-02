import React from "react";
import LibTextField, {
    TextFieldProps as LibTextFieldProps,
} from "@bit/jorgemoreira.headless-react.input.text-field";
import "./TextField.css";
import classNames from "classnames";

export interface TextFieldProps {
    large?: boolean;
    innerRef?: React.LegacyRef<LibTextField>;
}

class TextField extends React.Component<TextFieldProps & LibTextFieldProps> {
    render() {
        const className = classNames({
            "text-field--lg": this.props.large,
        });

        return (
            <LibTextField
                {...this.props}
                ref={this.props.innerRef}
                className={className}
            />
        );
    }
}

export default TextField;

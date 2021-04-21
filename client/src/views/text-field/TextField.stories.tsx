import TextField from "./TextField";
import { Story } from "@storybook/react/types-6-0";
import { TextFieldProps } from "@bit/jorgemoreira.react.input.text-field";

export default {
    title: "Input/TextField",
    component: TextField,
};

const Template: Story<TextFieldProps> = (args: TextFieldProps) => (
    <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = { placeholder: "Type here..." };

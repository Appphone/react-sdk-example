import TextField, { TextFieldProps } from "./TextField";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Input/TextField",
    component: TextField,
};

const Template: Story<TextFieldProps> = (args: TextFieldProps) => (
    <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = { placeholder: "Type here..." };

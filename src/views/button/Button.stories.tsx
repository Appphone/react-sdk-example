import Button, { ButtonProps } from "./Button";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Input/Button",
    component: Button,
};

const Template: Story<ButtonProps> = (args: ButtonProps) => (
    <Button {...args}>Label</Button>
);

export const Default = Template.bind({});
Default.args = { disabled: false };

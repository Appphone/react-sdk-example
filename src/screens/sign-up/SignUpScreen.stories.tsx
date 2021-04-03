import SignUpScreen from "./SignUpScreen";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Screen/SignUpScreen",
    component: SignUpScreen,
};

const Template: Story = (args) => <SignUpScreen />;

export const Default = Template.bind({});
Default.args = { placeholder: "Type here..." };

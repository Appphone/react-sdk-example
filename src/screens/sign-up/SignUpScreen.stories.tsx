import SignUpScreen, { SignUpScreenProps } from "./SignUpScreen";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Screen/SignUpScreen",
    component: SignUpScreen,
};

const Template: Story<SignUpScreenProps> = (args) => <SignUpScreen {...args} />;

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

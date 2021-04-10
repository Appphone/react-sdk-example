import SignUpForm, { SignUpFormProps } from "./SignUpForm";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/SignUpForm",
    component: SignUpForm,
};

const Template: Story<SignUpFormProps> = (args) => <SignUpForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    isConnected: false,
};

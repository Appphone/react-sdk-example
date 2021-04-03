import SignUpForm from "./SignUpForm";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/SignUpForm",
    component: SignUpForm,
};

const Template: Story = () => <SignUpForm />;

export const Default = Template.bind({});

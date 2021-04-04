import SignUpFormUsername, {
    SignUpFormUsernameProps,
} from "./SignUpFormUsername";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/SignUpFormUsername",
    component: SignUpFormUsername,
};

const Template: Story<SignUpFormUsernameProps> = (
    args: SignUpFormUsernameProps
) => <SignUpFormUsername {...args} />;

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

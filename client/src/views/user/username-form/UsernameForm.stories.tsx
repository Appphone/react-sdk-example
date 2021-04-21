import UsernameForm, {
    UsernameFormProps,
} from "./UsernameForm";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/UsernameForm",
    component: UsernameForm,
};

const Template: Story<UsernameFormProps> = (
    args: UsernameFormProps
) => <UsernameForm {...args} />;

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

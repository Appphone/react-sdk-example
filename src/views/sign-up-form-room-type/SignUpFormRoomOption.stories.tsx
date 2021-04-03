import SignUpFormRoomOption, {
    SignUpFormRoomOptionProps,
} from "./SignUpFormRoomOption";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/SignUpFormRoomOption",
    component: SignUpFormRoomOption,
};

const Template: Story<SignUpFormRoomOptionProps> = (
    args: SignUpFormRoomOptionProps
) => <SignUpFormRoomOption {...args} />;

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

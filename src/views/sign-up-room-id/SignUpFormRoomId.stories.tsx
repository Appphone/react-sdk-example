import SignUpFormRoomId, { SignUpFormRoomIdProps } from "./SignUpFormRoomId";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/SignUpFormRoomId",
    component: SignUpFormRoomId,
};

const Template: Story<SignUpFormRoomIdProps> = (
    args: SignUpFormRoomIdProps
) => <SignUpFormRoomId {...args} />;

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

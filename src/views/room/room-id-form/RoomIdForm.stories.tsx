import RoomIdForm, { RoomIdFormProps } from "./RoomIdForm";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/RoomIdForm",
    component: RoomIdForm,
};

const Template: Story<RoomIdFormProps> = (
    args: RoomIdFormProps
) => <RoomIdForm {...args} />;

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

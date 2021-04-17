import RoomNameForm, { RoomNameFormProps } from "./RoomNameForm";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/RoomNameForm",
    component: RoomNameForm,
};

const Template: Story<RoomNameFormProps> = (args: RoomNameFormProps) => (
    <RoomNameForm {...args} />
);

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

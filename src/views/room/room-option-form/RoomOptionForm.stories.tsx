import RoomOptionForm, { RoomOptionFormProps } from "./RoomOptionForm";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/RoomOptionForm",
    component: RoomOptionForm,
};

const Template: Story<RoomOptionFormProps> = (args: RoomOptionFormProps) => (
    <RoomOptionForm {...args} />
);

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

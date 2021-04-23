import RoomCreatorForm, { RoomCreatorFormProps } from "./RoomCreatorForm";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/RoomCreatorForm",
    component: RoomCreatorForm,
};

const Template: Story<RoomCreatorFormProps> = (args: RoomCreatorFormProps) => (
    <RoomCreatorForm {...args} />
);

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

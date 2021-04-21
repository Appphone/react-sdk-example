import RoomEntranceForm, { RoomEntranceFormProps } from "./RoomEntranceForm";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SignUp/RoomEntranceForm",
    component: RoomEntranceForm,
};

const Template: Story<RoomEntranceFormProps> = (
    args: RoomEntranceFormProps
) => <RoomEntranceForm {...args} />;

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

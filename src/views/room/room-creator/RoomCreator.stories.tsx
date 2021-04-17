import RoomCreator, { RoomCreatorProps, RoomCreatorStep } from "./RoomCreator";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Room/RoomCreator",
    component: RoomCreator,
};

const Template: Story<RoomCreatorProps> = (args: RoomCreatorProps) => (
    <RoomCreator {...args} />
);

export const Default = Template.bind({});
Default.args = {
    step: RoomCreatorStep.RoomOption,
    onSubmitRoomOption: () => {},
    onSubmitRoomId: () => {},
};

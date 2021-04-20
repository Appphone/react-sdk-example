import RoomInvite, { RoomInviteProps } from "./RoomInvite";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Room/RoomInvite",
    component: RoomInvite,
};

const Template: Story<RoomInviteProps> = (args: RoomInviteProps) => (
    <RoomInvite {...args} />
);

export const Default = Template.bind({});
Default.args = { roomId: "1" };

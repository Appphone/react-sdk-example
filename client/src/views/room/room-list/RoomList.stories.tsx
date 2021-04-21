import RoomList, { RoomListProps } from "./RoomList";
import { Story } from "@storybook/react/types-6-0";
import { roomMockFactory } from "../../../utils/mocks";

export default {
    title: "Room/RoomList",
    component: RoomList,
};

const Template: Story<RoomListProps> = (args: RoomListProps) => (
    <RoomList {...args} />
);

export const Default = Template.bind({});
Default.args = { rooms: roomMockFactory.many(), isOffline: false };

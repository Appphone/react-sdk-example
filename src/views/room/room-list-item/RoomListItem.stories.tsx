import RoomListItem, { RoomListItemProps } from "./RoomListItem";
import { Story } from "@storybook/react/types-6-0";
import { roomMockFactory } from "../../../utils/mocks";

export default {
    title: "Room/RoomListItem",
    component: RoomListItem,
};

const Template: Story<RoomListItemProps> = (args: RoomListItemProps) => (
    <RoomListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    room: roomMockFactory.one(),
    onClick: () => {},
};

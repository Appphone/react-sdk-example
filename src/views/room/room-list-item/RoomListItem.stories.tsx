import RoomListItem, { RoomListItemProps } from "./RoomListItem";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Room/RoomListItem",
    component: RoomListItem,
};

const Template: Story<RoomListItemProps> = (args: RoomListItemProps) => (
    <RoomListItem {...args} />
);

export const Default = Template.bind({});
Default.args = { room: { id: "123", unreadCount: 2 }, onClick: () => {} };

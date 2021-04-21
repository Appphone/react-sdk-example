import RoomEntranceLink, { RoomEntranceLinkProps } from "./RoomEntranceLink";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Room/RoomEntranceLink",
    component: RoomEntranceLink,
};

const Template: Story<RoomEntranceLinkProps> = (
    args: RoomEntranceLinkProps
) => <RoomEntranceLink {...args} />;

export const Default = Template.bind({});
Default.args = { isActive: false, onClick: () => {} };

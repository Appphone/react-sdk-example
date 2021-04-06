import RoomCreatorLink, { RoomCreatorLinkProps } from "./RoomCreatorLink";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Room/RoomCreatorLink",
    component: RoomCreatorLink,
};

const Template: Story<RoomCreatorLinkProps> = (args: RoomCreatorLinkProps) => (
    <RoomCreatorLink {...args} />
);

export const Default = Template.bind({});
Default.args = { isActive: false, onClick: () => {} };

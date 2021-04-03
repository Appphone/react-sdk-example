import Sidebar, { SidebarProps } from "./Sidebar";
import { Story } from "@storybook/react/types-6-0";
import { roomMockFactory } from "../../utils/mocks";

export default {
    title: "Sidebar/Sidebar",
    component: Sidebar,
};

const Template: Story<SidebarProps> = (args: SidebarProps) => (
    <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = { rooms: roomMockFactory.many() };

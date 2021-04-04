import Sidebar, { SidebarProps } from "./Sidebar";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Sidebar/Sidebar",
    component: Sidebar,
};

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = { onSignOut: () => {} };

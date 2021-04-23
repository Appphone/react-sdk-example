import Header, { HeaderProps } from "./Header";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Header/Header",
    component: Header,
};

const Template: Story<HeaderProps> = (args: HeaderProps) => (
    <Header {...args} />
);

export const Default = Template.bind({});
Default.args = { username: "Lorem", onSignOut: () => {} };

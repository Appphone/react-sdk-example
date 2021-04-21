import Header from "./Header";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Header/Header",
    component: Header,
};

const Template: Story = () => <Header />;

export const Default = Template.bind({});

import Layout from "./Layout";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Layout/Layout",
    component: Layout,
};

const Template: Story = () => (
    <Layout>
        <div style={{ height: "400px" }}></div>
    </Layout>
);

export const Default = Template.bind({});

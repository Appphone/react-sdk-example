import SmallFrame from "./SmallFrame";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "SmallFrame/SmallFrame",
    component: SmallFrame,
};

const Template: Story = () => (
    <SmallFrame>
        <div style={{ height: "25rem" }}></div>
    </SmallFrame>
);

export const Default = Template.bind({});

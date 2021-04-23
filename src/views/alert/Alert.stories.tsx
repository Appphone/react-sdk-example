import Alert, { AlertProps } from "./Alert";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Alert/Alert",
    component: Alert,
};

const Template: Story<AlertProps> = (args) => (
    <div style={{ height: "25rem" }}>
        <Alert {...args}>Lorem Ipsum</Alert>
    </div>
);

export const Default = Template.bind({});
Default.args = { warning: true };

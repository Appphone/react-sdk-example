import ResponsiveFieldContent, {
    ResponsiveFieldContentProps,
} from "./ResponsiveFieldContent";
import { Story } from "@storybook/react/types-6-0";
import Button from "../button/Button";
import TextField from "../text-field/TextField";

export default {
    title: "ResponsiveFieldContent/ResponsiveFieldContent",
    component: ResponsiveFieldContent,
};

const Template: Story<ResponsiveFieldContentProps> = (args) => (
    <ResponsiveFieldContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
    button: <Button>Lorem</Button>,
    textField: <TextField value="lorem" />,
};

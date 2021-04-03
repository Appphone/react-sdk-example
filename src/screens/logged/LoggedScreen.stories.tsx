import LoggedScreen, { LoggedScreenProps } from "./LoggedScreen";
import { Story } from "@storybook/react/types-6-0";
import { messageMockFactory, roomMockFactory } from "../../utils/mocks";

export default {
    title: "Screen/LoggedScreen",
    component: LoggedScreen,
};

const Template: Story<LoggedScreenProps> = (args: LoggedScreenProps) => (
    <LoggedScreen {...args} />
);

export const Default = Template.bind({});
Default.args = {
    rooms: roomMockFactory.many(),
    messages: messageMockFactory.many(),
};

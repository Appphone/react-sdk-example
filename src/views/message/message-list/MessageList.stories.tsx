import MessageList, { MessageListProps } from "./MessageList";
import { Story } from "@storybook/react/types-6-0";
import { messageMockFactory } from "../../../utils/mocks";

export default {
    title: "Message/MessageList",
    component: MessageList,
};

const Template: Story<MessageListProps> = (args: MessageListProps) => (
    <MessageList {...args} />
);

export const Default = Template.bind({});
Default.args = { events: messageMockFactory.many() };

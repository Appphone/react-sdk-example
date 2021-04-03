import MessageListInfo, { MessageListInfoProps } from "./MessageListInfo";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Message/MessageListInfo",
    component: MessageListInfo,
};

const Template: Story<MessageListInfoProps> = (args: MessageListInfoProps) => (
    <MessageListInfo {...args} />
);

export const Default = Template.bind({});
Default.args = { content: "Lorem has joined" };

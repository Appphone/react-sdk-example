import MessageListItem, { MessageListItemProps } from "./MessageListItem";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Message/MessageListItem",
    component: MessageListItem,
};

const Template: Story<MessageListItemProps> = (args: MessageListItemProps) => (
    <MessageListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    message: { content: "foo?", isFromSelf: true, createdAt: new Date() },
};

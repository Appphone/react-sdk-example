import MessageListItem, { MessageListItemProps } from "./MessageListItem";
import { Story } from "@storybook/react/types-6-0";
import { messageMockFactory } from "../../../utils/mocks";

export default {
    title: "Message/MessageListItem",
    component: MessageListItem,
};

const Template: Story<MessageListItemProps> = (args: MessageListItemProps) => (
    <MessageListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    message: messageMockFactory.one(),
};

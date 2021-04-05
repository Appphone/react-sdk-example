import MessageSender, { MessageSenderProps } from "./MessageSender";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Message/MessageSender",
    component: MessageSender,
};

const Template: Story<MessageSenderProps> = (args) => (
    <MessageSender {...args} />
);

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

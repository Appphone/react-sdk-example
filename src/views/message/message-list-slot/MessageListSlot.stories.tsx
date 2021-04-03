import MessageListSlot, { MessageListSlotProps } from "./MessageListSlot";
import { Story } from "@storybook/react/types-6-0";
import { messageMockFactory } from "../../../utils/mocks";

export default {
    title: "Message/MessageListSlot",
    component: MessageListSlot,
};

const Template: Story<MessageListSlotProps> = (args: MessageListSlotProps) => (
    <MessageListSlot {...args} />
);

export const Default = Template.bind({});
Default.args = { message: messageMockFactory.one() };

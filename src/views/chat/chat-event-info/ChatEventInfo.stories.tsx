import ChatEventInfo, { ChatEventInfoProps } from "./ChatEventInfo";
import { Story } from "@storybook/react/types-6-0";
import { chatEventMockFactory } from "../../../utils/mocks";

export default {
    title: "Chat/ChatEventInfo",
    component: ChatEventInfo,
};

const Template: Story<ChatEventInfoProps> = (args) => (
    <ChatEventInfo {...args} />
);

export const Default = Template.bind({});
Default.args = { event: chatEventMockFactory.one(), isFromSelf: false };

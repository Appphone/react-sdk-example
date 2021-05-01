import ChatEventsList, { ChatEventsListProps } from "./ChatEventsList";
import { Story } from "@storybook/react/types-6-0";
import { messageMockFactory } from "../../../utils/mocks";

export default {
    title: "Chat/ChatEventsList",
    component: ChatEventsList,
};

const Template: Story<ChatEventsListProps> = (args: ChatEventsListProps) => (
    <ChatEventsList {...args} />
);

export const Default = Template.bind({});
Default.args = { userId: "1", events: messageMockFactory.many() };

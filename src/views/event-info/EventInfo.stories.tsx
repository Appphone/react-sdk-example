import EventInfo, { EventInfoProps } from "./EventInfo";
import { Story } from "@storybook/react/types-6-0";
import { chatEventMockFactory } from "../../utils/mocks";

export default {
    title: "EventInfo/EventInfo",
    component: EventInfo,
};

const Template: Story<EventInfoProps> = (args) => <EventInfo {...args} />;

export const Default = Template.bind({});
Default.args = { event: chatEventMockFactory.one(), isFromSelf: false };

import Chat, { ChatProps } from "./Chat";
import { Story } from "@storybook/react/types-6-0";
import { messageMockFactory } from "../../utils/mocks";

export default {
    title: "Chat/Chat",
    component: Chat,
};

const Template: Story<ChatProps> = (args: ChatProps) => (
    <div style={{ height: "400px" }}>
        <Chat {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = { messages: messageMockFactory.many() };

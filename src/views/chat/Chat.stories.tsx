import Chat, { ChatProps } from "./Chat";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Chat/Chat",
    component: Chat,
};

const Template: Story<ChatProps> = (args) => (
    <div style={{ height: "400px" }}>
        <Chat {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = { onToggleSidebar: () => {} };

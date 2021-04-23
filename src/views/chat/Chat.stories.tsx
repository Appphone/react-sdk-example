import Chat, { ChatProps } from "./Chat";
import { Story } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import { Store } from "redux";
import { getStoreMock, roomMockFactory } from "../../utils/mocks";

export default {
    title: "Chat/Chat",
    decorators: [
        (story: any) => (
            <Provider store={(getStoreMock() as unknown) as Store}>
                {story()}
            </Provider>
        ),
    ],
    component: Chat,
};

const Template: Story<ChatProps> = (args) => (
    <div style={{ height: "100vh" }}>
        <Chat {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = { room: roomMockFactory.one() };

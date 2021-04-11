import Chat, { ChatProps } from "./Chat";
import { Story } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import { Store } from "redux";
import LoggedScreenType from "../../models/LoggedScreenType";
import { getStoreMock, roomMockFactory } from "../../utils/mocks";

const store = getStoreMock({
    isOffline: false,
    isSigningIn: false,
    activeScreenType: LoggedScreenType.Chat,
    rooms: roomMockFactory.many(),
});

export default {
    title: "Chat/Chat",
    decorators: [
        (story: any) => (
            <Provider store={(store as unknown) as Store}>{story()}</Provider>
        ),
    ],
    component: Chat,
};

const Template: Story<ChatProps> = (args) => (
    <div style={{ height: "400px" }}>
        <Chat {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = { onToggleSidebar: () => {} };

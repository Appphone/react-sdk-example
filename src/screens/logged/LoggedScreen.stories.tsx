import LoggedScreen from "./LoggedScreen";
import { Story } from "@storybook/react/types-6-0";
import { getStoreMock, roomMockFactory } from "../../utils/mocks";
import { Store } from "redux";
import { Provider } from "react-redux";

const store = getStoreMock({ rooms: roomMockFactory.many() });

export default {
    title: "Screen/LoggedScreen",
    decorators: [
        (story: any) => (
            <Provider store={(store as unknown) as Store}>{story()}</Provider>
        ),
    ],
    component: LoggedScreen,
};

const Template: Story = (args) => <LoggedScreen {...args} />;

export const Default = Template.bind({});
Default.args = {};

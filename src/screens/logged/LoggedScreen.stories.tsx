import LoggedScreen from "./LoggedScreen";
import { Story } from "@storybook/react/types-6-0";
import { roomMockFactory } from "../../utils/mocks";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";
import { Store } from "redux";

// Mock of a redux store
const store = {
    getState: () => {
        return { rooms: roomMockFactory.many() };
    },
    subscribe: () => 0,
    dispatch: action("dispatch"),
};

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

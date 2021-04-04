import SignUpScreen from "./SignUpScreen";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";
import { Store } from "redux";

// Mock of a redux store
const store = {
    getState: () => {
        return {};
    },
    subscribe: () => 0,
    dispatch: action("dispatch"),
};

export default {
    title: "Screen/SignUpScreen",
    decorators: [
        (story: any) => (
            <Provider store={(store as unknown) as Store}>{story()}</Provider>
        ),
    ],
    component: SignUpScreen,
};

const Template: Story = (args) => <SignUpScreen {...args} />;

export const Default = Template.bind({});

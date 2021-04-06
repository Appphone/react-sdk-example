import SignUpScreen from "./SignUpScreen";
import { Story } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import { Store } from "redux";
import { getStoreMock } from "../../utils/mocks";
import LoggedScreenType from "../../models/LoggedScreenType";

const store = getStoreMock({ activeScreenType: LoggedScreenType.Chat });

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

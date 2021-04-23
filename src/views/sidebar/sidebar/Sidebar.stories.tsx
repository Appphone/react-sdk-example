import Sidebar, { SidebarProps } from "./Sidebar";
import { Story } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import { getStoreMock } from "../../../utils/mocks";
import { Store } from "redux";

export default {
    title: "Sidebar/Sidebar",
    decorators: [
        (story: any) => (
            <Provider store={(getStoreMock() as unknown) as Store}>
                {story()}
            </Provider>
        ),
    ],
    component: Sidebar,
};

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = { onSignOut: () => {} };

import RoomCreatorForm, { RoomCreatorFormProps } from "./RoomCreatorForm";
import { Story } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import { getStoreMock } from "../../../utils/mocks";
import { Store } from "redux";

export default {
    title: "Room/RoomCreatorForm",
    decorators: [
        (story: any) => (
            <Provider store={(getStoreMock() as unknown) as Store}>
                {story()}
            </Provider>
        ),
    ],
    component: RoomCreatorForm,
};

const Template: Story<RoomCreatorFormProps> = (args: RoomCreatorFormProps) => (
    <RoomCreatorForm {...args} />
);

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

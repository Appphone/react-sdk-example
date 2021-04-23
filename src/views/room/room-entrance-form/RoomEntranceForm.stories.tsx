import RoomEntranceForm, { RoomEntranceFormProps } from "./RoomEntranceForm";
import { Story } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import { getStoreMock } from "../../../utils/mocks";
import { Store } from "redux";

export default {
    title: "Room/RoomEntranceForm",
    decorators: [
        (story: any) => (
            <Provider store={(getStoreMock() as unknown) as Store}>
                {story()}
            </Provider>
        ),
    ],
    component: RoomEntranceForm,
};

const Template: Story<RoomEntranceFormProps> = (
    args: RoomEntranceFormProps
) => <RoomEntranceForm {...args} />;

export const Default = Template.bind({});
Default.args = { onSubmit: () => {} };

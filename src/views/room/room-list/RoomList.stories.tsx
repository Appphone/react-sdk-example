import RoomList, { RoomListProps } from "./RoomList";
import { Story } from "@storybook/react/types-6-0";
import { getStoreMock, roomMockFactory } from "../../../utils/mocks";
import { Provider } from "react-redux";
import { Store } from "redux";

export default {
    title: "Room/RoomList",
    decorators: [
        (story: any) => (
            <Provider store={(getStoreMock() as unknown) as Store}>
                {story()}
            </Provider>
        ),
    ],
    component: RoomList,
};

const Template: Story<RoomListProps> = (args: RoomListProps) => (
    <RoomList {...args} />
);

export const Default = Template.bind({});
Default.args = { rooms: roomMockFactory.many(), isOffline: false };

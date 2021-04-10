import RoomInviteConfirmation, {
    RoomInviteConfirmationProps,
} from "./RoomInviteConfirmation";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Room/RoomInviteConfirmation",
    component: RoomInviteConfirmation,
};

const Template: Story<RoomInviteConfirmationProps> = (
    args: RoomInviteConfirmationProps
) => <RoomInviteConfirmation {...args} />;

export const Default = Template.bind({});
Default.args = { roomId: "1", onConfirm: () => {} };

import Modal, { ModalProps } from "./Modal";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Input/Modal",
    component: Modal,
};

const Template: Story<ModalProps> = (args: ModalProps) => (
    <Modal {...args}>Label</Modal>
);

export const Default = Template.bind({});
Default.args = {
    show: false,
};

import LibModal, {
    ModalProps as LibModalProps,
} from "@bit/jorgemoreira.headless-react.surface.modal";
import React from "react";
import Card from "../card/Card";
import CloseIcon from "../icons/CloseIcon";
import "./Modal.css";

export interface ModalProps extends LibModalProps {
    title: string;
    content: JSX.Element;
    footer?: JSX.Element;
}

const Modal: React.FC<LibModalProps & ModalProps> = ({
    title,
    content,
    footer,
    onDismiss,
    ...modalProps
}) => {
    return (
        <LibModal onDismiss={onDismiss} {...modalProps}>
            <Card>
                <div className="modal__header">
                    <div className="modal__header__title">{title}</div>
                    <div className="modal__header__close" onClick={onDismiss}>
                        <CloseIcon />
                    </div>
                </div>
                {content}
                {footer && <div className="modal__footer">{footer}</div>}
            </Card>
        </LibModal>
    );
};

export default Modal;

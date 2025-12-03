import React from "react";
type ModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;

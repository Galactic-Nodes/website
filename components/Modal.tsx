import React from 'react';
import { IoClose } from 'react-icons/io5';
import styles from '../styles/Components/Modal.module.scss';

interface ModalProps {
    open: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
    containerClassName?: string;
}

const Modal = ({ open, title, onClose, children, containerClassName }: ModalProps): JSX.Element => {
    return (
        <div className={styles.modal} style={{ pointerEvents: open ? 'all' : 'none' }}>
            <div className={styles.background} style={{ opacity: open ? 0.5 : 0 }} />
            <div className={styles.frame} style={{ opacity: open ? 1 : 0, top: open ? '15%' : '10%' }}>
                <div className={styles.topBar}>
                    <h3>{title}</h3>
                    <button type={'button'} onClick={onClose}>
                        <IoClose size={20} />
                    </button>
                </div>
                <div className={containerClassName}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;

import React from 'react';

// Styles
import useStyles from './styles';
import styles from './Notification.module.scss';

// Components
import Notification from './Notification';
import { toast, ToastContainer } from 'react-toastify';

// icons
import { Close as CloseIcon } from '@mui/icons-material';

const CloseButton = ({ closeToast, className }: any) => <CloseIcon className={className} onClick={closeToast} />;

const CustomToast = () => {
    const classes = useStyles();
    return (
        <ToastContainer
            className={classes.toastsContainer}
            closeButton={<CloseButton className={classes.notificationCloseButton} />}
            closeOnClick={true}
            progressClassName={classes.notificationProgress}
        />
    );
};

declare const ToastTypes: ['info', 'warning', 'success', 'error'];
export declare type ToastType = typeof ToastTypes[number];

type MessageTypeProps = {
    [key: string]: {
        icon: string;
        color: string;
    };
};

const typeMessages: MessageTypeProps = {
    info: {
        icon: 'feedback',
        color: 'primary',
    },
    warning: {
        icon: 'report',
        color: 'warning',
    },
    success: {
        icon: 'success',
        color: 'success',
    },
    error: {
        icon: 'defence',
        color: 'secondary',
    },
};

const getIconByType = (type: ToastType) => {
    return typeMessages[type];
};

function sendNotification(text: any, type: ToastType) {
    const componentProps = {
        type: getIconByType(type).icon,
        message: text,
        variant: 'contained',
        color: getIconByType(type).color,
    };
    // const options = {
    //     type: 'info',
    //     position: toast.POSITION.TOP_RIGHT,
    //     progressClassName: classes.progress,
    //     className: classes.notification,
    // };
    return toast(<Notification {...componentProps} className={styles.notificationComponent} />, {
        position: toast.POSITION.TOP_RIGHT,
        progressClassName: styles.progress,
        className: styles.notification,
        autoClose: 1000,
    });
}

export { CustomToast, sendNotification };

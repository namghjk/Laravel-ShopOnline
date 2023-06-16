import { makeStyles } from '@mui/styles';

export default makeStyles((theme: any) => ({
    notificationContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    notificationContained: {
        borderRadius: 45,
        height: 45,
        boxShadow: theme.customShadows.widgetDark,
    },
    notificationContainedShadowless: {
        boxShadow: 'none',
    },
    notificationIconContainer: {
        minWidth: 45,
        height: 45,
        borderRadius: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
    },
    notificationIconContainerContained: {
        fontSize: 18,
        color: '#FFFFFF80',
    },
    notificationIconContainerRounded: {
        marginRight: theme.spacing(2),
    },
    containedTypography: {
        color: 'white',
    },
    messageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexGrow: 1,
    },
    extraButton: {
        color: 'white',
        '&:hover, &:focus': {
            background: 'transparent',
        },
    },
    notificationIcon: {},
    toastsContainer: {
        width: 400,
        right: 0,
    },
    notificationCloseButton: {
        position: 'absolute',
        right: theme.spacing(3),
        color: 'white',
    },
    notificationProgress: {},
    progress: {
        visibility: 'hidden',
    },
    notification: {
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        boxShadow: 'none',
        overflow: 'visible',
    },
    notificationComponent: {
        paddingRight: theme.spacing(4),
    },
}));

import React from 'react';
import { Button } from '@mui/material';
import {
    NotificationsNone as NotificationsIcon,
    ThumbUp as ThumbUpIcon,
    ShoppingCart as ShoppingCartIcon,
    LocalOffer as TicketIcon,
    BusinessCenter as DeliveredIcon,
    SmsFailed as FeedbackIcon,
    DiscFull as DiscIcon,
    Email as MessageIcon,
    ReportProblem as ReportIcon,
    Error as DefenceIcon,
    AccountBox as CustomerIcon,
    Done as ShippedIcon,
    Publish as UploadIcon,
    TaskAlt as SuccessIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material';
import classnames from 'classnames';
import tinycolor from 'tinycolor2';

// styles
import useStyles from './styles';

// components
import { Typography } from '../Wrappers/Wrappers';

const typesIcons = {
    'e-commerce': <ShoppingCartIcon />,
    notification: <NotificationsIcon />,
    offer: <TicketIcon />,
    info: <ThumbUpIcon />,
    message: <MessageIcon />,
    feedback: <FeedbackIcon />,
    customer: <CustomerIcon />,
    shipped: <ShippedIcon />,
    delivered: <DeliveredIcon />,
    defence: <DefenceIcon />,
    report: <ReportIcon />,
    upload: <UploadIcon />,
    disc: <DiscIcon />,
    success: <SuccessIcon />,
};

export default function Notification({ variant, ...props }: any) {
    let classes = useStyles();
    let theme = useTheme<any>();

    const icon = getIconByType(props.type);
    const iconWithStyles = React.cloneElement(icon, {
        classes: {
            root: classes.notificationIcon,
        },
        style: {
            color: variant !== 'contained' && theme.palette[props.color] && theme.palette[props.color].main,
        },
    });

    return (
        <div
            className={classnames(classes.notificationContainer, props.className, {
                [classes.notificationContained]: variant === 'contained',
                [classes.notificationContainedShadowless]: props.shadowless,
            })}
            style={{
                backgroundColor:
                    variant === 'contained' && theme.palette[props.color] && theme.palette[props.color].main,
            }}
        >
            <div
                className={classnames(classes.notificationIconContainer, {
                    [classes.notificationIconContainerContained]: variant === 'contained',
                    [classes.notificationIconContainerRounded]: variant === 'rounded',
                })}
                style={{
                    backgroundColor:
                        variant === 'rounded' &&
                        theme.palette[props.color] &&
                        tinycolor(theme.palette[props.color].main).setAlpha(0.15).toRgbString(),
                }}
            >
                {iconWithStyles}
            </div>
            <div className={classes.messageContainer}>
                <Typography
                    className={classnames({
                        [classes.containedTypography]: variant === 'contained',
                    })}
                    variant={props.typographyVariant}
                    size={variant !== 'contained' && !props.typographyVariant && 'md'}
                >
                    {props.message}
                </Typography>
                {props.extraButton && props.extraButtonClick && (
                    <Button onClick={props.extraButtonClick} disableRipple className={classes.extraButton}>
                        {props.extraButton}
                    </Button>
                )}
            </div>
        </div>
    );
}

// ####################################################################

function getIconByType(type = 'offer') {
    // @ts-ignore
    return typesIcons[type];
}

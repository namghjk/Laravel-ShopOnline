import React, { useState } from 'react';
import {
    Box,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Popover,
    TextField as Input,
    Typography,
} from '@mui/material';
import { Inbox as InboxIcon, ExpandMore as ExpandIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// styles
import useStyles from './styles';
import useStyles2 from '../../styles';

// components
import Dot from '../Dot';
import { Button, Badge, Link as LinkMaterial } from '../../../../components/Wrappers/Wrappers';

export default function SidebarLink({
    link,
    ext,
    icon,
    label,
    children,
    // location,
    isSidebarOpened,
    nested,
    type,
    toggleDrawer,
    click,
    ...props
}: any) {
    // local
    let [isOpen, setIsOpen] = useState(false);
    // Add Section Popover state
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Login page onClick
    function onLogin() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    onLogin.clickName = 'onLogin';

    let classes = useStyles(isOpen);
    const classes2 = useStyles2();
    let isLinkActive = link && (window.location.pathname === link || window.location.pathname.includes(link));
    // let isLinkActive = true;

    if (type === 'title')
        return (
            <Typography
                className={classnames(classes.linkText, classes.sectionTitle, {
                    [classes.linkTextHidden]: !isSidebarOpened,
                })}
            >
                {label}
            </Typography>
        );

    if (type === 'divider') return <Divider className={classes.divider} />;

    if (type === 'margin') return <section style={{ marginTop: 240 }} />;

    // Add Section Popover

    const open = Boolean(anchorEl);
    const id = open ? 'add-section-popover' : undefined;

    function addSectionClick(event: any) {
        setAnchorEl(event.currentTarget);
    }

    addSectionClick.clickName = 'addSectionClick';

    const addSectionClose = () => {
        setAnchorEl(null);
    };

    if (!children && ext)
        return (
            <>
                <ListItem
                    onClick={(e: any) => {
                        if (click) {
                            return click(e, addSectionClick, onLogin);
                        }
                        return toggleDrawer(e);
                    }}
                    onKeyPress={toggleDrawer}
                    component={link && Link}
                    href={link}
                    className={classes.link}
                    classes={{
                        root: classnames(classes.link, {
                            [classes.linkActive]: isLinkActive && !nested,
                            [classes.linkNested]: nested,
                        }),
                    }}
                >
                    <ListItemIcon
                        className={classnames(classes.linkIcon, {
                            [classes.linkIconActive]: isLinkActive,
                        })}
                        style={{ margin: nested && -11 }}
                    >
                        {nested ? <Dot color={isLinkActive && 'primary'} /> : icon}
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classnames(classes.linkText, {
                                [classes.linkTextActive]: isLinkActive,
                                [classes.linkTextHidden]: !isSidebarOpened,
                            }),
                        }}
                        primary={label}
                    />
                </ListItem>
            </>
        );
    if (!children)
        return (
            <>
                <ListItem
                    onClick={(e: any) => {
                        if (click) {
                            return click(e, addSectionClick, onLogin);
                        }
                        return toggleDrawer(e);
                    }}
                    onKeyPress={toggleDrawer}
                    component={link && Link}
                    to={link}
                    className={classes.link}
                    classes={{
                        root: classnames(classes.link, {
                            [classes.linkActive]: isLinkActive && !nested,
                            [classes.linkNested]: nested,
                        }),
                    }}
                >
                    <ListItemIcon
                        className={classnames(classes.linkIcon, {
                            [classes.linkIconActive]: isLinkActive,
                        })}
                        style={{ margin: nested && -11 }}
                    >
                        {nested ? <Dot color={isLinkActive && 'primary'} /> : icon}
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classnames(classes.linkText, {
                                [classes.linkTextActive]: isLinkActive,
                                [classes.linkTextHidden]: !isSidebarOpened,
                            }),
                        }}
                        primary={label}
                    />
                </ListItem>
            </>
        );

    return (
        <>
            {props.badge ? (
                <ListItem
                    button
                    component={link && Link}
                    onClick={toggleCollapse}
                    className={classnames(classes.link, {
                        [classes.linkActive]: isLinkActive,
                        [classes.nestedMenu]: type === 'nested',
                    })}
                    to={link}
                    disableRipple
                >
                    <ListItemIcon
                        className={classnames(classes.linkIcon, {
                            [classes.linkIconActive]: isLinkActive,
                        })}
                    >
                        {icon ? icon : <InboxIcon />}
                    </ListItemIcon>
                    <Badge badgeContent={props.badge} color={props.badgeColor}>
                        <ListItemText
                            classes={{
                                primary: classnames(classes.linkText, {
                                    [classes.linkTextActive]: isLinkActive,
                                    [classes.linkTextHidden]: !isSidebarOpened,
                                }),
                            }}
                            primary={label}
                        />
                    </Badge>
                    <ExpandIcon
                        className={classnames(
                            {
                                [classes.expand]: isOpen,
                                [classes.linkTextHidden]: !isSidebarOpened,
                            },
                            classes.expandWrapper,
                        )}
                    />
                </ListItem>
            ) : (
                <ListItem
                    button
                    component={link && Link}
                    onClick={toggleCollapse}
                    className={classnames(classes.link, {
                        [classes.linkActive]: isLinkActive,
                        [classes.nestedMenu]: type === 'nested',
                    })}
                    to={link}
                    disableRipple
                >
                    <ListItemIcon
                        className={classnames(classes.linkIcon, {
                            [classes.linkIconActive]: isLinkActive,
                        })}
                    >
                        {icon ? icon : <InboxIcon />}
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classnames(classes.linkText, {
                                [classes.linkTextActive]: isLinkActive,
                                [classes.linkTextHidden]: !isSidebarOpened,
                            }),
                        }}
                        primary={label}
                    />
                    <ExpandIcon
                        className={classnames(
                            {
                                [classes.expand]: isOpen,
                                [classes.linkTextHidden]: !isSidebarOpened,
                            },
                            classes.expandWrapper,
                        )}
                    />
                </ListItem>
            )}
            {children && (
                <Collapse
                    in={isOpen && isSidebarOpened}
                    timeout="auto"
                    unmountOnExit
                    className={classnames(classes.nestedList, {
                        [classes.nestedMenuItem]: type === 'nested',
                    })}
                >
                    <List component="div" disablePadding>
                        {children.map((childrenLink: any) => (
                            <SidebarLink
                                key={(childrenLink && childrenLink.link) || childrenLink.label}
                                // location={location}
                                isSidebarOpened={isSidebarOpened}
                                classes={classes}
                                toggleDrawer={toggleDrawer}
                                nested
                                {...childrenLink}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );

    // ###########################################################

    function toggleCollapse(e: any) {
        if (isSidebarOpened) {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    }
}

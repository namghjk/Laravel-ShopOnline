import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { BASE_URL } from '../../utils/config';

//images
import profile from '../../images/main-profile.png';
// import config from '../../config';

// styles
import useStyles from './styles';
import classNames from 'classnames';

// components
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import { Typography, Avatar } from '../../components/Wrappers/Wrappers';
import {
    Menu as MenuIcon,
    Person as AccountIcon,
    ArrowBack as ArrowBackIcon,
    ExitToApp as ExitToAppIcon,
} from '@mui/icons-material';

// Models
import { UserDetailsModel } from '../../models/UserModel';

// context
// import {
//   useLayoutState,
//   useLayoutDispatch,
//   toggleSidebar,
// } from '../../context/LayoutContext';
// import {
//   useManagementDispatch,
//   useManagementState,
// } from '../../context/ManagementContext';

// import { actions } from '../../context/ManagementContext';
// import { useUserDispatch, signOut } from '../../context/UserContext';
import { useUserState, useUserDispatch } from '../../store/context/UserContext';
import { getUserDetail, signOut } from '../../store/action/UserAction';

export default function Header() {
    let classes = useStyles();
    let theme = useTheme();

    // global
    //   let layoutState = useLayoutState();
    //   let layoutDispatch = useLayoutDispatch();
    let userDispatch = useUserDispatch();
    const userState = useUserState();

    //   const managementDispatch = useManagementDispatch();

    // local
    const [profileMenu, setProfileMenu] = useState(null);
    const [currentUser, setCurrentUser] = useState<UserDetailsModel | null>();
    const [isSmall, setSmall] = useState(false);

    //   const managementValue = useManagementState();

    useEffect(() => {
        const getUserName = async () => {
            await getUserDetail(userDispatch);
        };
        getUserName();
    }, []);

    useEffect(() => {
        setCurrentUser(userState.detaiUser);
    }, [userState]);

    useEffect(() => {
        // console.log(isSmall);
    }, [isSmall]);

    useEffect(function () {
        window.addEventListener('resize', handleWindowWidthChange);
        handleWindowWidthChange();
        return function cleanup() {
            window.removeEventListener('resize', handleWindowWidthChange);
        };
    });

    function handleWindowWidthChange() {
        let windowWidth = window.innerWidth;
        let breakpointWidth = theme.breakpoints.values.md;
        let isSmallScreen = windowWidth < breakpointWidth;
        setSmall(isSmallScreen);
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    //   onClick={() => toggleSidebar(layoutDispatch)}
                    // onClick={() => setSmall(true)}
                    onClick={() => setSmall(!isSmall)}
                    className={classNames(classes.headerMenuButton, classes.headerMenuButtonCollapse)}
                >
                    {isSmall ? (
                        <ArrowBackIcon
                            classes={{
                                root: classNames(classes.headerIcon, classes.headerIconCollapse),
                            }}
                        />
                    ) : (
                        <MenuIcon
                            classes={{
                                root: classNames(classes.headerIcon, classes.headerIconCollapse),
                            }}
                        />
                    )}
                </IconButton>
                <Typography variant="h6" weight="medium" className={classes.logotype}>
                    React Material Admin
                </Typography>
                <div className={classes.grow} />
                <IconButton
                    aria-haspopup="true"
                    color="inherit"
                    className={classes.headerMenuButton}
                    aria-controls="profile-menu"
                    onClick={(e: any) => setProfileMenu(e.currentTarget)}
                >
                    <Avatar
                        alt={currentUser?.name}
                        // eslint-disable-next-line no-mixed-operators
                        src={currentUser && `${BASE_URL}/${currentUser?.avatar}`}
                        classes={{ root: classes.headerIcon }}
                    >
                        {currentUser?.name}
                    </Avatar>
                </IconButton>
                <Typography block style={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}>
                    <div className={classes.profileLabel}>Chào,&nbsp;</div>
                    <Typography weight={'bold'} className={classes.profileLabel}>
                        {currentUser?.name}
                    </Typography>
                </Typography>
                <Menu
                    id="profile-menu"
                    open={Boolean(profileMenu)}
                    anchorEl={profileMenu}
                    onClose={() => setProfileMenu(null)}
                    className={classes.headerMenu}
                    classes={{ paper: classes.profileMenu }}
                    disableAutoFocusItem
                >
                    <div className={classes.profileMenuUser}>
                        <Typography variant="h6" weight="medium">
                            {currentUser?.name}
                        </Typography>
                    </div>
                    <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)}>
                        <AccountIcon className={classes.profileMenuIcon} />
                        <Link to="/app/user/edit" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Trang cá nhân
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={signOut} className={classNames(classes.profileMenuItem, classes.headerMenuItem)}>
                        <ExitToAppIcon className={classes.profileMenuIcon} />
                        Đăng xuất
                    </MenuItem>
                    {/* <div className={classes.profileMenuUser}>
                        <Typography className={classes.profileMenuLink} color="primary">
                            Sign Out
                        </Typography>
                    </div> */}
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

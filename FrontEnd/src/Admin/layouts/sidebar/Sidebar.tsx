import React, { useState, useEffect, useMemo } from 'react';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Drawer, IconButton, List } from '@mui/material';
import { useTheme } from '@mui/material';
// import { withRouter } from '../withRouter/withRounter';
import classNames from 'classnames';
import { getPermission } from '../../utils/localStorageHelper';
// styles
import useStyles from './styles';

// components
import SidebarLink from './components/SidebarLink/SidebarLink';

// context
import { useLayoutState, useLayoutDispatch, toggleSidebar } from '../../store/context/LayoutContext';
import { PermissionModel } from '../../models/PermissionModel';

function Sidebar({ location, structure }: any) {
    let classes = useStyles();
    let theme = useTheme();
    const permissions: PermissionModel[] = getPermission() || [];

    const toggleDrawer = (value: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        if (value && !isPermanent) toggleSidebar(layoutDispatch);
    };

    // global
    // let { isSidebarOpened } = useLayoutState();
    const [isSidebarOpened, setSidebarOpened] = useState(true);
    let layoutDispatch = useLayoutDispatch();

    // local
    let [isPermanent, setPermanent] = useState(true);

    const isSidebarOpenedWrapper = useMemo(
        () => (!isPermanent ? !isSidebarOpened : isSidebarOpened),
        [isPermanent, isSidebarOpened],
    );

    useEffect(function () {
        window.addEventListener('resize', handleWindowWidthChange);
        handleWindowWidthChange();
        return function cleanup() {
            window.removeEventListener('resize', handleWindowWidthChange);
        };
    });

    return (
        <Drawer
            variant={isPermanent ? 'permanent' : 'temporary'}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: isSidebarOpenedWrapper,
                [classes.drawerClose]: !isSidebarOpenedWrapper,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: isSidebarOpenedWrapper,
                    [classes.drawerClose]: !isSidebarOpenedWrapper,
                }),
            }}
            open={isSidebarOpenedWrapper}
            onClose={toggleDrawer(true)}
        >
            <div className={classes.toolbar} />
            <div className={classes.mobileBackButton}>
                <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
                    <ArrowBackIcon
                        classes={{
                            root: classNames(classes.headerIcon, classes.headerIconCollapse),
                        }}
                    />
                </IconButton>
            </div>
            <List className={classes.sidebarList} classes={{ padding: classes.padding }}>
                {structure.map((link: any) => {
                    if (
                        permissions.filter((p) => p.name === link.pagePermission).length ||
                        link.pagePermission === 'base'
                    ) {
                        return (
                            <SidebarLink
                                key={link.id}
                                // location={location}
                                isSidebarOpened={!isPermanent ? !isSidebarOpened : isSidebarOpened}
                                {...link}
                                toggleDrawer={toggleDrawer(true)}
                            />
                        );
                    }
                })}
            </List>
        </Drawer>
    );

    // ##################################################################
    function handleWindowWidthChange() {
        let windowWidth = window.innerWidth;
        let breakpointWidth = theme.breakpoints.values.md;
        let isSmallScreen = windowWidth < breakpointWidth;

        if (isSmallScreen && isPermanent) {
            setPermanent(false);
        } else if (!isSmallScreen && !isPermanent) {
            setPermanent(true);
        }
    }
}

export default Sidebar;

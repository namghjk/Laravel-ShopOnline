import classnames from 'classnames';
import React from 'react';
import { useLayoutState } from '../store/context/LayoutContext';
import useStyles from './styles';
import 'react-toastify/dist/ReactToastify.css';
import BreadCrumbs from '../components/BreadCrumbs';
import { ToastContainer } from 'react-toastify';
import { CustomToast } from '../components/Notification/CustomToast';

type LayoutProps = {
    header: React.ReactNode;
    footer: React.ReactNode;
    sidebar: React.ReactNode;
    content: React.ReactNode;
};

export const AppLayout = (props: LayoutProps) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'add-section-popover' : undefined;
    const handleClick = (event: any) => {
        setAnchorEl(open ? null : event.currentTarget);
    };

    // global
    let layoutState = useLayoutState();
    return (
        <div className={classes.root}>
            {props.header}
            {props.sidebar}
            <div
                className={classnames(classes.content, {
                    // [classes.contentShift]: layoutState.isSidebarOpened,
                })}
            >
                <div className={classes.fakeToolbar} />
                <BreadCrumbs />
                {props.content}
                {props.footer}
                {/* <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> */}
            </div>
        </div>
    );
};

export type LayoutHOC = <T = {}>(Content: React.ComponentType<T>) => React.ComponentType<T>;

export function createLoginLayout() {
    return function withLayout<T = {}>(Content: React.ComponentType<T>) {
        // @ts-ignore
        return (props: T) => <AppLayout header={null} footer={null} sidebar={null} content={<Content {...props} />} />;
    };
}

// export function createDefaultLayout(
//     Header: React.ComponentType,
//     Sidebar: React.ComponentType,
//     Footer: React.ComponentType,
// ) {
//     return function withLayout<T = {}>(Content: React.ComponentType<T>) {
//         return (props: T) => (
//             // @ts-ignore
//             <Layout header={<Header />} footer={<Footer />} sidebar={<Sidebar />} content={<Content {...props} />} />
//         );
//     };
// }
export function createDefaultLayout(Header: React.ComponentType, Sidebar: React.ComponentType) {
    return function withLayout<T = {}>(Content: React.ComponentType<T>) {
        return (props: T) => (
            // @ts-ignore
            <AppLayout header={<Header />} footer={null} sidebar={<Sidebar />} content={<Content {...props} />} />
        );
    };
}

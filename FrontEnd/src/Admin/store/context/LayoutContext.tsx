import React from 'react';

let LayoutStateContext = React.createContext<any>(null);
let LayoutDispatchContext = React.createContext<any>(null);

function layoutReducer(state: any, action: any) {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return { ...state, isSidebarOpened: !state.isSidebarOpened };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function LayoutProvider({ children }: any) {
    let [state, dispatch] = React.useReducer(layoutReducer, {
        isSidebarOpened: true,
    });
    return (
        <LayoutStateContext.Provider value={state}>
            <LayoutDispatchContext.Provider value={dispatch}>{children}</LayoutDispatchContext.Provider>
        </LayoutStateContext.Provider>
    );
}

function useLayoutState() {
    let context = React.useContext(LayoutStateContext);
    if (context === undefined) {
        throw new Error('useLayoutState must be used within a LayoutProvider');
    }
    return context;
}

function useLayoutDispatch() {
    let context = React.useContext(LayoutDispatchContext);
    if (context === undefined) {
        throw new Error('useLayoutDispatch must be used within a LayoutProvider');
    }
    return context;
}

const toggleSidebar = (dispatch: any) => {
    dispatch({
        type: 'TOGGLE_SIDEBAR',
    });
};

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleSidebar, LayoutStateContext };

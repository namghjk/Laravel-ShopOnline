import React, { ReactElement, useReducer } from 'react';
import { getAccessToken } from '../../utils/localStorageHelper';
import { UserDetailsModel, UserModel } from '../../models/UserModel';
import { APIResponse } from '../../models/Response';

interface IUserState {
    isAuthenticated: boolean;
    isLoading: boolean;
    currentUser: any;
    detaiUser: UserDetailsModel | null;
}
interface IAction {
    type: string;
    payload: any;
}
const checkAuth = () => {
    const token = getAccessToken();
    if (token) {
        const date = new Date().getTime();
        // const data = jwt.decode(token);
        return true;
    }
    return false;
};

const initState: IUserState = {
    isAuthenticated: checkAuth(),
    isLoading: false,
    currentUser: {
        data: [],
    },
    detaiUser: null,
};
export const todo = (payload: any) => {
    console.log('1');
    return {
        type: 'LOGIN',
        payload,
    };
};

const UserStateContext = React.createContext<IUserState>(initState);
const UserDispatchContext = React.createContext<React.Dispatch<any>>(() => undefined);

function userReducer(state: IUserState, action: IAction) {
    const { type, payload } = action;
    switch (type) {
        case 'LOGIN': {
            return {
                ...state,
                currentUser: payload.data,
                isAuthenticated: payload.isSuccess,
                // detaiUser: payload.userdetail.data,
            };
        }
        case 'USER_DETAIL': {
            return {
                ...state,
                detaiUser: payload.data,
            };
        }
        case 'USERS_FIND_STARTED': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'USERS_FIND_ENDED': {
            return {
                ...state,
                isLoading: false,
            };
        }

        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
}

function UserProvider({ children }: any) {
    const [state, dispatch] = useReducer(userReducer, initState);
    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
}

function useUserState() {
    let context = React.useContext(UserStateContext);
    if (context === undefined) {
        throw new Error('useUserState must be used within a UserProvider');
    }
    return context;
}

function useUserDispatch() {
    let context = React.useContext(UserDispatchContext);
    if (context === undefined) {
        throw new Error('useUserDispatch must be used within a UserProvider');
    }
    return context;
}

export { UserProvider, useUserState, useUserDispatch };

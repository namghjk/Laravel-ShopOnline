import React, { useReducer } from 'react';
import { CategoryModel } from '../../models/CategoryModel';

interface ICategoryState {
    isLoading: boolean;
    categories: Array<CategoryModel>;
    total_records: number;
    create_category: {
        mesage: string;
        data: CategoryModel | undefined;
        issuccess: boolean;
    };
}

interface IAction {
    type: string;
    payload: any;
}

const initState: ICategoryState = {
    isLoading: false,
    categories: [],
    total_records: 0,
    create_category: {
        mesage: '',
        data: undefined,
        issuccess: false,
    },
};

const CategoryStateContext = React.createContext<ICategoryState>(initState);
const CategoryDispatchContext = React.createContext<React.Dispatch<any>>(() => undefined);

function categoryReducer(state: ICategoryState, action: IAction) {
    const { type, payload } = action;
    switch (type) {
        case 'LOADING_STARTED': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'LOADING_STOP': {
            return {
                ...state,
                isLoading: false,
            };
        }
        case 'GET_CATEGORIES': {
            return {
                ...state,
                isLoading: false,
                categories: payload.data,
                total_records: payload.additionalData.total_records,
            };
        }
        case 'CREATE_CATEGORY': {
            return {
                ...state,
                isLoading: false,
                create_category: {
                    mesage: payload.message,
                    data: payload.data,
                    issuccess: payload.issuccess,
                },
            };
        }
        case 'RESET_CREATE': {
            return {
                ...state,
                create_category: {
                    mesage: '',
                    data: undefined,
                    issuccess: false,
                },
            };
        }

        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
}

function CategoryProvider({ children }: any) {
    const [state, dispatch] = useReducer(categoryReducer, initState);
    return (
        <CategoryStateContext.Provider value={state}>
            <CategoryDispatchContext.Provider value={dispatch}>{children}</CategoryDispatchContext.Provider>
        </CategoryStateContext.Provider>
    );
}

function useCategorytState() {
    let context = React.useContext(CategoryStateContext);
    if (context === undefined) {
        throw new Error('useCategorytState must be used within a CategoryProvider');
    }
    return context;
}

function useCategoryDispatch() {
    let context = React.useContext(CategoryDispatchContext);
    if (context === undefined) {
        throw new Error('useCategoryDispatch must be used within a CategoryProvider');
    }
    return context;
}

export { categoryReducer, useCategorytState, useCategoryDispatch, CategoryProvider };

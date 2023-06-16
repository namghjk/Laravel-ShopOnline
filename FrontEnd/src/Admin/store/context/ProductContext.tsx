import React, { useReducer } from 'react';

interface IProductState {
    isLoading: boolean;
    total_records: number;
    products: Array<any>;
}

interface IAction {
    type: string;
    payload: any;
}

const initState: IProductState = {
    isLoading: false,
    total_records: 0,
    products: [],
};

const ProductStateContext = React.createContext<IProductState>(initState);
const ProductDispatchContext = React.createContext<React.Dispatch<any>>(() => undefined);

function productReducer(state: IProductState, action: IAction) {
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
        case 'GET_PRODUCTS': {
            return {
                ...state,
                isLoading: false,
                products: payload.data,
                total_records: payload.additionalData.total_records,
            };
        }

        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
}

function ProductProvider({ children }: any) {
    const [state, dispatch] = useReducer(productReducer, initState);
    return (
        <ProductStateContext.Provider value={state}>
            <ProductDispatchContext.Provider value={dispatch}>{children}</ProductDispatchContext.Provider>
        </ProductStateContext.Provider>
    );
}

function useProductState() {
    let context = React.useContext(ProductStateContext);
    if (context === undefined) {
        throw new Error('useProductState must be used within a ProductProvider');
    }
    return context;
}

function useProductDispatch() {
    let context = React.useContext(ProductDispatchContext);
    if (context === undefined) {
        throw new Error('useProductDispatch must be used within a ProductProvider');
    }
    return context;
}

export { productReducer, useProductState, useProductDispatch, ProductProvider };

import React, {createContext, useReducer} from 'react';
import {AppReducer} from './AppReducer';

// InitialState
const initialState = {
    transactions: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const deleteTransaction = (id) => {
        dispatch({
            type: 'deleteTransaction',
            payload: id
        });
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: 'addTransaction',
            payload: transaction
        });
    }



    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
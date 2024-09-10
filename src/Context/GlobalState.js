import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state

const initialState = {
    transactions:[
         // Add more transactions here
    ]
}

// create context

export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({children}) => {
 const [state,dispatch] = useReducer(AppReducer, initialState);

//  actions for delete
 const deleteTransaction = (id) => {
    dispatch({
        type: 'DELETE_TRANSACTION', 
        payload: id
    });
 };
 // Add more action types and reducers here
// For example: DELETE_TRANSACTION, UPDATE_TRANSACTION, etc.
 
//  actions for delete
const addTransaction = (transaction) => {
    dispatch({
        type: 'ADD_TRANSACTION', 
        payload: transaction
    });
 };

 return(<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,addTransaction
    
 }}>
    {children}
 </GlobalContext.Provider>)
}
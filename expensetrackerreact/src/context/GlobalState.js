import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// we need an initial state
const initialState = {
  transactions: [
    // { id: 0, text: "abc", amount: 2000 },
    // { id: 1, text: "abcde", amount: -200 },
    // { id: 2, text: "abffc", amount: 22000 },
    // { id: 3, text: "absdsc", amount: 222000 },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

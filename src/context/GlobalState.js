import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const response = await axios.get("https://week5day6.vercel.app/");
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: response?.data?.data,
      });
    } catch (error) {
      console.log("error>>>", error);
    }
  }
  async function deleteTransaction(id) {
    try {
      const response = await axios.delete("https://week5day6.vercel.app/"+id);
      if (response?.status === 200) {
        getTransactions()
      }
    } catch (error) {
      console.log("error:::", error);
    }
  }
  async function addTransaction(data) {
    try {
      const response = await axios.post("https://week5day6.vercel.app/", data);
      if (response?.status === 200) {
        dispatch({
          type: "ADD_TRANSACTION",
          payload: response?.data?.data,
        });
        getTransactions()
      }
    } catch (error) {
      console.log("error:::", error)
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

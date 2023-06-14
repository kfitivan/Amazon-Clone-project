import React, { createContext, useContext, useReducer } from 'react';

// Create the context
export const AppContext = createContext();

// Define the initial state
const initialState = {
  basket: [], // initial value of basket
};

// Define the reducer function
const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // Handle other action types if needed
    default:
      return state;
  }
};

// Create the custom hook
export const useStateValue = () => useContext(AppContext);

// Create the provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

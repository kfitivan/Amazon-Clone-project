import React, { createContext, useContext, useReducer } from 'react';
import { useEffect } from 'react';


// Create the context
export const AppContext = createContext();

// Define the initial state
const initialState = {
  basket: [], // initial value of basket
};

// Define the reducer function
const reducer = (state, action) => {
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

  // Define the addToBasket function
  const addToBasket = (item) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item,
    });
  };

  // Retrieve basket items from local storage on component mount
  useEffect(() => {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
      dispatch({
        type: 'SET_BASKET',
        basket: JSON.parse(storedBasket),
      });
    }
  }, []);

  // Update local storage when basket changes
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(state.basket));
  }, [state.basket]);

  return (
    <AppContext.Provider value={{ state, addToBasket }}>
      {children}
    </AppContext.Provider>
  );
};
import React, { createContext, useContext, useReducer } from 'react';
import { useEffect } from 'react';


// Create the context

export const AppContext = createContext();

const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        const updatedBasket = [...state.basket];
        updatedBasket.splice(index, 1);
        return {
          ...state,
          basket: updatedBasket,
        };
      }
      return state;
    default:
      return state;
  }
};

export const useStateValue = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToBasket = (item) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item,
    });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, addToBasket }}>
      {children}
    </AppContext.Provider>
  );
};

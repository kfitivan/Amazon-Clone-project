import React, { createContext, useContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
  basket: [],
  user: null,
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
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToBasket = (item) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item,
    });
  };

  const removeFromBasket = (id) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    });
  };

  const setUser = (user) => {
    dispatch({
      type: 'SET_USER',
      user,
    });
  };

  return (
    <AppContext.Provider
      value={{ state, dispatch, addToBasket, removeFromBasket, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

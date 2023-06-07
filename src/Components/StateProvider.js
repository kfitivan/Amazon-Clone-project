
// This uses React Context API/REDUX to help us add items in the basket
import React, { createContext, useContext, useReducer} from "react"

// prepares the data layer
export const StateContext = createContext();

// warp our app and provide data layet to other components
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateContext.Provider values={useReducer(reducer, initialState)}> {children}</StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext)
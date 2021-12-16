// Setup A Data Layer
// We need this to track the basket
import React, { createContext, useContext, useReducer } from "react";

// This is a data layer
export const StateContext = createContext();

// Build a provider so we can wrap entire app inside of provider and give it to data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// This is how we use inisde of a component
export const useStateValue = () => useContext(StateContext);
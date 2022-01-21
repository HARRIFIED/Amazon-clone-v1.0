import React, { createContext, useContext, useReducer } from 'react';

//initial state => see reducer.js

//data layer ==> create context
export const StateContext = createContext();

//Build provider to  wrap the components
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
}; 

//how we use it inside a component
export const useStateValue = () => useContext(StateContext)
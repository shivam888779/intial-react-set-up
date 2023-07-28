import React, { createContext, useReducer } from 'react';

const initialState = {
  counter: 0,
};

const reducer = (state, payload) => ({
  ...state,
  ...payload,
});

const ReduxContext = createContext();

const ReduxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReduxContext.Provider value={{ state, dispatch }}>
      {children}
    </ReduxContext.Provider>
  );
};

export { ReduxContext, ReduxProvider };
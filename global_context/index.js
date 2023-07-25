import React, { useState } from "react";
import {
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

// import { BASE_URL } from "../shared/constants";

const initialState = {
    "name" : "shivam",
    "course":"B.tech"
}

const AuthContext = createContext({ state: initialState,});

 const simpleReducer = (state, payload) => ({
  ...state,
  ...payload,
});

const { Provider, Consumer } = AuthContext;


const AuthProvider = ({ children }) => {

  const [state, setState] = useReducer(simpleReducer, initialState);
  const [statedata, setStateData] = useState(initialState);


  const providerValue = useMemo(() => ({ state,}),[state]);
  return <Provider value={providerValue}>{children}</Provider>;
};

export const useAuth = () => useContext(AuthContext);
export { AuthProvider, Consumer as AuthConsumer, AuthContext };
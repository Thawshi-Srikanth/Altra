import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  zindex: false,
  clickToggle:false,
  setzIndex: () => {},
  setClickToggle: () => {},
  setResponse:()=>{},
  response:false
});

import React from "react";

export const ContextProvider = ({ children }) => {
  const [zindex, setzIndex] = useState(1);
  const [clickToggle, setClickToggle] = useState(false);
   const [response, setResponse] = useState(null);
  return (
    <StateContext.Provider value={{ setzIndex, zindex ,clickToggle, setClickToggle,response,setResponse}}>
      {children}
    </StateContext.Provider>
  );
};

export const userStateContext = () => useContext(StateContext);

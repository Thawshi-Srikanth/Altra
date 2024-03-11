import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  zindex: false,
  clickToggle:false,
  setzIndex: () => {},
  setClickToggle: () => {},
});

import React from "react";

export const ContextProvider = ({ children }) => {
  const [zindex, setzIndex] = useState(1);
  const [clickToggle, setClickToggle] = useState(false);
  return (
    <StateContext.Provider value={{ setzIndex, zindex ,clickToggle, setClickToggle}}>
      {children}
    </StateContext.Provider>
  );
};

export const userStateContext = () => useContext(StateContext);

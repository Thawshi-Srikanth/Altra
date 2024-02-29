import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  zindex: false,

  setZindex: () => {},
});

import React from "react";

export const ContextProvider = ({ children }) => {
  const [zindex, setzIndex] = useState(1);
  return (
    <StateContext.Provider value={{ setzIndex, zindex }}>
      {children}
    </StateContext.Provider>
  );
};

export const userStateContext = () => useContext(StateContext);

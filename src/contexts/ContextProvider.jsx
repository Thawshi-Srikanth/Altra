import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  zindex: false,
  clickToggle: false,
  setzIndex: () => {},
  setClickToggle: () => {},
  setResponse: () => {},
  response: false,
  furnitureCatelogue: furnitureCatelogue,
});

import React from "react";
import furnitureCatelogue from "../assets/data/catelogue/furnitureCatelogue";

export const ContextProvider = ({ children }) => {
  const [zindex, setzIndex] = useState(1);
  const [clickToggle, setClickToggle] = useState(false);
  const [response, setResponse] = useState(null);
  return (
    <StateContext.Provider
      value={{
        setzIndex,
        zindex,
        clickToggle,
        setClickToggle,
        response,
        setResponse,
        furnitureCatelogue,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const userStateContext = () => useContext(StateContext);

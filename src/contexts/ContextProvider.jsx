import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
  zindex: false,
  index: "",
  setIndex: () => {},
  clickToggle: false,
  setzIndex: () => {},
  setClickToggle: () => {},
  setResponse: () => {},
  response: false,
  furnitureCatelogue: furnitureCatelogue,
  glasswareCatelogue: glasswareCatelogue,
  chemicalsCatelogue: chemicalsCatelogue,
  actualClient: "",
  setActualClient: () => {},
});

import React from "react";
import furnitureCatelogue from "../assets/data/catelogue/furnitureCatelogue";
import glasswareCatelogue from "../assets/data/catelogue/glasswareCatelogue";
import chemicalsCatelogue from "../assets/data/catelogue/chemicalsCatelogue";
export const ContextProvider = ({ children }) => {
  const [zindex, setzIndex] = useState();
  const [clickToggle, setClickToggle] = useState(false);
  const [response, setResponse] = useState(null);
  const [actualClient, setActualClient] = useState(
    localStorage.getItem("actualClient") || ""
  );
  const [index, setIndex] = useState(localStorage.getItem("index") || "");

  useEffect(() => {
    localStorage.setItem("actualClient", actualClient);
  }, [actualClient]);

  
  useEffect(() => {
    localStorage.setItem("index", index);
  }, [index]);

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
        glasswareCatelogue,
        chemicalsCatelogue,
        setActualClient,
        actualClient,
        index,
        setIndex,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const userStateContext = () => useContext(StateContext);

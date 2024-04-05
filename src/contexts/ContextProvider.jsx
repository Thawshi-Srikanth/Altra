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
  plasticwareCatelogue: plasticwareCatelogue,
  actualClient: "",
  consumablesCatelogue: consumablesCatelogue,
  equipmentCatelogue: equipmentCatelogue,
  currentPath: "",
 
  setCurrentPath: () => {},
  setActualClient: () => {},
});

import React from "react";
import furnitureCatelogue from "../assets/data/catelogue/furnitureCatelogue";
import glasswareCatelogue from "../assets/data/catelogue/glasswareCatelogue";
import chemicalsCatelogue from "../assets/data/catelogue/chemicalsCatelogue";
import { plasticwareCatelogue } from "./../assets/data/catelogue/plasticwareCatelogue";
import { consumablesCatelogue } from "./../assets/data/catelogue/consumablesCatelogue";
import { equipmentCatelogue } from "./../assets/data/catelogue/equipmentCatelogue";
export const ContextProvider = ({ children }) => {
  const [zindex, setzIndex] = useState();
  const [clickToggle, setClickToggle] = useState(false);
  const [response, setResponse] = useState(null);
  const [currentPath, setCurrentPath] = useState("");
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
        plasticwareCatelogue,
        consumablesCatelogue,
        equipmentCatelogue,
        currentPath,
        setCurrentPath,
    
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const userStateContext = () => useContext(StateContext);

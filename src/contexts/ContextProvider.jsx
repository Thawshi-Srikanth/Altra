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
  mainCatelogue: "",
  setMainCatelogue: () => {},
  setCurrentPath: () => {},
  setActualClient: () => {},
  clearLocal:false,
  setClearLocal:()=> {},
});

import React from "react";
import furnitureCatelogue from "../assets/data/catelogue/furnitureCatelogue";
import glasswareCatelogue from "../assets/data/catelogue/glasswareCatelogue";
import chemicalsCatelogue from "../assets/data/catelogue/chemicalsCatelogue";
import { plasticwareCatelogue } from "./../assets/data/catelogue/plasticwareCatelogue";
import { consumablesCatelogue } from "./../assets/data/catelogue/consumablesCatelogue";
import { equipmentCatelogue } from "./../assets/data/catelogue/equipmentCatelogue";
export const ContextProvider = ({ children }) => {
  const [mainCatelogue, setMainCatelogue] = useState(
    localStorage.getItem("mainCatelogue") || ""
  );
  const [zindex, setzIndex] = useState();
  const [clearLocal, setClearLocal] = useState(false);
  const [clickToggle, setClickToggle] = useState(false);
  const [response, setResponse] = useState(null);
  const [currentPath, setCurrentPath] = useState("");
  const [actualClient, setActualClient] = useState(
    localStorage.getItem("actualClient") || ""
  );
  const [index, setIndex] = useState(localStorage.getItem("index") || "");

  useEffect(() => {
    localStorage.setItem("actualClient", actualClient);
  }, [actualClient]

);

  useEffect(() => {
    localStorage.setItem("mainCatelogue", mainCatelogue);
  }, [mainCatelogue]);

  useEffect(() => {
    localStorage.setItem("index", index);
    // if(clearLocal){localStorage.removeItem("index");}
  }, [index,clearLocal]);

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
        mainCatelogue,
        setMainCatelogue,
        clearLocal,
        setClearLocal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const userStateContext = () => useContext(StateContext);


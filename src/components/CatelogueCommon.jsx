import React from "react";
import FurnitureCataelogueImages from "../pages/Furniture/FurnitureCataelogueImages";
import GlasswareCataelogueImages from "./../pages/Glassware/GlasswareCataelogueImages";
import ChemicalsAccStandCatelogue from "../pages/Chemicals&Standards/ChemicalsAccStandCatelogue";
import { userStateContext } from "../contexts/ContextProvider";
import chemLAbCatelogue from "../pages/Chemicals&Standards/ChemLAbCatelogue";
import ChemLAbCatelogue from "../pages/Chemicals&Standards/ChemLAbCatelogue";
import MegazymeCatelogue from "./../pages/Chemicals&Standards/MegazymeCatelogue";
import { plasticwareCatelogue } from "./../assets/data/catelogue/plasticwareCatelogue";
import PlasticwareCatelogueImages from "./../pages/Plasticware/PlasticwareCatelogueImages";
import JohnsonCatelogue from "./../pages/Consumables/JohnsonCatelogue";
import WaterCatelogue from "./../pages/Consumables/WaterCatelogue";
import Geyer from "./../pages/Consumables/GeyerCatelogue";
import GeyerCatelogue from "./../pages/Consumables/GeyerCatelogue";
import Lactosan from "./../pages/Consumables/LactosanCatelogue";
import LactosanCatelogue from "./../pages/Consumables/LactosanCatelogue";
import { equipmentCatelogue } from "./../assets/data/catelogue/equipmentCatelogue";
import FranceCatelogue from "../pages/Equipments/FranceCatelogue";
import AperaCatelogue from "../pages/Equipments/AperaCatelogue";
import OrtoCatelogue from "../pages/Equipments/OrtoCatelogue";
import EuroMexCatelogue from "../pages/Equipments/EuroMexCatelogue";
import CamlabCatelogue from "../pages/Equipments/CamlabCatelogue";
import GerberCatelogue from "../pages/Equipments/GerberCatelogue";
import Jp from "../pages/Equipments/Jp";
import Consort from "../pages/Equipments/Consort";
import InterScience from "../pages/Equipments/InterScience";


function CatelogueCommon({ catelogue, id, catelogueHorizontal, copyright }) {
  const { actualClient } = userStateContext();
 
  //   const filteredCatelogue = catelogue.filter((item) => {
  // console.log(item.catelogueName);
  //    return item.catelogueName === actualClient;

  //   });
 

  return (
    <>
      {id === "furniture" && (
        <div className="">
          {" "}
          <FurnitureCataelogueImages catelogue={catelogue} copyright={copyright} />
        </div>
      )}

      {id === "glassware" && (
        <div className="">
          {" "}
          <GlasswareCataelogueImages catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "accustand" && id === "chemicals" && (
        <div className="">
          <ChemicalsAccStandCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "chemlab" && id === "chemicals" && (
        <div className="">
          <ChemLAbCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "megazyme" && id === "chemicals" && (
        <div className="">
          <MegazymeCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}

      {/* equipment */}

      {actualClient == "france" && id === "equipment" && (
        <div className="">
          <FranceCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "apera" && id === "equipment" && (
        <div className="">
          <AperaCatelogue catelogue={catelogue} copyright={copyright}  />
        </div>
      )}
      {actualClient == "orto" && id === "equipment" && (
        <div className="">
          <OrtoCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "euromax" && id === "equipment" && (
        <div className="">
          <EuroMexCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "camlab" && id === "equipment" && (
        <div className="">
          <CamlabCatelogue
            catelogue={catelogue} copyright={copyright}
            catelogueHorizontal={catelogueHorizontal}
          />
        </div>
      )}
      {actualClient == "gerber" && id === "equipment" && (
        <div className="">
          <GerberCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "jp" && id === "equipment" && (
        <div className="">
          <Jp catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "consort" && id === "equipment" && (
        <div className="">
          <Consort catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "interscience" && id === "equipment" && (
        <div className="">
          <InterScience catelogue={catelogue} copyright={copyright} />
        </div>
      )}

      {/* consumables */}
      {actualClient == "johnson" && id === "consumables" && (
        <div className="">
          <JohnsonCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "water" && id === "consumables" && (
        <div className="">
          <WaterCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "geyer" && id === "consumables" && (
        <div className="">
          <GeyerCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}
      {actualClient == "lactos" && id === "consumables" && (
        <div className="">
          <LactosanCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      )}

      {/* plasticware */}
      {id === "plasticware" && (
        <div className="">
          <PlasticwareCatelogueImages catelogue={catelogue} copyright={copyright} />
        </div>
      )}
    </>
  );
}

export default CatelogueCommon;

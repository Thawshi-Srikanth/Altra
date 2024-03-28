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


function CatelogueCommon({ catelogue, id }) {
  const { actualClient } = userStateContext();
  console.log(actualClient);

  console.log(catelogue);
  //   const filteredCatelogue = catelogue.filter((item) => {
  // console.log(item.catelogueName);
  //    return item.catelogueName === actualClient;

  //   });

  return (
    <>
      {id === "furniture" && (
        <div className="">
          {" "}
          <FurnitureCataelogueImages catelogue={catelogue} />
        </div>
      )}

      {id === "glassware" && (
        <div className="">
          {" "}
          <GlasswareCataelogueImages catelogue={catelogue} />
        </div>
      )}
      {actualClient == "accustand" && id === "chemicatalogue" && (
        <div className="">
          <ChemicalsAccStandCatelogue catelogue={catelogue} />
        </div>
      )}
      {actualClient == "chemlab" && id === "chemicatalogue" && (
        <div className="">
          <ChemLAbCatelogue catelogue={catelogue} />
        </div>
      )}
      {actualClient == "megazyme" && id === "chemicatalogue" && (
        <div className="">
          <MegazymeCatelogue catelogue={catelogue} />
        </div>
      )}

      {/* equipment */}

      {actualClient == "france" && id === "equipment" && (
        <div className="">
          <FranceCatelogue catelogue={catelogue} />
        </div>
      )}

      {/* consumables */}
      {actualClient == "johnson" && id === "consumables" && (
        <div className="">
          <JohnsonCatelogue catelogue={catelogue} />
        </div>
      )}
      {actualClient == "water" && id === "consumables" && (
        <div className="">
          <WaterCatelogue catelogue={catelogue} />
        </div>
      )}
      {actualClient == "geyer" && id === "consumables" && (
        <div className="">
          <GeyerCatelogue catelogue={catelogue} />
        </div>
      )}
      {actualClient == "lactos" && id === "consumables" && (
        <div className="">
          <LactosanCatelogue catelogue={catelogue} />
        </div>
      )}

      {/* plasticware */}
      {id === "plasticware" && (
        <div className="">
          <PlasticwareCatelogueImages catelogue={catelogue} />
        </div>
      )}
    </>
  );
}

export default CatelogueCommon;

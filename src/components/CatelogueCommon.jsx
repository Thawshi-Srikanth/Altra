import React from "react";
import FurnitureCataelogueImages from "../pages/Furniture/FurnitureCataelogueImages";
import GlasswareCataelogueImages from "./../pages/Glassware/GlasswareCataelogueImages";
import ChemicalsAccStandCatelogue from "../pages/Chemicals&Standards/ChemicalsAccStandCatelogue";
import { userStateContext } from "../contexts/ContextProvider";
import chemLAbCatelogue from "../pages/Chemicals&Standards/ChemLAbCatelogue";
import ChemLAbCatelogue from "../pages/Chemicals&Standards/ChemLAbCatelogue";
import MegazymeCatelogue from "./../pages/Chemicals&Standards/MegazymeCatelogue";
import { plasticwareCatelogue } from './../assets/data/catelogue/plasticwareCatelogue';
import PlasticwareCatelogueImages from './../pages/Plasticware/PlasticwareCatelogueImages';

function CatelogueCommon({ catelogue, id }) {
  const { actualClient } = userStateContext();

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
      {id === "plasticware" && (
        <div className="">
          <PlasticwareCatelogueImages catelogue={catelogue} />
        </div>
      )}
    </>
  );
}

export default CatelogueCommon;

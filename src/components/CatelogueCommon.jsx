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
import { useParams } from "react-router-dom";


function CatelogueCommon({ catelogue, id, catelogueHorizontal, copyright }) {
  const { actualClient } = userStateContext();
 
  //   const filteredCatelogue = catelogue.filter((item) => {
  // console.log(item.catelogueName);
  //    return item.catelogueName === actualClient;

  //   });
 
  const { ids, clientNextpath, mainNextpath } = useParams();

  return (
    <div className="">
      {(actualClient === "method" && id === "furniture") ||
      (ids == 0 && clientNextpath === "method") ? (
        <div className="">
          {" "}
          <FurnitureCataelogueImages
            catelogue={catelogue}
            copyright={copyright}
          />
        </div>
      ) : (
        ""
      )}

      {(actualClient === "witeg" && id === "glassware") ||
      (ids == 0 &&
        clientNextpath === "witeg" &&
        mainNextpath === "glassware") ? (
        <div className="">
          {" "}
          <GlasswareCataelogueImages
            catelogue={catelogue}
            copyright={copyright}
          />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "accustand" && id === "chemicals") ||
      (ids == 0 && clientNextpath === "accustand") ? (
        <div className="">
          <ChemicalsAccStandCatelogue
            catelogue={catelogue}
            copyright={copyright}
          />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "chemlab" && id === "chemicals") ||
      (ids == 1 && clientNextpath === "chemlab") ? (
        <div className="">
          <ChemLAbCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "megazyme" && id === "chemicals") ||
      (ids == 2 && clientNextpath === "megazyme") ? (
        <div className="">
          <MegazymeCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}

      {/* equipment */}

      {(actualClient == "france" && id === "equipment") ||
      (ids == 0 && clientNextpath === "france") ? (
        <div className="">
          <FranceCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "apera" && id === "equipment") ||
      (ids == 1 && clientNextpath === "apera") ? (
        <div className="">
          <AperaCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "orto" && id === "equipment") ||
      (ids == 2 && clientNextpath === "orto") ? (
        <div className="">
          <OrtoCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "euromax" && id === "equipment") ||
      (ids == 3 && clientNextpath === "euromax") ? (
        <div className="">
          <EuroMexCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "camlab" && id === "equipment") ||
      (ids == 4 && clientNextpath === "camlab") ? (
        <div className="">
          <CamlabCatelogue
            catelogue={catelogue}
            copyright={copyright}
            catelogueHorizontal={catelogueHorizontal}
          />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "gerber" && id === "equipment") ||
      (ids == 5 && clientNextpath === "gerber") ? (
        <div className="">
          <GerberCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "jp" && id === "equipment") ||
      (ids == 8 && clientNextpath === "jp") ? (
        <div className="">
          <Jp catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "consort" && id === "equipment") ||
      (ids == 6 && clientNextpath === "consort") ? (
        <div className="">
          <Consort catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "interscience" && id === "equipment") ||
      (ids == 7 && clientNextpath === "interscience") ? (
        <div className="">
          <InterScience catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}

      {/* consumables */}
      {(actualClient == "johnson" && id === "consumables") ||
      (ids == 0 && clientNextpath === "johnson") ? (
        <div className="">
          <JohnsonCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "water" && id === "consumables") ||
      (ids == 1 && clientNextpath === "water") ? (
        <div className="">
          <WaterCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "geyer" && id === "consumables") ||
      (ids == 3 && clientNextpath === "geyer") ? (
        <div className="">
          <GeyerCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}
      {(actualClient == "lactos" && id === "consumables") ||
      (ids == 2 && clientNextpath === "lactos") ? (
        <div className="">
          <LactosanCatelogue catelogue={catelogue} copyright={copyright} />
        </div>
      ) : (
        ""
      )}

      {/* plasticware */}
      {(id === "plasticware" && actualClient == "witeg") ||
      (ids == 0 &&
        clientNextpath === "witeg" &&
        mainNextpath === "plasticware") ? (
        <div className="">
          <PlasticwareCatelogueImages
            catelogue={catelogue}
            copyright={copyright}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CatelogueCommon;

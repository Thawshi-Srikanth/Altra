import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { furnitureCatelogue } from "./../assets/data/catelogue/furnitureCatelogue";
import { userStateContext } from "../contexts/ContextProvider";
import ImageCommonBg from "./ImageCommonBg";
import CatelogueCommon from "./CatelogueCommon";
import { CloudCog } from "lucide-react";

function ProductCataloguetemplate() {
  const {
    furnitureCatelogue,
    glasswareCatelogue,
    chemicalsCatelogue,
    index,
    plasticwareCatelogue,
    consumablesCatelogue,
    equipmentCatelogue,
  } = userStateContext();

  const { mainNextpath } = useParams();

  const destructuring = (data) =>
    data.map((item, id) => ({
      bgImage: (
        <div key={item.id}>
          <ImageCommonBg
            img={item && item.bgImage}
            id={mainNextpath}
            text={item && item.catelogue[index].text}
          />
        </div>
      ),
      catelogue: (
        <CatelogueCommon
          catelogue={item && item.catelogue[index].catlogueImages}
          catelogueHorizontal={item && item.catelogue[index].horizontal}
          copyright={item && item.catelogue[index].copyright}
          id={mainNextpath}
        />
      ),
    }));

  let selectedValue = null;
  if (mainNextpath === "furniture") {
    selectedValue = furnitureCatelogue;
  } else if (mainNextpath === "glassware") {
    selectedValue = glasswareCatelogue;
  } else if (mainNextpath === "chemicatalogue") {
    selectedValue = chemicalsCatelogue;
  } else if (mainNextpath === "plasticware") {
    selectedValue = plasticwareCatelogue;
  } else if (mainNextpath === "consumables") {
    selectedValue = consumablesCatelogue;
  } else if (mainNextpath === "equipment") {
    selectedValue = equipmentCatelogue;
  }
  const items = selectedValue && destructuring(selectedValue);

  return (
    <div>
      {items.map((i, id) => (
        <div key={id}>{i.bgImage}</div>
      ))}

      <p className="text-[15px] text-center xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[30px] font-rosario font-bold text-[#ff8a3a]  relative mt-9 ">
        {" "}
        Product Catalogue
      </p>
      {items.map((i, id) => (
        <div key={id}>{i.catelogue}</div>
      ))}
    </div>
  );
}

export default ProductCataloguetemplate;

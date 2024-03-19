import React from "react";
import { useParams } from "react-router-dom";
import { furnitureCatelogue } from "./../assets/data/catelogue/furnitureCatelogue";
import { userStateContext } from "../contexts/ContextProvider";
import ImageCommonBg from "./ImageCommonBg";
import CatelogueCommon from "./CatelogueCommon";

function ProductCataloguetemplate() {
  const { id } = useParams();

  const { furnitureCatelogue } = userStateContext();

  const destructuring = (data) =>
    data.map((item) => ({
      bgImage: (
        <div key={item.id}>
          <ImageCommonBg img={item.bgImage} id={id} />
        </div>
      ),
      catelogue: <CatelogueCommon catelogue={item.catelogue} id={id} />,
    }));

  const items = destructuring(furnitureCatelogue);

  return (
    <div>
      {items.map((i, id) => (
        <div key={id}>{i.bgImage}</div>
      ))}

      <p className="text-center text-3xl"> Product catelogue</p>
      {items.map((i, id) => (
        <div key={id}>{i.catelogue}</div>
      ))}
    </div>
  );
}

export default ProductCataloguetemplate;

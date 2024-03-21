import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { furnitureCatelogue } from "./../assets/data/catelogue/furnitureCatelogue";
import { userStateContext } from "../contexts/ContextProvider";
import ImageCommonBg from "./ImageCommonBg";
import CatelogueCommon from "./CatelogueCommon";

function ProductCataloguetemplate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  
  const { furnitureCatelogue ,glasswareCatelogue} = userStateContext();

  const destructuring = (data) =>
    data.map((item) => ({
      bgImage: (
        <div key={item.id}>
          <ImageCommonBg img={item.bgImage} id={id} mobImg={item.bgImageMob} />
        </div>
      ),
      catelogue: <CatelogueCommon catelogue={item.catelogue} id={id} />,
    }));

  let selectedValue = null;
  if (id === "furcatalogue") {
    selectedValue = furnitureCatelogue;
  }
  else if(id==="glassware"){
    selectedValue=glasswareCatelogue;
  }
  const items = selectedValue && destructuring(selectedValue);

  return (
    <div>
      {items.map((i, id) => (
        <div key={id}>{i.bgImage}</div>
      ))}

      <p className="text-[15px] text-center xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[30px] font-rosario font-bold text-[#ff8a3a]  relative mt-9 ">
        {" "}
        Product catelogue
      </p>
      {items.map((i, id) => (
        <div key={id}>{i.catelogue}</div>
      ))}
    </div>
  );
}

export default ProductCataloguetemplate;

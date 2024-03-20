import React from "react";
import FurnitureCataelogueImages from "../pages/Furniture/FurnitureCataelogueImages";

function CatelogueCommon({ catelogue, id }) {
  return (
    // <div className="grid grid-cols-5 relative xl:top-[50px]">
    //   {catelogue.map((image) => (
    //     <div key={image.id} className="">
    //       {" "}
    //      {id==="furcatalogue"&& <img src={image.Catlogueimage} alt="" />}
    //     </div>
    //   ))}
    // </div>

    <>
     
     
          {id === "furcatalogue" && (
            <div className="">
              {" "}
              <FurnitureCataelogueImages catelogue={catelogue} />
            </div>
          )}
    

    </>
  );
}

export default CatelogueCommon;

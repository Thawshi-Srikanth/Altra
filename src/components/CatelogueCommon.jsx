import React from "react";

function CatelogueCommon({ catelogue }) {

  return (
    <div className="grid grid-cols-4">
      {catelogue.map((image) => (
        <div key={image.id} className="">
          {" "}
          <img src={image.Catlogueimage} alt="" />
        </div>
      ))}
    </div>
  );
}

export default CatelogueCommon;

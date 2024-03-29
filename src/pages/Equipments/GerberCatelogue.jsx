import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function GerberCatelogue({ catelogue }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, catelogue.length );


  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="  relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[200px] md:mb-[0px] lg:mb-[0px] xl:mb-[0px] xl:space-y-10 sm:space-y-7 md:space-y-0 space-y-5 mb-10">
      {imagepopUp ? (
        <div className="">
          <ImagePopup
            imageId={popupId}
            catelogueId={catelogue.id}
            catelogue={catelogue}
            onClose={handleClick}
          />
        </div>
      ) : (
        ""
      )}
      <div className=" grid grid-cols-3 xl:gap-x-[60px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  2xl:mx-[200px] md:mx-[100px]  sm:mx-[90px]  mx-[15px] lg:mx-[90px]  xl:space-y-[60px] lg:space-y-10 space-y-5  sm:space-y-8  md:space-y-12 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[333px] xl:h-[280px] w-[105px] h-[88px] sm:h-[160px] sm:w-[170px] md:h-[200px] md:w-[200px] lg:w-[240px] lg:h-[250px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>

      <p className=" text-[12px] text-center font-rosario lg:text-[15px] text-[#666]  relative  top-4  ">
        Copyrights-https://www.gerber-instruments.com/en/
      </p>
    </div>
  );
}

export default GerberCatelogue;

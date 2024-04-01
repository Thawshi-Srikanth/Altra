import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function GerberCatelogue({ catelogue }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, catelogue.length);

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
      <div className=" grid grid-cols-5 xl:gap-x-[0px] lg:gap-x-[20px] sm:gap-x-[20px] md:gap-x-[20px]  gap-x-[10px] justify-center  2xl:mx-[110px] xl:mx-[10px] md:mx-[20px]  sm:mx-[20px]  mx-[15px] lg:mx-[20px]  xl:space-y-[20px]  2xl:space-y-[70px] lg:space-y-10 space-y-5  sm:space-y-8  md:space-y-5 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[230px] xl:h-[230px] w-[86px] h-[86px] sm:h-[160px] sm:w-[150px] md:h-[180px] md:w-[180px] lg:w-[200px] lg:h-[200px] border border-blue-gray-400 rounded-lg "
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

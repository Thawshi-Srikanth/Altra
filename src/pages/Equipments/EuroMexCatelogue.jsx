import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function EuroMexCatelogue({ catelogue, copyright }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, 10);
  const finalRow = catelogue.slice(10);

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
      <div className=" grid grid-cols-5 xl:space-x-[30px] lg:gap-x-[20px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  2xl:mx-[150px] xl:mx-[20px] md:mx-[70px]  sm:mx-[15px]  mx-[12px] lg:mx-[20px]  xl:space-y-[60px] lg:space-y-20 space-y-5  sm:space-y-8  md:space-y-10 items-baseline ">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[230px] xl:h-[335px]  w-[80px] h-[100px] sm:h-[90px] sm:w-[120px] md:h-[100px] md:w-[120px] lg:w-[150px] lg:h-[150px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-4 xl:gap-x-[0px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center   2xl:mx-[300px]  xl:mx-[90px] md:mx-[120px]  sm:mx-[60px]  mx-[7px] lg:mx-[90px] xl:space-y-[60px]  2xl:space-y-[60px] lg:space-y-10 space-y-6  sm:space-y-8  md:space-y-10 items-baseline relative xl:bottom-10 bottom-4 sm:bottom-[20px]">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[230px] xl:h-[335px]  w-[80px] h-[100px] sm:h-[90px] sm:w-[120px] md:h-[100px] md:w-[120px] lg:w-[150px] lg:h-[150px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <p className=" text-[12px] text-center font-rosario lg:text-[15px] text-[#666]  relative  top-4  ">
        {copyright}
      </p>
    </div>
  );
}

export default EuroMexCatelogue;

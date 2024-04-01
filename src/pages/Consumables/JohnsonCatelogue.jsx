import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function JohnsonCatelogue({ catelogue ,copyright}) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, 12);

  const finalRow = catelogue.slice(12,);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="flex flex-col justify-center mx-auto   relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[170px] ">
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
      <div className="grid grid-cols-3 2xl:gap-x-[0px]  2xl:mx-[220px] xl:gap-x-[50px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center  md:mx-[100px]  sm:mx-[90px]  mx-[15px] lg:mx-auto  xl:space-y-10 lg:space-y-12 space-y-5  sm:space-y-8  md:space-y-10 items-baseline ">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto md:px-3 lg:px-0"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[332px] xl:h-[230px] w-[118px] h-[82px] sm:h-[100px] sm:w-[140px] md:h-[140px] md:w-[200px] lg:w-[280px] lg:h-[200px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="flex  md:space-y-12 sm:top-2 relative  xl:gap-x-[0px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[15px] justify-center mx-auto     items-baseline ">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto  "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className=" mx-auto xl:w-[332px] xl:h-[230px] w-[118px] h-[82px] sm:h-[100px] sm:w-[140px] md:h-[140px] md:w-[200px] lg:w-[280px] lg:h-[200px] border border-blue-gray-400 rounded-lg relative top-8 "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="h-[80px] md:h-[0px] relative top-12 sm:top-[60px] md:top-20 ">
        {" "}
        <p className="text-[10px] md:text-[12px] text-center font-rosario xl:text-[15px] text-[#666]  relative  ">
          {copyright}
        </p>
      </div>
    </div>
  );
}

export default JohnsonCatelogue;

import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function OrtoCatelogue({ catelogue, copyright }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, catelogue.length - 1);
  const finalRow = catelogue.slice(catelogue.length - 1);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="  relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[200px] md:mb-[0px] lg:mb-[0px] xl:mb-[0px] xl:space-y-10  sm:space-y-7 md:space-y-0 space-y-5 mb-10">
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
      <div className=" grid grid-cols-3 2xl:gap-x-[0px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  2xl:mx-[250px] md:mx-[100px]  sm:mx-[90px]  mx-[15px] lg:mx-[90px]  xl:space-y-[60px] 2xl:space-y-[80px] lg:space-y-10 space-y-5  sm:space-y-8  md:space-y-12 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[332px] xl:h-[230px] w-[118px] h-[82px] sm:h-[120px] sm:w-[140px] md:h-[140px] md:w-[190px] lg:w-[232px] lg:h-[150px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" flex xl:gap-x-[20px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[30px]  sm:mx-[20px]  mx-[15px] lg:mx-[0px]  xl:space-y-0   lg:space-y-10 space-y-0  sm:space-y-8  md:space-y-12 items-baseline  relative 2xl:top-9">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[332px] xl:h-[230px] w-[118px] h-[82px] sm:h-[120px] sm:w-[140px] md:h-[140px] md:w-[190px] lg:w-[232px] lg:h-[150px] border border-blue-gray-400 rounded-lg "
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

export default OrtoCatelogue;

import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function AperaCatelogue({ catelogue, copyright }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, catelogue.length - 2);

  const finalRow = catelogue.slice(catelogue.length - 2);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="  relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[0px] md:mb-[-250px] lg:mb-[-190px] xl:mb-[-190px]">
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
      <div className=" grid  grid-cols-4 sm:grid-cols-5 xl:gap-x-[20px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[30px]  sm:mx-[20px]  mx-[15px] lg:mx-[0px]  xl:space-y-10 lg:space-y-10 space-y-0  sm:space-y-8  md:space-y-12 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className=" sm:block hidden text-nowarap xl:w-[230px] xl:h-[235px] w-[86px] h-[86px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[140px] lg:w-[180px] lg:h-[190px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="flex  xl:gap-x-[20px]  2xl:gap-x-[60px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center  2xl:mx-[0px] md:mx-[220px]  sm:mx-[20px]  mx-[15px] lg:mx-[0px]  xl:space-y-10 lg:space-y-10 space-y-5  sm:space-y-8  md:space-y-12 items-baseline">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center md:mx-4 lg:mx-0 "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="sm:block hidden text-nowarap xl:w-[230px] xl:h-[235px] w-[86px] h-[86px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[140px] lg:w-[180px] lg:h-[190px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" grid  grid-cols-4   gap-x-[10px] justify-center     mx-[15px]  space-y-5  sm:space-y-8   items-baseline">
        {catelogue.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="sm:hidden text-nowarap  w-[86px] h-[86px]  border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="relative lg:top-[-200px] md:top-[-240px] sm:top-[-200px] ">
        <p className=" text-[12px] lg:text-[20px] text-center font-rosario xl:text-[15px] text-[#666] mb-0 sm:mb-0 pb-8 sm:pb-5 md:pb-0 relative top-4 xl:top-0 ">
          {copyright}
        </p>
      </div>
    </div>
  );
}

export default AperaCatelogue;

import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function PlasticwareCatelogueImages({ catelogue,copyright }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);
  const firstRow = catelogue.slice(0, 5);

  const secondRow = catelogue.slice(5, 11);
  const finalRow = catelogue.slice(11);
  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className=" overflow-hidden xl:space-y-[0px] lg:space-y-[40px] space-y-[20px] md:space-y-[30px] sm:space-y-[30px] relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[170px] md:mb-0">
      {imagepopUp ? (
        <div className="overflow-hidden">
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
      <div className="grid grid-cols-5 xl:gap-x-[40px] lg:gap-x-[20px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[70px]  sm:mx-[10px]  mx-[15px] lg:mx-[17px]  xl:space-y-10 lg:space-y-12 space-y-5  sm:space-y-8  md:space-y-10 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[228px] xl:h-[335px] w-[68px] h-[100px] sm:h-[140px] sm:w-[180px] md:h-[140px] md:w-[200px] lg:w-[300px] lg:h-[240px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 xl:gap-x-[40px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[90px]  sm:mx-[10px]  mx-[15px] lg:mx-[17px]  xl:space-y-10 lg:space-y-[40px] space-y-5  sm:space-y-8  md:space-y-10 items-baseline relative lg:bottom-5 xl:bottom-0 sm:bottom-6 md:bottom-5 bottom-3">
        {secondRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[390px] xl:h-[335px] w-[116px] h-[100px] sm:h-[140px] sm:w-[180px] md:h-[140px] md:w-[200px] lg:w-[300px] lg:h-[240px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="  grid grid-cols-3 xl:gap-x-[40px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[70px]  sm:mx-[10px]  mx-[15px] lg:mx-[17px]  xl:space-y-10 lg:space-y-2 space-y-0  sm:space-y-8  md:space-y-2 items-baseline relative bottom-2 sm:bottom-0">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className={`${
                image.id === 12
                  ? "w-[95px] h-[100px]  xl:w-[320px] xl:h-[335px] lg:w-[220px] sm:h-[140px] sm:w-[150px] lg:h-[235px] md:w-[200px] md:h-[150px] relative xl:top-[30px] lg:top-[-12px] sm:bottom-6 md:bottom-0"
                  : "w-[135px] h-[85px] sm:h-[130px] sm:w-[180px] xl:w-[452px]  xl:h-[287px] md:w-[210px] md:h-[140px] lg:w-[310px] lg:h-[200px] relative lg:bottom-8 xl:bottom-0 sm:bottom-6 md:bottom-[0px] bottom-2"
              }       border border-blue-gray-400 rounded-lg `}
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <p className="text-[10px] sm:text-[15px] text-center font-rosario xl:text-[15px] text-[#666] mb-3 sm:mb-0 pb-8 sm:pb-5 xl:pb-0 relative top-4 xl:top-[90px] xl:h-[120px] ">
        {copyright}
      </p>
    </div>
  );
}

export default PlasticwareCatelogueImages;

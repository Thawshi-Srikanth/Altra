import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function Jp({ catelogue, copyright }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, 15);
  const finalRow = catelogue.slice(15,25);
  const final = catelogue.slice(25,);

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
      <div className=" grid grid-cols-3 xl:gap-x-[0px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  2xl:mx-[200px] xl:mx-[50px] md:mx-[100px]  sm:mx-[90px]  mx-[35px] lg:mx-[90px]  xl:space-y-[60px]  2xl:space-y-[90px] lg:space-y-10 space-y-5  sm:space-y-8  md:space-y-12 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[332px] xl:h-[280px] w-[96px] h-[81px] sm:h-[160px] sm:w-[170px] md:h-[200px] md:w-[200px] lg:w-[240px] lg:h-[250px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-5 xl:gap-x-[50px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[40px]  gap-x-[10px] justify-center  2xl:mx-[100px] xl:mx-[30px] md:mx-[30px]  sm:mx-[20px]  mx-[15px] lg:mx-[0px]  xl:space-y-[60px] lg:space-y-10 space-y-4  sm:space-y-8  md:space-y-12 items-baseline relative xl:bottom-10 bottom-3">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[230px] xl:h-[335px] w-[67px] h-[97px] sm:h-[120px] sm:w-[140px] md:h-[140px] md:w-[190px] lg:w-[232px] lg:h-[150px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-2 xl:gap-x-[0px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center  2xl:mx-[400px] xl:mx-[240px] md:mx-[220px]  sm:mx-[190px]  mx-[105px] lg:mx-[90px]  xl:space-y-[60px] lg:space-y-10 space-y-5  sm:space-y-8  md:space-y-12 items-baseline xl:bottom-20 relative bottom-7">
        {final.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[332px] xl:h-[280px] w-[96px] h-[81px] sm:h-[160px] sm:w-[170px] md:h-[200px] md:w-[200px] lg:w-[240px] lg:h-[250px] border border-blue-gray-400 rounded-lg "
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

export default Jp;

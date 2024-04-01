import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function WaterCatelogue({ catelogue }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, 9);

  const finalRow = catelogue.slice(9, 29);

  const thirdRow = catelogue.slice(29,);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="xl:space-y-[20px] lg:space-y-[20px] space-y-[0px] md:space-y-[10px] sm:space-y-[10px] relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[170px] md:mb-0">
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
      <div className="2xl:gap-x-[0px]  2xl:mx-[220px] xl:gap-x-[0px] grid grid-cols-3  lg:gap-x-[0px] sm:gap-x-[0px] md:gap-x-[0px]  gap-x-[0px] justify-center  xl:mx-[80px] md:mx-[130px]   sm:mx-[90px]  mx-[37px] lg:mx-[100px]  xl:space-y-10 lg:space-y-10 space-y-5  sm:space-y-8  md:space-y-10 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[332px] xl:h-[230px] w-[101px] h-[70px] sm:h-[100px] sm:w-[130px] md:h-[180px] md:w-[180px] lg:w-[230px] lg:h-[140px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 md:space-y-10  space-y-5 sm:space-y-5 sm:top-0 relative  2xl:gap-x-[0px] xl:gap-x-[40px] lg:gap-x-[0px] sm:gap-x-[0px] md:gap-x-[0px]  gap-x-[5px] justify-center mx-3 2xl:mx-[130px] lg:mx-[60px]  xl:space-y-10 items-baseline md:mx-[60px] sm:mx-[10px]  ">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[230px] xl:h-[230px] w-[70px] h-[70px] sm:h-[90px] sm:w-[100px] md:h-[120px] md:w-[120px] lg:w-[130px] lg:h-[130px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" flex space-y-4 md:space-y-0 sm:top-2 relative xl:gap-x-[0px] lg:gap-x-[0px] sm:gap-x-[0px] md:gap-x-[20px]  gap-x-[0px] justify-center mx-[80px] 2xl:mx-[420px] xl:mx-[250px]  xl:space-y-0 items-baseline lg:mx-[200px] md:mx-[280px] sm:mx-[170px]">
        {thirdRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[332px] xl:h-[230px] w-[101px] h-[70px] sm:h-[100px] sm:w-[130px] md:h-[100px] md:w-[150px] lg:w-[230px] lg:h-[130px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <p className="text-[10px] text-center font-rosario xl:text-[15px] text-[#666] mb-3 sm:mb-0 pb-8 sm:pb-5  relative top-4 ">
        Copyrights-https://www.chem-lab.be/en-gb
      </p>
    </div>
  );
}

export default WaterCatelogue;

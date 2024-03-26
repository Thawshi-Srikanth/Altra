import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function LactosanCatelogue({ catelogue }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, 8);

  const finalRow = catelogue.slice(8, 9);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="xl:space-y-[40px] lg:space-y-[40px] space-y-[20px] md:space-y-[30px] sm:space-y-[30px] relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[170px] md:mb-0">
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
      <div className="grid grid-cols-4 xl:gap-x-[0px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[70px]  sm:mx-[10px]  mx-[15px] lg:mx-auto  xl:space-y-20 lg:space-y-12 space-y-5  sm:space-y-8  md:space-y-12 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[230px] xl:h-[280px] w-[88px] h-[107px] sm:h-[140px] sm:w-[130px] md:h-[180px] md:w-[140px] lg:w-[200px] lg:h-[240px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" md:space-y-12 sm:top-2 relative flex xl:gap-x-[0px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[15px] justify-center mx-auto xl:mx-[130px]  xl:space-y-12 items-baseline">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[338px] xl:h-[280px] w-[130px] h-[107px] sm:h-[140px] sm:w-[180px] md:h-[180px] md:w-[200px] lg:w-[270px] lg:h-[240px] border border-blue-gray-400 rounded-lg "
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

export default LactosanCatelogue;

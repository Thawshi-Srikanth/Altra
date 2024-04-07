import React, { useEffect, useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function LactosanCatelogue({ catelogue, copyright }) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, catelogue.length - 3);

  const finalRow = catelogue.slice(catelogue.length - 3);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="xl:space-y-[0px] lg:space-y-[40px] space-y-[20px] md:space-y-[30px] sm:space-y-[30px] relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[170px] md:mb-0">
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
      <div className="grid grid-cols-5 xl:gap-x-[20px] lg:gap-x-[0px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  2xl:mx-[130px] xl:mx-[50px] md:mx-[30px]  sm:mx-[20px]  mx-[15px] lg:mx-auto  xl:space-y-10 lg:space-y-10 space-y-5  sm:space-y-8  md:space-y-12 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[230px] xl:h-[230px] w-[68px] h-[68px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] lg:w-[180px] lg:h-[180px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" md:mx-[200px] md:space-y-0 sm:top-0 relative flex xl:gap-x-[0px] lg:gap-x-[0px] sm:gap-x-[0px] md:gap-x-[0px]  gap-x-[0px] justify-center 2xl:mx-[390px]  xl:mx-[250px]  xl:space-y-10 items-baseline lg:mx-[200px] sm:mx-[130px] mx-[60px]">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[230px] xl:h-[230px] w-[68px] h-[68px]  sm:h-[110px] sm:w-[110px] md:h-[150px] md:w-[150px] lg:w-[180px] lg:h-[180px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <p className="text-[10px] text-center font-rosario xl:text-[15px] text-[#666] mb-3 sm:mb-0 pb-8 sm:pb-5  relative top-4 xl:top-9 ">
        {copyright}
      </p>
    </div>
  );
}

export default LactosanCatelogue;

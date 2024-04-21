import React, { useEffect, useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function FranceCatelogue({ catelogue, copyright }) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);


  
  const firstRow = catelogue.slice(0, catelogue.length - 2);
  const finalRow = catelogue.slice(catelogue.length - 2);

  const mobile = catelogue.slice(0, catelogue.length - 1);
  const mobileTwo = catelogue.slice(catelogue.length - 1);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="xl:space-y-[0px] lg:space-y-[0px] space-y-[0px] md:space-y-[0px] sm:space-y-[0px] relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[30px] md:mb-0  ">
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
      <div className="grid grid-cols-4 sm:grid-cols-5 xl:gap-x-[20px] lg:gap-x-[0px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[30px]  sm:mx-[20px]  mx-[15px] lg:mx-auto  xl:space-y-10 lg:space-y-10   sm:space-y-8  md:space-y-10 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="sm:block hidden  xl:w-[230px] xl:h-[230px] w-[69px] h-[69px] sm:h-[100px] sm:w-[100px] md:h-[140px] md:w-[140px] lg:w-[180px] lg:h-[180px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="flex sm:grid-cols-5 xl:gap-x-[20px] lg:gap-x-[0px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[250px]  sm:mx-[220px]  mx-[15px] lg:mx- xl:space-y-10 lg:space-y-10   sm:space-y-8 md:space-y-10 items-baseline">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center md:mx-4 lg:mx-0 xl:mx-3"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="sm:block hidden  xl:w-[230px] xl:h-[230px] w-[86px] h-[86px] sm:h-[90px] sm:w-[120px] md:h-[130px] md:w-[150px] lg:w-[180px] lg:h-[190px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>

      {/* mobile */}
      <div className="space-y-4 grid grid-cols-4   gap-x-[10px] justify-center   mx-[15px]    items-baseline bottom-0 relative top-0">
        {mobile.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="sm:hidden  xl:w-[230px] xl:h-[230px] w-[86px] h-[86px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[140px] lg:w-[180px] lg:h-[190px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="flex  relative top-4 gap-x-[10px] justify-center    mx-[15px] lg:mx-auto  space-y-5 items-baseline">
        {mobileTwo.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="sm:hidden  w-[86px] h-[86px]   border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="  relative sm:bottom-[110px]    md:bottom-[100px]  lg:bottom-0 sm:h-[50px] md:h-full">
        {" "}
        <p className=" text-[12px] text-center font-rosario lg:text-[15px] text-[#666]  relative top-7 sm:top-0 mb-10 sm:mb-0   ">
          {copyright}
        </p>
      </div>
    </div>
  );
}

export default FranceCatelogue;

import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function FranceCatelogue({ catelogue }) {
console.log('✌️catelogue  --->', catelogue );
  
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const firstRow = catelogue.slice(0, catelogue.length-2 );
  const finalRow = catelogue.slice(catelogue.length - 2,);
  
  const mobile = catelogue.slice(0, catelogue.length-1);
  const mobileTwo = catelogue.slice(catelogue.length - 1,);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="xl:space-y-[0px] lg:space-y-[40px] space-y-[0px] md:space-y-[30px] sm:space-y-[30px] relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[170px] md:mb-0">
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
      <div className="grid grid-cols-4 sm:grid-cols-5 xl:gap-x-[20px] lg:gap-x-[0px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[30px]  sm:mx-[20px]  mx-[15px] lg:mx-auto  xl:space-y-10 lg:space-y-10   sm:space-y-8  md:space-y-12 items-baseline">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="sm:block hidden  xl:w-[230px] xl:h-[230px] w-[69px] h-[69px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[140px] lg:w-[180px] lg:h-[190px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="flex sm:grid-cols-5 xl:gap-x-[20px] lg:gap-x-[0px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[30px]  sm:mx-[20px]  mx-[15px] lg:mx-auto  xl:space-y-10 lg:space-y-10   sm:space-y-8  md:space-y-12 items-baseline">
        {finalRow.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="sm:block hidden  xl:w-[230px] xl:h-[230px] w-[86px] h-[86px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[140px] lg:w-[180px] lg:h-[190px] border border-blue-gray-400 rounded-lg "
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

      <p className="text-[10px] text-center font-rosario xl:text-[15px] text-[#666] mb-3 sm:mb-0 pb-8 sm:pb-5  relative top-6 xl:top-9  ">
        Copyrights- https://aperainst.com/
      </p>
    </div>
  );
}

export default FranceCatelogue;

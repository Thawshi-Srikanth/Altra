import React, { useState } from 'react'
import ImagePopup from '../../components/ImagePopup';

function MegazymeCatelogue({ catelogue,copyright }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);




  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="overflow-hidden xl:space-y-[0px] lg:space-y-[40px] space-y-[20px] md:space-y-[30px] sm:space-y-[30px] relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[170px] md:mb-0">
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
      <div className="grid grid-cols-3 xl:gap-x-[40px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center  xl:mx-[130px] md:mx-[70px]  sm:mx-[10px]  mx-[15px] lg:mx-[17px]  xl:space-y-10 lg:space-y-12 space-y-5  sm:space-y-8  md:space-y-12 items-baseline">
        {catelogue.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[400px] xl:h-[280px] w-[120px] h-[84px] sm:h-[140px] sm:w-[180px] md:h-[140px] md:w-[200px] lg:w-[300px] lg:h-[240px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=' '>
        {" "}
        <p className="text-[10px] sm:text-[15px] text-center font-rosario xl:text-[15px] text-[#666] mb-3 sm:mb-0 pb-8 sm:pb-5  relative top-4 xl:top-9 xl:mb-5 ">
        {copyright}
        </p>
      </div>
    </div>
  );}

export default MegazymeCatelogue
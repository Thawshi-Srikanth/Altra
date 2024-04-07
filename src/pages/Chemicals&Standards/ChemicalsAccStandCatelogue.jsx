import React, { useEffect, useState } from 'react'
import ImagePopup from '../../components/ImagePopup';

function ChemicalsAccStandcatelogue({ catelogue,copyright }) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);



  const firstRow = catelogue.slice(0, 4);

  const secondRow = catelogue.slice(4, 6);
  const thirdRow = catelogue.slice(6, 8);
  const fourthRow = catelogue.slice(8, );

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
      <div className="flex xl:gap-x-[40px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[15px] justify-center">
        {firstRow.map((image) => (
          <div
            className="cursor-pointer"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="xl:w-[230px] xl:h-[280px] w-[75px] h-[91px] sm:h-[140px] sm:w-[130px] md:h-[180px] md:w-[140px] lg:w-[200px] lg:h-[240px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="gap-x-[15px] flex xl:gap-x-[40px] lg:gap-x-[30px]  sm:gap-x-[30px] md:gap-x-[20px] justify-center">
        {secondRow.map((image) => (
          <div
            className="cursor-pointer"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="lg:w-[400px] lg:h-[200px] w-[168px]  xl:w-[513px] xl:h-[280px] sm:h-[140px] sm:w-[200px] md:h-[180px] md:w-[300px]  border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="gap-x-[15px] flex xl:gap-x-[40px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[20px] justify-center">
        {thirdRow.map((image) => (
          <div
            className="cursor-pointer"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className={`${
                image.id === 8
                  ? "xl:w-[332px]  lg:w-[240px] md:w-[180px]  sm:w-[100px]  w-[100px]"
                  : "xl:w-[633px]  lg:w-[400px] md:w-[300px]  sm:w-[200px] w-[207px]"
              }  lg:h-[200px] sm:h-[140px] xl:h-[280px] md:h-[200px]   h-[91px] border border-blue-gray-400 rounded-lg  object-cover`}
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="mx-3 sm:mx-0 gap-x-[15px] flex xl:gap-x-[40px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[20px] justify-center">
        {fourthRow.map((image) => (
          <div
            className="cursor-pointer"
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className={`${
                image.id === 9
                  ? "xl:w-[522px] lg:w-[400px] md:w-[300px] sm:w-[200px]   w-[171px]"
                  : image.id === 10
                  ? "xl:w-[332px] lg:w-[201px] md:w-[120px] sm:w-[100px]  w-[107px]"
                  : image.id === 10
                  ? "xl:w-[230px] lg:w-[100px] md:w-[100px] sm:w-[100px]  w-[75px]"
                  : ""
              }   xl:h-[280px] sm:h-[140px]   h-[91px] md:h-[150px]   lg:h-[200px] border border-blue-gray-400 rounded-lg  object-cover`}
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <p className="text-[10px] text-center font-rosario xl:text-[15px] text-[#666] mb-3 sm:mb-0 pb-3 sm:pb-0">
        {copyright}
      </p>
    </div>
  );
}

export default ChemicalsAccStandcatelogue
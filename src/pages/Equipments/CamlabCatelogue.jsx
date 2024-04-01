import React, { useState } from "react";
import ImagePopup from "../../components/ImagePopup";

function CamlabCatelogue({ catelogue, catelogueHorizontal }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);

  const horizontal1 = catelogueHorizontal.slice(0, 3);
  const vertical1 = catelogue.slice(0, 4);

  const horizontal2 = catelogueHorizontal.slice(3, 6);
  const vertical2 = catelogue.slice(4, 8);

  const horizontal3 = catelogueHorizontal.slice(6, 9);
  const vertical3 = catelogue.slice(7, 11);

  const horizontal4 = catelogueHorizontal.slice(
    9,
    catelogueHorizontal.length -2
  );
  const horizontal5 = catelogueHorizontal.slice(24);

  const vertical4 = catelogue.slice(11, 13);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };
  return (
    <div className="  relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[200px] md:mb-[0px] lg:mb-[0px] xl:mb-[0px] xl:space-y-10 sm:space-y-7 md:space-y-6 space-y-4 mb-10">
      {imagepopUp ? (
        <div className="">
          <ImagePopup
            imageId={popupId}
            catelogueId={catelogue.id}
            catelogue={catelogue}
            catelogueHorizontal={catelogueHorizontal}
            onClose={handleClick}
          />
        </div>
      ) : (
        ""
      )}
      <div className=" grid grid-cols-3 xl:gap-x-[0px] lg:gap-x-[20px] sm:gap-x-[0px] md:gap-x-[0px]  gap-x-[10px] justify-center  2xl:mx-[160px] md:mx-[100px]  sm:mx-[0px]  mx-[12px] lg:mx-[20px]  xl:space-y-[0px] lg:space-y-20 space-y-5  sm:space-y-8  md:space-y-10 items-baseline">
        {horizontal1.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[333px] xl:h-[280px]  w-[121px] h-[101px] sm:h-[110px] sm:w-[120px] md:h-[170px] md:w-[190px] lg:w-[280px] lg:h-[200px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-4 xl:gap-x-[0px] lg:gap-x-[0px]  sm:gap-x-[30px] md:gap-x-[40px]  gap-x-[10px] justify-center  2xl:mx-[140px]  xl:mx-[70px] md:mx-[10px]  sm:mx-[60px]  mx-[7px] lg:mx-[10px]  xl:space-y-20 lg:space-y-10 space-y-6  sm:space-y-8  md:space-y-10 items-baseline relative xl:bottom-10 bottom-4 sm:bottom-[20px]">
        {vertical1.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[230px] xl:h-[335px]  w-[84px] h-[121px] sm:h-[90px] sm:w-[120px] md:h-[150px] md:w-[180px] lg:w-[200px] lg:h-[235px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-3 xl:space-x-[30px] lg:gap-x-[20px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  xl:mx-[0px] md:mx-[70px]  sm:mx-[15px]  mx-[12px] lg:mx-[20px]  xl:space-y-[0px] lg:space-y-20 space-y-5  sm:space-y-8  md:space-y-10 items-baseline">
        {horizontal2.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[333px] xl:h-[280px]  w-[121px] h-[101px] sm:h-[110px] sm:w-[120px] md:h-[170px] md:w-[190px] lg:w-[280px] lg:h-[200px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-4 xl:gap-x-[0px] lg:gap-x-[0px]  sm:gap-x-[30px] md:gap-x-[40px]  gap-x-[10px] justify-center  2xl:mx-[140px]  xl:mx-[70px]  md:mx-[10px]  sm:mx-[60px]  mx-[7px] lg:mx-[10px]  xl:space-y-20 lg:space-y-10 space-y-6  sm:space-y-8  md:space-y-10 items-baseline relative xl:bottom-10 bottom-4 sm:bottom-[20px]">
        {vertical2.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[230px] xl:h-[335px]  w-[84px] h-[121px] sm:h-[90px] sm:w-[120px] md:h-[150px] md:w-[180px] lg:w-[200px] lg:h-[235px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-3 xl:space-x-[30px] lg:gap-x-[20px] sm:gap-x-[30px] md:gap-x-[20px]  gap-x-[10px] justify-center  xl:mx-[0px] md:mx-[70px]  sm:mx-[15px]  mx-[12px] lg:mx-[20px]  xl:space-y-[0px] lg:space-y-20 space-y-5  sm:space-y-8  md:space-y-10 items-baseline">
        {horizontal3.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[333px] xl:h-[280px]  w-[121px] h-[101px] sm:h-[110px] sm:w-[120px] md:h-[170px] md:w-[190px] lg:w-[280px] lg:h-[200px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-4 xl:gap-x-[0px] lg:gap-x-[0px]  sm:gap-x-[30px] md:gap-x-[40px]  gap-x-[10px] justify-center  2xl:mx-[140px]  xl:mx-[70px]  md:mx-[10px]  sm:mx-[60px]  mx-[7px] lg:mx-[10px]  xl:space-y-20 lg:space-y-10 space-y-6  sm:space-y-8  md:space-y-10 items-baseline relative xl:bottom-10 bottom-4 sm:bottom-[20px]">
        {vertical3.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[230px] xl:h-[335px]  w-[84px] h-[121px] sm:h-[90px] sm:w-[120px] md:h-[150px] md:w-[180px] lg:w-[200px] lg:h-[235px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-3 xl:gap-x-[0px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center 2xl:mx-[140px]  xl:mx-[10px] md:mx-[120px]  sm:mx-[60px]  mx-[7px] lg:mx-[90px]  xl:space-y-20 lg:space-y-10 space-y-6  sm:space-y-8  md:space-y-10 items-baseline relative xl:bottom-10 bottom-4 sm:bottom-[20px]">
        {horizontal4.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[333px] xl:h-[280px]  w-[121px] h-[101px] sm:h-[110px] sm:w-[120px] md:h-[170px] md:w-[190px] lg:w-[280px] lg:h-[200px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-2 xl:gap-x-[0px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center  2xl:mx-[340px]  xl:mx-[220px]  md:mx-[230px]  sm:mx-[60px]  mx-[70px] lg:mx-[90px]  xl:space-y-20 lg:space-y-10 space-y-6  sm:space-y-8  md:space-y-10 items-baseline relative xl:bottom-10 bottom-4 sm:bottom-[20px]">
        {horizontal5.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[333px] xl:h-[280px]  w-[121px] h-[101px] sm:h-[110px] sm:w-[120px] md:h-[170px] md:w-[190px] lg:w-[280px] lg:h-[200px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-2 xl:gap-x-[0px] lg:gap-x-[10px] sm:gap-x-[30px] md:gap-x-[0px]  gap-x-[10px] justify-center  2xl:mx-[440px] xl:mx-[330px] md:mx-[240px]  sm:mx-[60px]  mx-[107px] lg:mx-[90px]  xl:space-y-20 lg:space-y-10 space-y-6  sm:space-y-8  md:space-y-10 items-baseline relative xl:bottom-10 bottom-4 sm:bottom-[20px]">
        {vertical4.map((image) => (
          <div
            className="cursor-pointer justify-center mx-auto "
            key={image.id}
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className="  text-nowarap xl:w-[230px] xl:h-[335px]  w-[84px] h-[121px] sm:h-[90px] sm:w-[120px] md:h-[150px] md:w-[180px] lg:w-[200px] lg:h-[235px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <p className=" text-[12px] text-center font-rosario lg:text-[15px] text-[#666]  relative  top-4  ">
        Copyrights- https://aperainst.com/
      </p>
    </div>
  );
}

export default CamlabCatelogue;

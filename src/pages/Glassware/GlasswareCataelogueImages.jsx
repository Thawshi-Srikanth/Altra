import React, { useState } from "react";
import ImagePopup from "./../../components/ImagePopup";

function GlasswareCataelogueImages({ catelogue }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);
  const [fixed, setfixedImage] = useState(false);
  const [forceblur, setForceblur] = useState(false);
  const dekstopSimilarSize = catelogue.slice(0, 25);
  const secondRaw = catelogue.slice(25, 28);
  const secondRawMob = catelogue.slice(25, 31);
  const secondRawTwo = catelogue.slice(28, 32);
  const thirdTawRaw = catelogue.slice(32);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
    setForceblur(!forceblur);
  };

  return (
    <div className="xl:mx-4 2xl:mx-0 mx-2 sm:mx-0">
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
      <div className="grid sm:grid-cols-5  items-baseline justify-center mx-auto lg:space-y-9 md:space-y-6 sm:space-y-6 md:mx-[40px]  lg:mx-auto -y-2 2xl:space-y-[60px]">
        {dekstopSimilarSize.map((image) => (
          <div
            key={catelogue.id}
            className="mx-auto  justify-center sm:block hidden "
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className={`border ${
                [1, 2, 3, 4, 5].includes(image.id)
                  ? "  border-none "
                  : "border-blue-gray-400 "
              }  rounded  xl:w-[228px] 2xl:w-[248px] xl:h-[335px] lg:w-[170px] lg:h-[270px] sm:w-[100px] sm:h-[150px]  md:w-[120px] md:h-[170px] object-center justify-center mx-auto lg:rounded-lg cursor-pointer`}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 sm:hidden  items-baseline justify-center mx-auto space-y-5 ">
        {dekstopSimilarSize.map(
          (image) =>
            ![5, 10, 14, 19, 23].includes(image.id) && (
              <div
                key={catelogue.id}
                className="mx-auto  justify-center "
                onClick={() => handleClick(image.id)}
              >
                <img
                  src={image.Catlogueimage}
                  className={`border ${
                    [1, 2, 3, 4].includes(image.id)
                      ? "  border-none rounded-sm"
                      : "border-blue-gray-400 "
                  }    object-center justify-center mx-auto rounded-lg cursor-pointer w-[81px] h-[120px]`}
                />
              </div>
            )
        )}
      </div>
      <div className="grid sm:grid-cols-3 lg:space-y-9  sm:space-y-6 items-baseline justify-center 2xl:gap-x-0   xl:gap-x-[40px] xl:px-[80px] lg:px-[20px] md:px-[80px]">
        {" "}
        {secondRaw.map((image) => (
          <div
            key={catelogue.id}
            className="mx-auto  justify-center sm:block hidden "
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className={` xl:w-[389px] xl:h-[335px] sm:w-[189px] sm:h-[145px] md:w-[189px] md:h-[145px] lg:w-[289px] lg:h-[235px] object-center justify-center mx-auto rounded-lg  border border-blue-gray-400 cursor-pointer`}
            />
          </div>
        ))}
      </div>{" "}
      <div className="grid grid-cols-3 sm:hidden  items-baseline justify-center mx-auto space-y-5 px-1">
        {secondRawMob.map((image) => (
          <div
            key={catelogue.id}
            className="mx-auto  justify-center mx-1"
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className={`border ${
                [27, 28, 29].includes(image.id)
                  ? " h-[100px] relative  left-5  "
                  : "h-[101px]"
              }  ${image.id === 29 ? "w-[40px]" : ""} ${
                image.id === 28 || image.id === 27
                  ? "relative ml-[12px] w-[100px]"
                  : ""
              } ${
                image.id === 27 && "relative ml-[-9px]"
              } border-blue-gray-400 object-center justify-center mx-auto rounded-lg cursor-pointer  `}
            />
          </div>
        ))}
      </div>
      <div
        className={`2xl:space-y-[60px]  flex lg:space-y-9  sm:space-y-6 items-baseline justify-center  xl:gap-x-[90px] 2xl:gap-x-0 lg:px-[20px]`}
      >
        {secondRawTwo.map((image) => (
          <div
            key={catelogue.id}
            className="mx-auto  justify-center sm:block hidden "
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className={`cursor-pointer ${
                image.id === 29 || image.id === 30
                  ? "xl:w-[125px] lg:h-[235px]  relative xl:right-[60px] 2xl:right-[50px] lg:right-[20px]  md:right-[50px] sm:right-[10px]"
                  : "xl:w-[342px] 2xl:w-[389px]  lg:w-[289px] lg:h-[235px]  sm:w-[189px] relative "
              } z-0  xl:h-[335px] sm:h-[145px] object-center justify-center mx-auto rounded-lg  border border-blue-gray-400 ${
                image.id === 27 &&
                "relative 2xl:left-[40px] xl:left-[62px] lg:left-[-4px]  md:left-[55px]"
              } ${
                image.id === 30 &&
                "relative 2xl:right-[10] xl:right-[70px] lg:right-[10px]  md:right-[50px]"
              }  ${
                image.id === 28 &&
                "relative lg:right-[25px] xl:right-0 sm:right-[18px] md:right-[2px]"
              } `}
            />
            {/* <img
              src={image.Catlogueimage}
              className={` ${
                image.id === 29 || image.id === 30
                  ? "xl:w-[125px] relative xl:right-[50px] "
                  : "xl:w-[389px] relative "
              } xl:h-[335px] object-center justify-center mx-auto rounded-lg  border border-blue-gray-400`}
            /> */}
          </div>
        ))}
      </div>
      <div className="2xl:space-y-[60px] flex lg:space-y-9 sm:space-y-6 items-baseline justify-center  xl:mx-[345px]   2xl:mx-[400px] lg:mx-[280px] md:mx-[273px] sm:mx-[200px] sm:mb-[150px] md:mb-[30px] lg:mb-0 ">
        {" "}
        {thirdTawRaw.map((image) => (
          <div
            key={catelogue.id}
            className="mx-auto  justify-center sm:block hidden "
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className={`border ${
                [288].includes(image.id)
                  ? "  border-none "
                  : "border-blue-gray-400 "
              } xl:w-[242px] xl:h-[335px] sm:h-[135px] sm:w-[100px] lg:h-[235px] lg:w-[192px] object-center justify-center mx-auto rounded-lg   cursor-pointer`}
            />
          </div>
        ))}
      </div>
      <div className="gap-x-[14px] sm:hidden flex space-y-5 items-baseline justify-center mx-[0px] mb-[30px]">
        {" "}
        {thirdTawRaw.map((image) => (
          <div
            key={catelogue.id}
            className="  justify-center "
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className={`border h-[120px] w-[87px] object-center border-blue-gray-400 justify-center mx-auto rounded-lg   cursor-pointer`}
            />
          </div>
        ))}
      </div>
      <p className="text-[14px] text-center font-rosario xl:text-[15px] text-[#666] mb-5  md:top-4 lg:top-7 xl:mt-0 relative sm:bottom-[130px] md:bottom-0 xl:top-9">
        Copyrights- Catalog Method Fume Hood
      </p>
    </div>
  );
}

export default GlasswareCataelogueImages;

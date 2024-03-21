import React, { useState } from "react";
import ImagePopup from "./../../components/ImagePopup";

function GlasswareCataelogueImages({ catelogue }) {
  const [imagepopUp, setImagePopup] = useState(false);
  const [popupId, setPopupId] = useState(null);
  const [fixed, setfixedImage] = useState(false);
  const dekstopSimilarSize = catelogue.slice(0, 25);
  const secondRaw = catelogue.slice(25, 31);
  const thirdTawRaw = catelogue.slice(33);

  const handleClick = (id) => {
    setImagePopup(!imagepopUp);
    setPopupId(id);
  };

  return (
    <div>
      {imagepopUp ? (
        <div>
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
      <div className="grid sm:grid-cols-5  items-baseline justify-center mx-auto xl:space-y-9">
        {dekstopSimilarSize.map((image) => (
          <div
            key={catelogue.id}
            className="mx-auto  justify-center "
            onClick={() => handleClick(image.id)}
          >
            <img
              src={image.Catlogueimage}
              className={`border ${
                [1, 2, 3, 4, 5].includes(image.id)
                  ? "  border-none "
                  : "border-blue-gray-400 "
              } xl:w-[228px] xl:h-[335px] object-center justify-center mx-auto rounded-lg `}
            />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 xl:space-y-9 items-baseline justify-center xl:gap-x-0 xl:px-[80px]">
        {" "}
        {secondRaw.map((image) => (
          <div key={catelogue.id} className="mx-auto  justify-center  ">
            <img
              src={image.Catlogueimage}
              className={`border ${
                [288].includes(image.id)
                  ? "  border-none "
                  : "border-blue-gray-400 "
              } xl:w-[389px] xl:h-[335px] object-center justify-center mx-auto rounded-lg `}
            />
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 xl:space-y-9 items-baseline justify-center xl:gap-x-0 xl:px-[460px]">
        {" "}
        {thirdTawRaw.map((image) => (
          <div key={catelogue.id} className="mx-auto  justify-center  ">
            <img
              src={image.Catlogueimage}
              className={`border ${
                [288].includes(image.id)
                  ? "  border-none "
                  : "border-blue-gray-400 "
              } xl:w-[242px] xl:h-[335px] object-center justify-center mx-auto rounded-lg  `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlasswareCataelogueImages;

import React, { useRef } from "react";
import { X } from "lucide-react";
function ImagePopup({ imageId, catelogue, catelogueHorizontal, onClose }) {



  const filteredCatelogue =
    catelogue.length > 0
      ? catelogue.filter((image) => image.id === imageId)
      : [];

  // Filter catelogueHorizontal array if it has elements
  const filteredCatelogueHorizontal =
    catelogueHorizontal&&catelogueHorizontal.length > 0
      ? catelogueHorizontal.filter((image) => image.id === imageId)
      : [];

  // Concatenate the filtered arrays
  const popUpImageGlassWare = filteredCatelogue.concat(
    filteredCatelogueHorizontal
  );

  const popUpRef = useRef();

  const onCloseImage = (e) => {
    if (popUpRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      onClick={onCloseImage}
      ref={popUpRef}
      className="overflow-hidden z-50 fixed  bg-opacity-30 bg-blue-gray-200 backdrop-blur-sm inset-0  justify-center items-center overflow-y-auto flex flex-col "
    >
      <div
        className="h-9 overflow-y-hidden absolute md:bottom-[390px] sm:bottom-[340px] sm:left-[70px] md:left-[200px] lg:left-[320px] 2xl:left-0 lg:top-9 lg:bottom-[620px] xl:bottom-0 sm:ml-[350px] hover:scale-125 ml-[200px] top-[170px] sm:top-0  xl:ml-[490px] 2xl:ml-[960px] xl:top-[120px] cursor-pointer "
        onClick={onClose}
      >
        <X size={30} className="overflow-y-hidden relative top-3 " />
      </div>
      {popUpImageGlassWare.map((image) => (
        <div
          className="bg-white xl:rounded-xl flex overflow-hidden"
          key={image.id}
        >
          <img
            src={image.Catlogueimage}
            className=" justify-center mx-auto lg:w-[350px] lg:h-[300px] w-[220px] h-[200px] overflow-hidden "
          />
        </div>
      ))}
    </div>
  );
}

export default ImagePopup;

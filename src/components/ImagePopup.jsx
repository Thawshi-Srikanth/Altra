import React, { useRef } from "react";
import { X } from "lucide-react";
function ImagePopup({
  imageId,
  catelogue,

  onClose,
}) {
  const popUpImageGlassWare = catelogue.filter((image) => image.id === imageId);

  const popUpRef = useRef();

  const onCloseImage = (e) => {

    if (popUpRef.current=== e.target) {
  
   onClose()
    }
  };

  return (
    <div
      onClick={onCloseImage}
      ref={popUpRef}
      className=" z-50 fixed  bg-opacity-30 bg-blue-gray-200 backdrop-blur-sm inset-0  justify-center items-center overflow-y-auto flex flex-col "
    >
      <div
        className="absolute md:bottom-[390px] sm:bottom-[340px] sm:left-[70px] md:left-[200px] lg:left-[320px] 2xl:left-0 lg:top-9 lg:bottom-[620px] sm:ml-[350px] hover:scale-125 ml-[200px] top-[260px] sm:top-0 xl:ml-[800px] 2xl:ml-[960px] xl:top-[60px] cursor-pointer "
        onClick={onClose}
      >
        <X size={30} />
      </div>
      {popUpImageGlassWare.map((image) => (
        <div className="bg-white xl:rounded-xl flex" key={image.id}>
          <img
            src={image.Catlogueimage}
            className=" justify-center mx-auto lg:w-[400px] lg:h-[500px] w-[220px] h-[300px] "
          />
        </div>
      ))}
    </div>
  );
}

export default ImagePopup;

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
      className="fixed  bg-opacity-30 bg-blue-gray-200 backdrop-blur-sm inset-0  justify-center items-center overflow-y-auto flex flex-col "
    >
      <div className="absolute  xl:bottom-[620px] xl:ml-[350px] hover:scale-125 " onClick={onClose}>
        <X  size={30}/>
      </div>
      {popUpImageGlassWare.map((image) => (
        <div className="bg-white xl:rounded-xl flex" key={image.id}>
          <img
            src={image.Catlogueimage}
            className=" justify-center mx-auto lg:w-[400px] lg:h-[500px] "
          />
        </div>
      ))}
    </div>
  );
}

export default ImagePopup;

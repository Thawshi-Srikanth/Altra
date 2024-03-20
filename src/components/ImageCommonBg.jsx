import React from "react";

function ImageCommonBg({ img, mobImg }) {
  return (
    <div>
      <img src={img} className="w-full xl:h-[580px] sm:block hidden" />
      <img
        src={mobImg}
        className="w-full xl:h-[580px] sm:hidden object-cover relative top-5"
      />
    </div>
  );
}

export default ImageCommonBg;

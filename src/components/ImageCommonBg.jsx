import React from "react";

function ImageCommonBg({ img, mobImg }) {
  return (
    <div>
      <img
        src={img}
        className="w-full xl:h-[580px] object-cover relative top-5 sm:top-0"
      />
      {/* <img
        src={mobImg}
        className="w-full xl:h-[580px] sm:hidden object-cover relative top-5"
      /> */}
    </div>
  );
}

export default ImageCommonBg;

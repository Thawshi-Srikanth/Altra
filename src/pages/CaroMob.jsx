import React from "react";

function CaroMob({ src, alt, height }) {
  return (
    <div className=" h-[60px] sm:hidden ">
      <img
        src={src}
        alt={alt}
        className={`${height!== null ? `h-[40px]` : ""} `}
      />
    </div>
  );
}

export default CaroMob;

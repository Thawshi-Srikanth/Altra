import React from "react";
import brands from "../assets/data/brands";

function Brands() {
  return (
    <div className="overflow-x-hidden">
      <p className="lg:text-[69px] font-rosario text-white  text-center lg:mt-[60px] font-bold">
        Our trusted brands
      </p>
      <div className=" lg:mt-[30px] flex lg:gap-[40px] md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
        {brands.map((brand) => (
          <div key={brand.id} className="flex lg:h-[120px]  ">
            <img src={brand.img} alt={brand.alt} className=" " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;

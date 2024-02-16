import React from "react";
import brands from "../assets/data/brands";

function Brands() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <p className="md:text-[35px] text-[25px] xl:text-[69px] lg:text-[50px] font-rosario text-white  text-center lg:mt-[60px] md:mt-[30px] mt-[20px] font-bold">
        Our trusted brands
      </p>
      <div className="bg-white opacity-70 lg:h-[150px] ">
        {" "}
        <div className=" lg:mt-[30px] flex lg:gap-[40px] gap-[10px] md:gap-[90px] relative md:top-[1px] top-[10px] md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex lg:h-[120px]  md:h-[50px] h-[50px] mb-[20px] md:mb-0 relative lg:top-[13px]"
            >
              <img src={brand.img} alt={brand.alt} className=" " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;

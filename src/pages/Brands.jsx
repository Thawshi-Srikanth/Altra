import React from "react";
import brands from "../assets/data/brands";

function Brands() {
  return (
    <div className="overscroll-x-auto ">
      <p className="md:text-[35px] text-[25px] xl:text-[69px] lg:text-[50px] sm:text-[30px] font-rosario text-white  text-center lg:mt-[60px] md:mt-[30px] mt-[20px]  font-bold">
        Our trusted brands
      </p>
      <div className="bg-white  opacity-90 lg:h-[150px] md:h-[90px]  sm:h-[80px] sm:mt-[30px] md:mt-[30px] mt-[20px] h-[60px] ">
        {" "}
        
        <div className="  lg:mt-[30px]  flex lg:gap-[40px] gap-[10px] md:gap-[90px]  sm:gap-[80px] md:top-[10px] top-[5px]  justify-start [&_li]:mx-8 [&_img]:max-w-96 animate-infinite-scroll ">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="object-cover flex lg:h-[120px]  md:h-[70px] h-[50px] mb-[20px] md:mb-0 relative lg:top-[13px]  md:top-[6px]  xl:full  xl:mt-[2px] "
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

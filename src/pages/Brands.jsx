import React, { memo } from "react";
import brands from "../assets/data/brands";
import CaroMob from "./CaroMob";

const MemoRizedBrands = memo(function Brands() {
  const filterBrand=[19]
  const mobBrand=brands.filter((brand)=>!filterBrand.includes(brand.id))
  return (
    <div className=" w-full overscroll-x-auto xl:mt-[-30px]">
      <p className="md:text-[35px] text-[25px] xl:text-[69px] lg:text-[50px] sm:text-[30px] font-rosario text-white  text-center lg:mt-[60px] md:mt-[30px] mt-[20px]  font-bold xl:mt-[190px]">
        Our trusted brands
      </p>
      <div className="xl:scale-110 bg-[#FFFFFF] sm:block hidden lg:h-[155px] md:h-[130px] sm:h-[110px] sm:mt-[30px] md:mt-[30px] mt-[20px] h-[60px] opacity-80">
        <div className="xl:scale-125 lg:mt-[30px] flex lg:gap-[50px] gap-[20px] md:gap-[50px] xl:gap-[90px] sm:gap-[80px] md:top-[10px] top-[5px] justify-start [&_li]:mx-8 [&_img]:max-w-96 animate-infinite-scroll scroll-smooth">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="object-contain flex lg:h-[120px] md:h-[120px]  sm:h-[100px] h-[50px] mb-[20px] md:mb-0 relative lg:top-[13px] md:top-[6px] xl:full xl:mt-[2px]"
            >
              <img src={brand.img} alt={brand.alt} className="opacity-100 " />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FFFFFF] opacity-80">
        {" "}
        <div className="mx-auto flex  items-center gap-[24px]  sm:hidden   relative   top-[4px]    [&_img]:max-w-sm  animate-infinite-scrollMob scroll-smooth">
          {mobBrand.map((brand) => (
            <div key={brand.id} className=" flex  relative    ">
              <CaroMob src={brand.img} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MemoRizedBrands;

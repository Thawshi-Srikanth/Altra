import React, { memo } from "react";
import clients from "../assets/data/clients";
import clientsclientsLineTwo from "../assets/data/clientsLineTwo";
import CaroMob from "./CaroMob";

const MemoRizedClientele=memo(function Clientele() {
  return (
    <div className={` sm:mt-[30px]  w-full overscroll-x-auto xl:pb-[120px] lg:pb-[150px] md:pb-[60px]  relative bottom-[130px] md:bottom-0  sm:bottom-[330px]  xl:mt-[120px]    md:mt-[100px]`}>
      <p className="md:mt-[50px] sm:text-[30px]  md:text-[35px] text-[25px]  lg:pt-[40px] lg:text-[40px] 2xl:text-[69px] xl:text-[60px] font-rosario text-white  text-center xl:mt-[60px] font-bold">
        Clientele
      </p>
      <div className="  bg-[#FFFFFF] opacity-80 lg:h-[190px] xl:h-[170px] md:h-[100px] sm:h-[80px] h-[50px] relative mt-[30px] md:mt-0">
        {" "}
        <div className=" flex-row flex-nowrap xl:gap-[60px] lg:gap-[100px]  gap-[10px] md:gap-[60px]  sm:gap-[50px] lg:mt-[30px] md:mt-[20px] sm:mt-[20px] flex md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scrollClientle scroll-smooth">
          {clients.map((brand) => (
            <div
              key={brand.id}
              className="md:top-[0px]  sm:top-[0px] top-[0px] flex lg:h-[190px] xl:h-[170px] lg:top-[0px]  xl:top-[0px] md:h-[100px] sm:h-[80px]  relative "
            >
              <img src={brand.img} alt={brand.alt} className="sm:block hidden object-contain" />
              <CaroMob src={brand.img} alt={brand.alt} height={brand.id}/>
            </div>
            
          ))}
        </div>
      </div>
      <div className="bg-[#FFFFFF] opacity-80 flex-nowrap   lg:h-[190px] xl:h-[170px] sm:h-[80px] md:h-[100px] h-[50px] relative mt-[21px] md:mt-0 ">
      <div className=" flex-row flex-nowrap  xl:gap-[60px] lg:gap-[100px]  gap-[10px] md:gap-[60px]  sm:gap-[50px] lg:mt-[30px] md:mt-[20px] sm:mt-[20px] flex md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scrollClientle-reverse scroll-smooth">
          {clientsclientsLineTwo.map((brand) => (
            <div
              key={brand.id}
              className="md:top-[0px]  sm:top-[0px] top-[0px] flex lg:h-[190px] xl:h-[170px] w-full lg:top-[0px]  xl:top-[0px] md:h-[100px] sm:h-[80px]  relative "
            >
              <img src={brand.img} alt={brand.alt} className="sm:block hidden " />
              <CaroMob src={brand.img} alt={brand.alt} height={brand.id}/>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
})

export default MemoRizedClientele;

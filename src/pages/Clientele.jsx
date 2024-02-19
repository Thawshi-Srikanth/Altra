import React from "react";
import clients from "../assets/data/clients";
import clientsclientsLineTwo from "../assets/data/clientsLineTwo";

function Clientele() {
  return (
    <div className="overflow-x-hidden lg:pb-[80px] ">
      <p className="lg:pt-[40px] lg:text-[40px] 2xl:text-[69px] xl:text-[60px] font-rosario text-white  text-center xl:mt-[60px] font-bold">
        Clientele
      </p>
      <div className="bg-white opacity-80 lg:h-[152px] xl:h-[200px]">
        {" "}
        <div className="xl:gap-[150px] lg:gap-[100px] lg:mt-[30px] flex  md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
          {clients.map((brand) => (
            <div
              key={brand.id}
              className="flex lg:h-[120px] xl:h-[140px] lg:top-[17px] xl:top-[24px] relative "
            >
              <img src={brand.img} alt={brand.alt} className=" " />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white opacity-80  xl:h-[200px]">
        <div className="xl:gap-[150px] lg:gap-[100px] items-center lg:mt-[30px] flex  md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse ">
          {clientsclientsLineTwo.map((brand) => (
            <div
              key={brand.id}
              className="flex lg:h-[120px] xl:h-[140px]  xl:top-[24px] relative "
            >
              <img src={brand.img} alt={brand.alt} className=" relative " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clientele;

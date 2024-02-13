import React from "react";
import brands from "../assets/data/brands";

function Clientele() {
  return (
    <div className="overflow-x-hidden lg:pb-[80px] ">
      <p className="lg:pt-[40px] lg:text-[40px] 2xl:text-[69px] xl:text-[60px] font-rosario text-white  text-center xl:mt-[60px] font-bold">
        Clientele
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

export default Clientele;

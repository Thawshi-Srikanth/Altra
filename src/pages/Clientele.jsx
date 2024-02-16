import React from "react";
import clients from "../assets/data/clients";
import clientsclientsLineTwo from "../assets/data/clientsLineTwo";

function Clientele() {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledClients = shuffleArray([...clientsclientsLineTwo]);

  return (
    <div className="overflow-x-hidden lg:pb-[80px] ">
      <p className="lg:pt-[40px] lg:text-[40px] 2xl:text-[69px] xl:text-[60px] font-rosario text-white  text-center xl:mt-[60px] font-bold">
        Clientele
      </p>
      <div className="bg-white opacity-80 lg:h-[152px]">
        {" "}
        <div className=" lg:mt-[30px] flex lg:gap-[40px] md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
          {clients.map((brand) => (
            <div key={brand.id} className="flex lg:h-[120px] lg:top-[17px] relative ">
              <img src={brand.img} alt={brand.alt} className=" " />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white opacity-80 lg:h-[152px]">
        <div className="items-center lg:mt-[30px] flex lg:gap-[40px] md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse ">
          {shuffledClients.map((brand) => (
            <div key={brand.id} className="flex lg:h-[120px] lg:top-[17px] relative ">
              <img src={brand.img} alt={brand.alt} className=" relative " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clientele;

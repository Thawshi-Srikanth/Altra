import React from "react";
import flask from "../assets/images/HeroImages/flask.png";
import bgVideo from "../assets/video/bgVideo.mp4";
function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b via-whit via-red-50  from-white   lg:h-[500px] lg:grid lg:grid-cols-3 lg:px-[90px]   ">
      <div className="lg:col-span-2 lg:mt-[60px] ">
        <div className="lg:flex lg:flex-row 2xl:text-[69px] xl:text-[60px] font-rosario lg:gap-[20px]">
          <span className="text-[#e18655] font-bold">Elevate Your</span>
          <span className="font-bold text-transparent [-webkit-text-stroke:2px_#000] ">
            Science
          </span>
        </div>
        <div className="2xl:text-[69px] xl:text-[61px] font-rosario lg:gap-[20px] lg:flex lg:mt-[-37px] ">
          <span className="font-bold   text-transparent    [-webkit-text-stroke:2px_#000]">
            Unleash
          </span>
          <span className="text-[#e18655] font-bold lg:ml-[10px] ">
            Laboratory Excellence!
          </span>
        </div>
        <div className="lg:mt-[px]">
          {" "}
          <button className="lg:bg-[#ff8a3a] lg:h-[80px] lg:w-[280px] lg:text-30px lg:rounded-[20px] lg:mt-[30px] lg:text-[30px] text-white font-rosario">
            Inquire Now
          </button>
          <p className="lg:ml-[86px] font-rosario text-[20px]  text-[#e18655]">
            See Products
          </p>
        </div>
      </div>
      <div className="">
        <img src={flask} alt="flask" className="lg:ml-[12px] lg:mt-[-40px] " />
      </div>
    </div>
  );
}

export default HeroSection;

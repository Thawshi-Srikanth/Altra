import React from "react";
import flask from "../assets/images/HeroImages/flask.png";
import bgVideo from "../assets/video/bgVideo.mp4";
function HeroSection() {
  return (
    <div className="relative   [background:linear-gradient(180deg,_#fff_70.9%,_rgba(2,_2,_1,_0))]  lg:h-[500px] lg:grid lg:grid-cols-3 lg:px-[90px]  bg-white ">
      <div className="lg:col-span-2 lg:mt-[60px] ">
        <div className="lg:flex lg:flex-row 2xl:text-[69px] xl:text-[60px] lg:text-[40px] font-rosario  lg:gap-[20px]">
          <span className="text-[#e18655] font-bold">Elevate Your</span>
          <span className="font-bold text-transparent [-webkit-text-stroke:2px_#000] ">
            Science
          </span>
        </div>
        <div className="2xl:text-[69px] xl:text-[61px] lg:text-[40px] font-rosario lg:gap-[20px] xl:gap-[20px] lg:flex xl:mt-[-37px] lg:mt-[-20px]">
          <span className="font-bold   text-transparent    [-webkit-text-stroke:2px_#000]">
            Unleash
          </span>
          <span className="text-[#e18655] font-bold lg:ml-[10px] ">
            Laboratory Excellence!
          </span>
        </div>
        <div className="lg:mt-[px] lg:ml-[-35px] xl:ml-0 ">
          {" "}
          <button className="lg:bg-[#ff8a3a] lg:h-[80px] lg:w-[280px]  lg:rounded-[20px] xl:mt-[30px] lg:mt-[10px] lg:text-[30px] text-white font-rosario shadow-[15px_15px_30px_rgba(0,_0,_0,_0.25)] lg:scale-75 xl:scale-100">
            Inquire Now
          </button>
          <p className="lg:ml-[86px] font-rosario text-[20px]  text-[#e18655] lg:mt-[20px] ">
            See Products
          </p>
        </div>
      </div>
      <div className="">
        <img src={flask} alt="flask" className="lg:ml-[12px] xl:mt-[-40px] " />
      </div>
    </div>
  );
}

export default HeroSection;

import React from "react";
import flask from "../assets/images/HeroImages/flask.png";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div className="relative pb-[15px]  lg:pb-0  [background:linear-gradient(180deg,_#fff_70.9%,_rgba(2,_2,_1,_0))]  lg:h-[500px] grid grid-cols-3 lg:px-[90px]  bg-white ">
      <div className="col-span-2 lg:mt-[60px] mt-[20px] md:mt-[60px] relative xl:left-[35px] left-[30px] ">
        <div className="lg:flex lg:flex-row 2xl:text-[69px] xl:text-[60px] lg:text-[40px] text-[20px] md:text-[40px] sm:text-[38px] font-rosario  lg:gap-[20px]">
          <span className="text-[#e18655] font-bold">Elevate Your</span>
          <span className="font-bold text-transparent [-webkit-text-stroke:0.5px_#000] lg:[-webkit-text-stroke:2px_#000] relative left-[8px] lg:left-0">
            Science
          </span>
        </div>
        <div className="md:text-[30px] sm:text-[28px] md:mt-[-12px]   2xl:text-[69px] xl:text-[61px] lg:text-[40px] font-rosario lg:gap-[20px] xl:gap-[20px] lg:flex xl:mt-[-37px] lg:mt-[-20px]">
          <span className="font-bold   text-transparent  [-webkit-text-stroke:0.5px_#000]  lg:[-webkit-text-stroke:2px_#000]">
            Unleash
          </span>
          <span className="text-[#e18655] font-bold lg:ml-[10px] relative left-[8px] lg:left-0 text-nowrap">
            Laboratory Excellence!
          </span>
        </div>
        <div className="lg:mt-[px] lg:ml-[-35px] xl:ml-0 mt-[2px] md:mt-0 ">
          {" "}
          <Link to="/contact">
            <button className="bg-[#ff8a3a] lg:h-[80px] lg:w-[280px] w-[72px] h-[23px] md:w-[100px]  md:mt-[12px] md:h-[30px] rounded-[4.78px] md:rounded-[6px] xl:mt-[30px] lg:mt-[10px] lg:text-[30px] text-[8px] md:text-[12px] sm:text-[9px]  text-white font-rosario shadow-[15px_15px_30px_rgba(0,_0,_0,_0.25)] lg:scale-75 xl:scale-100 hover:text-black font-bold transition duration-300  ">
              Inquire Now
            </button>
          </Link>
          <p className="pb-[20px]  sm:pb-0 lg:ml-[86px] text-[9px] md:text-[12px] sm:text-[9px] font-rosario lg:text-[20px]  text-[#e18655] lg:mt-[20px] md:mt-[10px] mt-[5px] relative left-[14px] sm:ml-[-5px] md:left-0 lg:left-0">
            <Link to="/products " className="">See Products</Link>
          </p>
        </div>
      </div>
      <div className="relative xl:left-[35px] 2xl:left-0 bottom-[10px] lg:bottom-0 md:mt-[-13px] lg:mt-0 mt-[-5px]">
        <img src={flask} alt="flask" className="lg:ml-[12px] xl:mt-[-40px] " />
      </div>
    </div>
  );
}

export default HeroSection;

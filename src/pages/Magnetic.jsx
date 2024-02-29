import React from "react";
import magnet from "../assets/images/Magnet/magnet.png";

import magnetFact from "../assets/images/Magnet/FactSm.png";
function Magnetic() {
  return (
    <div className=" w-full pr-[10px] md:pr-6 flex xl:mt-[160px] lg:mt-[100px] md:mt-[90px] lg:pb-6 mt-[50px] relative md:right-[10px] lg:right-0  md:scale-100 right-[4px] 2xl:top-[240px]  xl:top-[310px] lg:left-[-23px] xl:left-0">
      <div className="md:pt-[10px] rounded-[12px] lg:pt-0 md:left-[60px] md:w-11/12  md:h-[140px] md:rounded-[15px] lg:left-0 lg:mt-[18px] lg:px-[20px] xl:ml-[90px] 2xl:ml-[180px]  lg:ml-[60px] relative lg:rounded-[45px] md:bg-white md:bg-opacity-80 lg:h-[200px] xl:h-[250px] xl:w-[1255px] 2xl:w-[1250px]  lg:w-[1200px] magWidth w-[335px] sm:w-[500px] sm:h-[120px] h-[80px]  ">
        
        <img src={magnetFact} alt="" className="md:hidden relative bottom-[40px]  sm:bottom-[-16px]  sm:left-[160px]    sm:scale-125 mx-auto justify-center flex ml-[-5px] sm:ml-0" />

        <div>
          {" "}
          <p className="md:block sm:text-[30px] hidden text-[12px] lg:text-[30px] md:text-[20px] xl:text-[40px]   font-rosario text-[#fd5901] font-bold lg:px-[10px] lg:ml-[20px]  md:ml-[20px] lg:pt-[20px] ml-[12px]">
            Magnetic Magic
          </p>
        </div>

        <div className="md:block hidden ">
          {" "}
          <p className=" xl:leading-[40px] font-rosario magP text-[10px]   md:leading-[30px] md:mt-[-10px] md:pt-[10px] lg:pt-0 lg:text-[28px] xl:text-[33px] lg:mt-[10px] lg:px-[10px]  lg:ml-[20px] md:ml-[20px] ml-[-15px] xl:mt-[0px] scale-95 md:scale-100 relative xl:left-[1px]">
            Stirrers with magnetic bars can stir liquids without a physical
            <br />
            connection. The magnetic bar is placed in the liquid, and a magnetic
            <br />
            field from the equipment rotates it—no stirring rods needed
          </p>
        </div>
      </div>
      <div className="md:block hidden magnet absolute  md:right-[-30px] right-[-37px] lg:right-[-40px] 2xl:right-[40px] xl:mt-[-125px] 2xl:mt-[-120px] lg:mt-[-120px] md:mt-[-95px] mt-[-60px] ">
        <img
          src={magnet}
          alt="magnet"
          className="xl:h-[450px] xl:w-[450px] lg:h-[400px] lg:w-[400px] md:w-[280px] w-[135px] md:h-full h-[178px] scale-75 md:scale-100"
        />
      </div>
    </div>
  );
}

export default Magnetic;

import React from "react";
import ph from "../assets/images/Phmeter/ph.png";
import phDetail from "../assets/images/Phmeter/Fact.png";

function PhScale() {
  return (
    <div className="bottom-[150px] md:bottom-0 flex xl:mt-[210px] lg:mt-[120px] md:mt-[50px] lg:pb-6  relative left-[17px] md:left-0  ">
      <div className=" phwidth rounded-[12px]  lg:mt-[18px] lg:px-[20px] xl:ml-[90px] 2xl:ml-[180px]  lg:ml-[60px] relative lg:rounded-[45px] md:rounded-[11.6px] md:bg-white md:bg-opacity-90 lg:h-[200px] xl:h-[250px] xl:w-[1255px] 2xl:w-[1250px]  lg:w-[1050px]  md:ml-[50px]    md:h-[140px] h-[80px] w-[335px] flex-col">
        <div className="md:top-[-5px] relative lg:top-[10px] top-[10px]  left-[-8px] md:left-0">
          {" "}

          <img src={phDetail} alt="" className="md:hidden scale-105  px-5  sm:px-3  sm:scale-125 sm:w-[450px] sm:h-[110px] sm:left-[100px] relative "/>
          <p className="sm:text-[30px] md:block hidden text-[12px] md:text-[25px]  lg:text-[30px] xl:text-[40px]  font-rosario text-[#fd5901] font-bold lg:px-[10px] lg:ml-[20px] lg:pt-[20px] md:ml-[20px] md:pt-[20px] ">
            PH Scale
          </p>
        </div>

        <div className="md:block hidden lg:top-[10px]  top-[10px] relative left-[10px] md:left-0 md:">
          {" "}
          <p className="md:bottom-[15px] text-nowrap relative lg:bottom-0 phwidth text-[9px] md:ml-[20px]  font-rosario lg:text-[27px] ] xl:text-[33px] lg:mt-[10px] lg:px-[10px]  lg:ml-[20px] xl:mt-[0px]  lg:leading-[120%]">
            The PH scale goes from 1 to 14, with a PH of 1 being the most
            acidic, and
            <br /> 14 being the most alkaline.
          </p>
        </div>
      </div>
      {/* <div className=" absolute right-[0]    md:mr-0  lg:right-[-40px] 2xl:right-[190px] mt-[-35px]  xl:mt-[-155px] 2xl:mt-[-155px] lg:mt-[-120px] md:right-0 md:mt-[-45px]">
        <img
          src={ph}
          alt="magnet"
          className="xl:h-[450px] xl:w:h-[450px] lg:h-[400px] lg:w:h-[400px]  md:h-[200px] w-[124px] h-[124px]"
        />
      </div> */}{" "}
      <div className="md:block hidden right-[0]  md:mr-0  absolute lg:right-[-40px] 2xl:right-[40px] xl:mt-[-155px] mt-[-35px] 2xl:mt-[-155px] lg:mt-[-120px] md:right-[px] md:mt-[-45px]">
        <img
          src={ph}
          alt="magnet"
          className="xl:h-[450px]  lg:h-[400px] md:h-[200px]  h-[124px] scale-95 md:scale-100"
        />
      </div>
    </div>
  );
}

export default PhScale;

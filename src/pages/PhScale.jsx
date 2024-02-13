import React from "react";
import ph from "../assets/images/Phmeter/ph.png"
function PhScale() {
  return (
    <div className="flex xl:mt-[160px] lg:mt-[100px] lg:pb-6 ">
      <div className="  lg:mt-[18px] lg:px-[20px] xl:ml-[90px] 2xl:ml-[180px]  lg:ml-[60px] relative lg:rounded-[45px] bg-white bg-opacity-80 lg:h-[200px] xl:h-[250px] xl:w-[1255px] 2xl:w-[1250px]  lg:w-[900px]">
        <div className="lg:top-[10px] relative">
          {" "}
          <p className="lg:text-[30px] xl:text-[40px]  font-rosario text-[#fd5901] font-bold lg:px-[10px] lg:ml-[20px] lg:pt-[20px] ">
            PH Scale
          </p>
        </div>

        <div className="lg:top-[10px] relative">
          {" "}
          <p className="font-rosario lg:text-[22px] xl:text-[33px] lg:mt-[10px] lg:px-[10px]  lg:ml-[20px] xl:mt-[0px]">
            The PH scale goes from 1 to 14, with a PH of 1 being the most
            acidic, and<br/> 14 being the most alkaline.
          </p>
        </div>
      </div>
      <div className="  absolute lg:right-[-40px] 2xl:right-[40px] xl:mt-[-155px] 2xl:mt-[-155px] lg:mt-[-120px] ">
        <img
          src={ph}
          alt="magnet"
          className="xl:h-[450px] xl:w:h-[450px] lg:h-[400px] lg:w:h-[400px]"
        />
      </div>
    </div>
  );
}

export default PhScale;

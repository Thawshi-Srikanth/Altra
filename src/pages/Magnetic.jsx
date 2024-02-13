import React from "react";
import magnet from "../assets/images/Magnet/magnet.png";
function Magnetic() {
  return (
    <div className="flex xl:mt-[160px] lg:mt-[100px] lg:pb-6 ">
      <div className=" lg:mt-[18px] lg:px-[20px] xl:ml-[90px] 2xl:ml-[180px]  lg:ml-[60px] relative lg:rounded-[45px] bg-white bg-opacity-80 lg:h-[200px] xl:h-[250px] xl:w-[1255px] 2xl:w-[1250px]  lg:w-[900px]">
        <div>
          {" "}
          <p className="lg:text-[30px] xl:text-[40px]  font-rosario text-[#fd5901] font-bold lg:px-[10px] lg:ml-[20px] lg:pt-[20px] ">
            Magnetic Magic
          </p>
        </div>

        <div className="">
          {" "}
          <p className="font-rosario lg:text-[22px] xl:text-[33px] lg:mt-[10px] lg:px-[10px]  lg:ml-[20px] xl:mt-[0px]">
            Stirrers with magnetic bars can stir liquids without a physical
            <br />
            connection. The magnetic bar is placed in the liquid, and a magnetic
            <br />
            field from the equipment rotates it—no stirring rods needed
          </p>
        </div>
      </div>
      <div className="  absolute lg:right-[-40px] 2xl:right-[40px] xl:mt-[-125px] 2xl:mt-[-120px] lg:mt-[-120px] ">
        <img
          src={magnet}
          alt="magnet"
          className="xl:h-[450px] xl:w:h-[450px] lg:h-[400px] lg:w:h-[400px]"
        />
      </div>
    </div>
  );
}

export default Magnetic;

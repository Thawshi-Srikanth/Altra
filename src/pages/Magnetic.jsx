import React from "react";
import magnet from "../assets/images/Magnet/magnet.png";
function Magnetic() {
  return (
    <div className="flex xl:mt-[160px] lg:mt-[100px] md:mt-[130px] lg:pb-6 mt-[50px]">
      <div className="md:pt-[10px] pt-[10px] rounded-[12px] lg:pt-0 md:left-[50px] md:w-[740px] md:h-[140px] md:rounded-[15px] lg:left-0 lg:mt-[18px] lg:px-[20px] xl:ml-[90px] 2xl:ml-[180px]  lg:ml-[60px] relative lg:rounded-[45px] bg-white bg-opacity-90 lg:h-[200px] xl:h-[250px] xl:w-[1255px] 2xl:w-[1250px]  lg:w-[900px] w-[385px] h-[87px] left-[20px] ">
        <div>
          {" "}
          <p className="text-[15px] lg:text-[30px] md:text-[20px] xl:text-[40px]  font-rosario text-[#fd5901] font-bold lg:px-[10px] lg:ml-[20px]  md:ml-[30px] lg:pt-[20px] ml-[20px]">
            Magnetic Magic
          </p>
        </div>

        <div className="">
          {" "}
          <p className="xl:leading-[40px] text-[10px] font-rosario md:text-[19px] md:mt-[-10px] md:pt-[10px] lg:pt-0 lg:text-[22px] xl:text-[33px] lg:mt-[10px] lg:px-[10px]  lg:ml-[20px] md:ml-[30px] ml-[20px] xl:mt-[0px]">
            Stirrers with magnetic bars can stir liquids without a physical
            <br />
            connection. The magnetic bar is placed in the liquid, and a magnetic
            <br />
            field from the equipment rotates it—no stirring rods needed
          </p>
        </div>
      </div>
      <div className="  absolute md:right-[-40px] right-[-24px] lg:right-[-40px] 2xl:right-[40px] xl:mt-[-125px] 2xl:mt-[-120px] lg:mt-[-120px] md:mt-[-115px] mt-[-45px]">
        <img
          src={magnet}
          alt="magnet"
          className="xl:h-[450px] xl:w-[450px] lg:h-[400px] lg:w-[400px] md:w-[300px] w-[155px] h-[155px]"
        />
      </div>
    </div>
  );
}

export default Magnetic;
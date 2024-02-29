import React from "react";

function SingleCommitment({ img, topic, commit }) {
  return (
    <div className="bg-white  md:rounded-[20px] rounded-[6.99px] flex flex-row lg:w-[400px] lg:h-[200px] md:h-[150px] md:w-[260px] sm:h-[100px] sm:w-[200px] h-[87px] w-11/12 min-w-[160px]  bg-opacity-80 mx-auto justify-center ">
   <div className="flex mx-auto justify-center items-center ">
        <img
          src={img}
          alt={topic}
          className="lg:h-[130px] lg:w-[130px] lg:ml-[20px] md:ml-[30px]  sm:ml-[30px] ml-[13px] md:w-[90px] md:h-[90px] sm:w-[90px] sm:h-[90px] h-[60px] w-[60px] md:mx-[10px] lg:mx-0 scale-110 sm:scale-100 md:scale-100"
        />
      </div>

      <div className="justify-center md:pr-[15px]  sm:pr-[15px] text-center flex flex-col mx-auto lg:mt-[]  font-rosario text-dimgray relative sm:left-[11px] md:left-0">
        <p className="lg:text-[26px] md:text-[15px] sm:text-[15px] text-[12px] text-nowrap mx-4 md:mx-0  ">{topic}</p>
        <p className="lg:text-[18px] md:text-[12px] sm:text-[12px] text-[9px] ">{commit}</p>
      </div>
    </div>
  );
}

export default SingleCommitment;

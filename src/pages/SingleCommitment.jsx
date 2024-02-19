import React from "react";

function SingleCommitment({ img, topic, commit }) {
  return (
    <div className="md:rounded-[20px] rounded-[6.99px] flex flex-row lg:w-[400px] lg:h-[200px] md:h-[150px] md:w-[260px] h-[87px] w-[170px] bg-white bg-opacity-90 mx-auto justify-center">
      <div className="flex mx-auto justify-center items-center">
        <img
          src={img}
          alt={topic}
          className="lg:h-[130px] lg:w-[130px] lg:ml-[20px] md:ml-[30px] ml-[13px] md:w-[90px] md:h-[90px] h-[60px] w-[60px] md:mx-[10px] lg:mx-0 scale-125 md:scale-100"
        />
      </div>

      <div className="justify-center md:pr-[15px] text-center flex flex-col mx-auto lg:mt-[]  font-rosario text-dimgray">
        <p className="lg:text-[26px] md:text-[15px] text-[13px] text-nowrap mx-4 md:mx-0">{topic}</p>
        <p className="lg:text-[18px] md:text-[12px] text-[10px] ">{commit}</p>
      </div>
    </div>
  );
}

export default SingleCommitment;

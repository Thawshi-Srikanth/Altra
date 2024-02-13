import React from "react";

function SingleCommitment({ img, topic, commit }) {
  return (
    <div className="rounded-[20px] flex flex-row lg:w-[400px] lg:h-[200px] bg-white bg-opacity-80 mx-auto justify-center">
      <div className="flex mx-auto justify-center items-center">
        <img
          src={img}
          alt={topic}
          className="lg:h-[130px] lg:w-[130px] lg:ml-[20px]"
        />
      </div>

      <div className="justify-center lg:pr-[15px] text-center flex flex-col mx-auto lg:mt-[] font-rosario text-dimgray">
        <p className="lg:text-[26px]">{topic}</p>
        <p className="lg:text-[18px]">{commit}</p>
      </div>
    </div>
  );
}

export default SingleCommitment;

import React from "react";
import SingleCommitment from "./SingleCommitment";
import commit from "../assets/data/commit";

function Commitment() {
  return (
    <div className=" w-full px-1 md:px-0 xl:mt-[60px]  ">
      <p className="lg:pt-[60px] sm:text-[30px] text-[25px] md:mt-[30px] sm:mt-[50px] mt-[20px] md:text-[35px] text-center font-rosario xl:text-[69px] lg:text-[50px] font-bold text-white ">
        Our commitments to you
      </p>
      <div className=" md:gap-[37px]   md:mt-[30px] mt-[20px] grid grid-cols-2 lg:grid sm:grid-cols-3 2xl:gap-x-[130px] xl:gap-x-[130px] md:mx-auto justify-center xl:mt-[60px] xl:px-[130px] 2xl:px-[90px]  2xl:left-[-50px] lg:gap-y-[40px] md:gap-y-[10px]  ] gap-y-[20px] xl:ml-[-100px] 2xl:ml-0 lg:scale-75 xl:scale-100 lg:ml-[-110px] ml-[-15px]  lg:gap-x-[190px] md:scale-90  md:px-0 scale-95 relative left-[5px] md:left-0   xl:left-[-11px] ">
        {commit.map((commit) => (
          <SingleCommitment
            topic={commit.topic}
            img={commit.img}
            commit={commit.commit}
            key={commit.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Commitment;

import React from "react";
import SingleCommitment from "./SingleCommitment";
import commit from "../assets/data/commit";

function Commitment() {
  return (
    <div className=" ">
      <p className="lg:pt-[60px] text-[25px] md:mt-[30px] mt-[20px] md:text-[35px] text-center font-rosario xl:text-[69px] lg:text-[40px] font-bold text-white ">
        Our commitments to you
      </p>
      <div className="md:gap-[15px] md:mt-[30px] mt-[20px] grid grid-cols-2 lg:grid md:grid-cols-3 2xl:gap-4 xl:gap-x-[120px] md:mx-auto justify-center xl:mt-[60px] xl:px-[130px] lg:gap-y-[40px] md:gap-y-[20px]  ] gap-y-[20px] xl:ml-[-70px] 2xl:ml-0 lg:scale-75 xl:scale-100 lg:ml-[-110px] lg:gap-x-[190px] md:scale-90 px-[20px] md:px-0">
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

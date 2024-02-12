import React from "react";
import SingleCommitment from "./SingleCommitment";
import commit from "../assets/data/commit";

function Commitment() {
  return (
    <div className=" ">
      <p className="lg:pt-[60px] text-center font-rosario xl:text-[69px] lg:text-[40px] font-bold text-white ">
        Our commitments to you
      </p>
      <div className="lg:grid lg:grid-cols-3 2xl:gap-4 xl:gap-x-[120px] mx-auto justify-center xl:mt-[60px] xl:px-[130px] lg:gap-y-[40px] xl:ml-[-70px] 2xl:ml-0 lg:scale-75 xl:scale-100 lg:ml-[-110px] lg:gap-x-[190px]">
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

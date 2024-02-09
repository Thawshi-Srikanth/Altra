import React from "react";
import SingleCommitment from "./SingleCommitment";
import commit from "../assets/data/commit";

function Commitment() {
  return (
    <div className=" ">
      <p className="lg:pt-[60px] text-center font-rosario lg:text-[69px] font-bold text-white ">
        Our commitments to you
      </p>
      <div className="lg:grid lg:grid-cols-3 gap-4 mx-auto justify-center lg:mt-[60px] lg:px-[130px] lg:gap-y-[40px]">
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

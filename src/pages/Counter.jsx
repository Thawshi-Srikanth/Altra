import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Counter({ topic, end }) {
  const [countOn, setCounton] = useState(false);

  return (
    <ScrollTrigger
      className="w-full"
      onEnter={() => setCounton(true)}
      onExit={() => setCounton(false)}
    >
      {countOn && (
        <div className="text-[#ff8a3b] ">
          <div>
            {" "}
            <h1 className="text-[100px] text-center">
              <CountUp start={0} end={end} delay={0} duration={2} />+
            </h1>
            <p className="text-[40px] text-center"> {topic}</p>
          </div>
        </div>
      )}
    </ScrollTrigger>
  );
}

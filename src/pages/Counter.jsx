import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Counter() {
  const [countOn, setCounton] = useState(false);

  return (
    <ScrollTrigger
      className="w-full"
      onEnter={() => setCounton(true)}
      onExit={() => setCounton(false)}
    >
      {countOn && (
        <div className="text-[#ff8a3b] flex justify-evenly w-full relative bg-[#5B5B5B] xl:h-[300px] mx-auto items-center">
          <div>
            {" "}
            <h1 className="text-[100px] text-center">
              <CountUp start={0} end={100} delay={0} duration={2} />+
            </h1>
            <p className="text-[40px] text-center"> products</p>
          </div>
          <div>
            {" "}
            <h1 className="text-[100px] text-center">
              <CountUp start={0} end={15} delay={0} duration={2} />+
            </h1>
            <p className="text-[40px] text-center"> Successful Clients</p>
          </div>

          <div>
            <h1 className="text-[100px] text-center">
              <CountUp start={0} end={18} delay={0} duration={2} />+
            </h1>
            <p className="text-[40px] text-center"> Trusted Partners</p>
          </div>
        </div>
      )}
    </ScrollTrigger>
  );
}

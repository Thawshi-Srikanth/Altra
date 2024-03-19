import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Counter({ topic, end, id ,data}) {
  const [countOn, setCounton] = useState(false);

  return (
    <ScrollTrigger
      className="w-full"
      onEnter={() => setCounton(true)}
      onExit={() => setCounton(false)}
    >
      {countOn && (
        <div className="text-[#ff8a3B] z-0 overflow-hidden  ">
          <div className="sm:block hidden flex-row items-center justify-center  relative xl:bottom-[13px] bottom-[2px] sm:bottom-[3px] lg:bottom-[12px] countermd ">
            {" "}
            <h1 className=" xl:text-[100px] lg:text-[80px] md:text-[60px] sm:text-[30px] text-[15px] text-center font-bold font-inter whitespace-nowrap">
              <CountUp start={0} end={end} delay={0} duration={2} />+
            </h1>
            <p className=" xl:mt-[-20px]  lg:mt-[-16px] md:mt-[-14px] sm:mt-[-7px] mt-[-2px]  xl:text-[40px] lg:text-[30px] md:text-[20px] sm:text-[15px] text-[10px] text-center font-rosario ">
              {" "}
              {topic}
            </p>
          </div>

          {end!==10000 &&
          <div
            className={`  text-nowrap sm:hidden  relative   mx-auto justify-center flex flex-col `}
          >
            {" "}
            <h1 className="text-[45px] text-center font-bold font-inter whitespace-nowrap ">
              <CountUp start={0} end={end} delay={0} duration={2} />+
            </h1>{" "}
            <p className="mx-auto flex justify-center  text-[19px] text-center font-rosario ">
              {" "}
              {topic}
            </p>
          </div>}
        </div>
      )}
    </ScrollTrigger>
  );
}



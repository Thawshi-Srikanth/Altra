import React from "react";

function HeroText() {
  return (
    <div className=" w-full min-w-[320px] ">
      <div className="xl:scale-90 text-nowrap text-center font-rosario text-[22px] md:text-[35px] sm:text-[30px] lg:text-[50px] xl:text-[69px]  font-bold text-white lg:pt-[80px] ">
        <h1 className="text-nowrap">Decades of Excellence:</h1>
        <div className="lg:mt-[-20px] mt-[-10px] text-nowrap">
          Pioneering Laboratory Solutions
        </div>
      </div>
      <div className="xl:scale-90 md:text-[30px] sm:text-[25px] font-rosario lg:text-[25px] xl:text-[35px] 2xl:text-[37px] text-[14px] text-center lg:px-[60px] lg:pt-[20px] pt-[10px] scale-100 md:scale-100  ">
        <p className=" lg:block hidden  leading-[130%] ">
          Our laboratory equipment business has stood at the forefront of
          innovation,<br></br> providing cutting-edge solutions for scientific
          exploration. With a legacy of <br></br>reliability, precision, and
          customer satisfaction, we&apos;ve been the trusted partner for{" "}
          <br></br>
          <span className="">
            researchers, scientists, and institutions globally.{" "}
          </span>
          <br></br>Our commitment to advancing laboratory technology has shaped
          the landscape of scientific discovery. Join us on this enduring
          journey of excellence as we continue to redefine the boundaries of
          possibility in the world of laboratory equipment.
        </p>
        <p className="lg:hidden font-rosario ">
          Our laboratory equipment business has stood at the <br />
          forefront of innovation providing cutting-edge
          <br /> solutions for scientific exploration. With a legacy of
          <br /> reliability, precision, and customer satisfaction, we&apos;ve{" "}
          <br />
          been the trusted partner for{" "}
          <span className="">
            researchers, scientists,
            <br /> and institutions globally.
            <br />{" "}
          </span>
          Our commitment to advancing laboratory technology <br />
          has shaped the landscape of scientific discovery. Join <br />
          us on this enduring journey of excellence as we
          <br />
          continue to redefine the boundaries of possibility in <br />
          the world of laboratory equipment.
        </p>
      </div>
    </div>
  );
}

export default HeroText;

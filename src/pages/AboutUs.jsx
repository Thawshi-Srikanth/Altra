import React, { useEffect } from "react";
import aboutUs from "../assets/data/aboutUs";
import mission from "../assets/images/team/mission.png";
import vision from "../assets/images/team/vision.png";
const AboutUs =React.memo(function AboutUsComponent() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="mb-[-80px] ">
      <div className="container mx-auto px-5  sm:px-1 lg:px-2 xl:px-3 2xl:px-0">
        <div className="relative top-4">
          {" "}
          <p className="font-rosario font-bold  text-nowrap xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[25px] lg:top-1  sm:mt-10 lg:mt-0 relative mt-10 mx-2 sm:mx-0">
            <span className="text-transparent [-webkit-text-stroke:0.5px_#000] lg:[-webkit-text-stroke:2px_#000]">
              Emerging
            </span>
            <span className="text-[#FF8A3A] mx-3">in to the</span>
            <span className=" text-transparent [-webkit-text-stroke:0.5px_#000] lg:[-webkit-text-stroke:2px_#000]">
              {" "}
              industry
            </span>
          </p>
          <p className="text-justify font-medium font-rosario xl:text-[25px] lg:text-[19px] md:text-[17px] sm:text-[12px] text-[15] relative top-3 xl:top-0 mx-2 sm:mx-0 xl:top-5">
            Altra Scientific is a leading supplier of laboratory products,
            instrumentation, and consumables tailored for diverse scientific
            applications founded in 1978. Our commitment to delivering
            excellence in customer service, satisfaction, and product quality is
            the cornerstone of our operations. We have built a legacy of trust
            and reliability, positioning ourselves as a preferred choice in the
            scientific supply industry.
          </p>
        </div>

        {/* <div className="relative top-20">
          {aboutUs.map((info) => (
            <div key={info.id} className="space-y-10 mx-auto justify-center ">
              {info.history.map((detail) => (
                <div
                  key={detail.id}
                  className=" border border-[#FF8A3A]  rounded-[100px] xl:h-[100px] mx-1 sm:mx-0"
                >
                  <div className=" flex text-nowarap  font-rosario text-justify space-x-1 sm:space-x-6  items-baseline lg:mx-20 md:mx-[1px] p-3 ">
                    {" "}
                    <img
                      src={detail.id !== 6 ? Ellipse : EllipseGreen}
                      alt="altra scientific about us points"
                      className="xl:w-[40px]  xl:h-[40px] lg:w-[25px] lg:h-[25px] md:w-[30px] md:h-[30px] sm:w-[20px] sm:h-[20px] w-[19px] h-[19px] relative top-4 sm:top-0"
                    />
                    <div className="flex sm:space-x-6 space-x-3 pt-1 pb-1 px-2 sm:pt-0 sm:pb-0 sm:px-0">
                      {" "}
                      <p
                        className={`${
                          detail.id !== 6 ? "text-[#FF8A3A]" : "text-[#00AB11]"
                        }   text-nowrap xl:text-[50px] lg:text-[30px] md:text-[30px] sm:text-[25px] text-[23.46px] top-4 sm:top-0 relative`}
                      >
                        {detail.year}
                      </p>
                      <p className="2xl:text-[25px]  xl:text-[23px] lg:text-[19px] md:text-[17px] sm:text-[12px] text-[11.73px]  ">
                        {detail.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <p></p>
            </div>
          ))}
        </div> */}

        <div className="grid relative  top-5 sm:top-20 mx-2 sm:mx-0  space-y-10  ">
          <div className="sm:flex font-rosario sm:space-x-20 relative top-10 ">
            <div className=" ">
              {" "}
              <p className="font-bold  text-nowrap xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[25px]">
                <span className="text-[#FF8A3A]">Our</span>
                <span className="mx-3 text-transparent [-webkit-text-stroke:0.5px_#000] lg:[-webkit-text-stroke:2px_#000]">
                  Mission
                </span>
              </p>
              <p className="font-medium font-rosario 2xl:text-[25px]   xl:text-[23px] lg:text-[19px] md:text-[17px]  sm:text-[12px] text-[15]">
                As a company, our mission is to provide top-tier laboratory,
                delivering a seamless customer experience, and fostering
                enduring relationships built on trust and excellence. we aim to
                be the foremost choice in the industry by consistently exceeding
                the expectations of our clients.
              </p>
            </div>

            <img
              src={mission}
              alt="mission"
              className="xl:w-[626px] xl:h-[290px] lg:w-[400px] lg:h-[240px] md:w-[300px] md:h-[200px] sm:w-[220px] sm:h-[170px] w-[370px] h-[170px] mx-auto justify-center items-center relative top-3 sm:top-0"
            />
          </div>
          <div className=" grid sm:flex font-rosario sm:space-x-20 relative top-20 ">
            <img
              src={vision}
              alt="vision"
              className="order-2 flex-col sm:order-none xl:w-[626px] xl:h-[290px] lg:w-[400px] lg:h-[240px] md:w-[300px] md:h-[200px] sm:w-[220px] sm:h-[170px] w-[370px] h-[170px] top-3 sm:top-0 relative"
            />
            <div className="order-1 flex-col sm:order-none">
              <p className="sm:text-end font-bold text-nowrap xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[25px]">
                {" "}
                <span className="text-[#FF8A3A]">Our</span>
                <span className="mx-3 text-transparent [-webkit-text-stroke:0.5px_#000] lg:[-webkit-text-stroke:2px_#000]">
                  Vision
                </span>
              </p>
              <p className="text-justify sm:text-end font-medium font-rosario 2xl:text-[25px]  xl:text-[23px] lg:text-[19px] md:text-[17px] sm:text-[12px] text-[15] mx-auto">
                Our Vision at Altra Scientific is to continually innovate and
                lead in providing cutting edge scientific solutions. We aspire
                to redefine industry standards by offering a comprehensive range
                of state-of-the-art-products and unmatched customer support,
                ensuring our client’s success and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#363636] w-full text-white space-y-44 mt-48  relative h-full md:pb-40 sm:pb-52 pb-40  px-5  sm:px-1 lg:px-2 xl:px-3 2xl:px-0">
        {aboutUs.map((data) => (
          <div
            key={data.id}
            className="mx-2 container sm:mx-auto md:pt-28  sm:pt-10 "
          >
            {data.team.map((member) => (
              <div
                key={member.id}
                className={`sm:flex items-center pt-10  ${
                  member.id === 2 || member.id === 4
                    ? "sm:gap-x-10 "
                    : " sm:space-x-10"
                } `}
              >
                <img
                  src={member.img}
                  alt="team"
                  className={`sm:${
                    (member.id === 2 || member.id === 4) && " container order-2"
                  } sm:block hidden xl:w-[350px] xl:h-[350px] md:w-[280px] lg:h-[300px] lg:w-[300px] md:h-[280px] sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] `}
                />

                {/* mobile */}
                <div className="sm:hidden ">
                  <div className="flex space-x-2 mx-auto justify-start">
                    <img
                      src={member.img}
                      alt="team"
                      className={`  w-[100px] h-[100px] `}
                    />
                    <div className="relative top-3 ">
                      {" "}
                      <p
                        className={` sm:flex  text-transparent [-webkit-text-stroke:0.5px_#FFFFFF] lg:[-webkit-text-stroke:2px_#FFFFFF] font-rosario font-bold   xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[22px] text-[25px] text-wrap`}
                      >
                        {member.name}
                      </p>
                      <p
                        className={`text-[#FF8A3A] font-bold font-rosario xl:text-[45px] lg:text-[35px] md:text-[30px] sm:text-[20px] text-[20px] ${
                          (member.id === 2 || member.id === 4) &&
                          "relative sm:flex sm:justify-end text-nowrap"
                        }`}
                      >
                        {member.designation}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`font-medium font-rosario  text-[15px]  ${
                      member.id === 5 && "relative top-6 "
                    }  text-center px-1 min-w-[300px] relative right-2 top-4`}
                  >
                    {member.description}
                  </p>
                </div>

                {/* dekstop */}
                <div
                  className={`sm:${
                    (member.id === 2 || member.id === 4) &&
                    "container  sm:order-1  flex"
                  } mx-auto justify-center  sm:block hidden `}
                >
                  <p
                    className={`sm:${
                      (member.id === 2 || member.id === 4) &&
                      "relative sm:justify-end text-right"
                    }   text-transparent [-webkit-text-stroke:0.5px_#FFFFFF] lg:[-webkit-text-stroke:2px_#FFFFFF] font-rosario font-bold  text-nowrap xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[22px] text-[25px]`}
                  >
                    {member.name}
                  </p>

                  <p
                    className={`font-medium font-rosario xl:text-[25px] lg:text-[19px] md:text-[17px] sm:text-[13px] text-[15px] ${
                      (member.id === 2 || member.id === 4) &&
                      "relative sm:flex sm:text-end"
                    }     `}
                  >
                    {member.description}
                  </p>
                  <div className="sm:block hidden">
                    {" "}
                    <p
                      className={`text-[#FF8A3A] font-bold font-rosario xl:text-[45px] lg:text-[35px] md:text-[30px] sm:text-[20px] text-[25px] ${
                        (member.id === 2 || member.id === 4) &&
                        "relative sm:flex sm:justify-end  "
                      }`}
                    >
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
})
export default AboutUs;

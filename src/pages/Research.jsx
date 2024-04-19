import React, { Suspense, lazy, useCallback, useEffect, useState } from "react";
import research from "../assets/images/Research/Research.png";
import researchMob from "../assets/images/Research/ResearchMOb.png";
import bottom from "../assets/images/Research/bottom.png";
import researchVideo from "../assets/video/research.mp4";
import researchPoster from "../assets/images/Research/researchVideo.png";
import Loader from "../components/Loader";
import delayForDemo from "../components/Delay";

const Research = React.memo(function ResearchComponent() {
    const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const LazyVideo = lazy(() => {
    if (pageLoaded == true) {
      return import("./ResearchVideo");
    } else {
      setPageLoaded(true);
      return delayForDemo(import("./ResearchVideo"), 3500);
    }
  });

  return (
    <div className="xl:mb-[-80px] lg:mb-[-70px] md:mb-[-70px] ">
      <div>
        <Suspense fallback={<Loader />}>
          <LazyVideo/>
        </Suspense>

        <div className="sm:block hidden xl:bottom-60 lg:bottom-60 mdBottom   2xl:left-[770px]  xl:left-[630px] lg:left-[500px]   left-4 mx-auto justify-center  absolute ">
          <img
            src={research}
            className="sm:justify-end   object-cover 2xl:w-[689px] xl:w-[640px] xl:h-[190px] lg:w-[500px]  lg:h-[150px] md:w-[390px] sm:w-[300px] sm:h-[100px] w-[325px] h-[60px] mx-auto justify-center rounded-md relative xl:right-5 xl:top-4 2xl:top-20"
            alt="research"
          />
        </div>
        <div className="sm:hidden mobBottom   mx-auto justify-center  absolute flex">
          <img
            src={researchMob}
            className=" relative left-1 object-cover   w-[300px] h-[60px] mx-auto justify-center rounded-md"
            alt="research"
          />
        </div>
      </div>
      <div className="space-y-10    sm:top-[-40px] lg:top-10 relative 2xl:max-w-[1240px]  xl:max-w-[1040px]  lg:max-w-[900px] md:max-w-[700px] sm:max-w-[500px] max-w-[300px] mx-auto justify-center xl:p-10 2xl:p-0 bottom-3 ">
        {" "}
        <div className=" justify-center mx-auto">
          <p className="font-rosario font-bold text-nowrap xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[25px]">
            Research{" "}
            <span className="text-transparent [-webkit-text-stroke:0.5px_#000] lg:[-webkit-text-stroke:2px_#000]">
              {" "}
              Support
            </span>
          </p>
          <p className="font-medium font-rosario xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15]">
            We cater the specific demands of new and ongoing research prospects
            with tailor made analytical products on request, please feel free to
            reach out to us at
          </p>
          <a
            href="mailto:research@altrascietific.com "
            className="text-[#FF8A3A]  relative font-medium font-rosario  xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15]"
          >
            <span>
              {" "}
              research@altrascientific.com
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF8A3A]"></span>
            </span>
          </a>
        </div>
        <div className="max-w-[1240px] justify-center mx-auto pb-10 md:pb-20 relative   ">
          <p className="font-rosario font-bold text-nowrap xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[25px]">
            Research{" "}
            <span className="text-transparent [-webkit-text-stroke:0.5px_#000] lg:[-webkit-text-stroke:2px_#000]">
              Assistance
            </span>
          </p>
          <div></div>
          <p className="font-medium font-rosario xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15]">
            We are committed to support your research projects relating to
            sustainability and environment conservations by assisting with
            financial grants and resources depending on your project feel free
            to submit an Expression of Interest at
          </p>
          <a
            href="mailto:eoi.research@altrascientific.com"
            className="relative text-[#FF8A3A] font-medium font-rosario  xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15]"
          >
            <sapan>
              eoi.research@altrascientific.com
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF8A3A]"></span>
            </sapan>
          </a>
        </div>
      </div>

      <div>
        <img
          src={bottom}
          className="object-cover  w-full xl:h-[700px] lg:h-[600px] md:h-[400px] sm:h-[300px] h-[210px] relative "
          alt="research"
        />
      </div>
    </div>
  );
});
export default Research;

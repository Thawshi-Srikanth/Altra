import React from 'react'
import research from '../assets/images/Research/Research.png'
import bottom from '../assets/images/Research/bottom.png'
function Research() {
  return (
    <div className="xl:mb-[-80px] lg:mb-[-70px] md:mb-[-70px] ">
      <div>
        <img
          src={research}
          className="object-cover w-full xl:h-[700px] lg:h-[600px] md:h-[400px] sm:h-[300px] h-[170px] "
          alt="research"
        />
      </div>
      <div className="space-y-10 relative top-5 xl:max-w-[1240px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[500px] max-w-[300px] mx-auto justify-center ">
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
            href="mailto:research@altrascietific.com"
            className="text-[#FF8A3A] font-medium font-rosario  xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15]"
          >
            research@altrascietific.com
          </a>
        </div>
        <div className="max-w-[1240px] justify-center mx-auto pb-10">
          <p className="font-bold font-rosario text-nowrap xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[20px]">
            Research{" "}
            <span className="text-transparent [-webkit-text-stroke:0.5px_#000] lg:[-webkit-text-stroke:2px_#000]">
              Assistance
            </span>
          </p>
          <p className="font-medium font-rosario xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15]">
            We are committed to support your research projects relating to
            sustainability and environment conservations by assisting with
            financial grants and resources depending on your project feel free
            to submit an Expression of Interest at
          </p>
          <a
            href="mailto:eoi.research@altrascientific.com"
            className="text-[#FF8A3A] font-medium font-rosario  xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15]"
          >
            eoi.research@altrascientific.com
          </a>
        </div>
      </div>

      <div>
        <img
          src={bottom}
          className="object-cover w-full xl:h-[700px] lg:h-[600px] md:h-[400px] sm:h-[300px] h-[210px] relative "
          alt="research"
        />
      </div>
    </div>
  );
}

export default Research
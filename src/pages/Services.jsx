import React, { useEffect } from "react";
import bg from "../assets/images/Services/bg.png";
import bgMob from "../assets/images/Services/bgMob.png";
import { Link } from "react-router-dom";
import servicesImages from "../assets/data/servicesImages";


const Services=React.memo(function ServicesComponent() {
    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, []);

  return (
    <div className="md:mb-30 lg:mb-10 mb-10 space-y-10 sm:mb-60">
      {" "}
      <div className=" w-full relative ">
        <img
          src={bg}
          alt="bgimage"
          className="w-full h-full object-cover relative sm:block hidden "
        />
        <img
          src={bgMob}
          alt="bgimage"
          className="w-full h-full object-cover relative sm:hidden  top-[30px] "
        />
        <div className="flex absolute sm:gap-x-3 gap-x-2 lg:gap-x-10 xlBottom xl:bottom-[200px] lg:bottom-[165px] md:bottom-[135px] md:left-[70px] sm:bottom-[112px] bottom-[25px] xlBottomService xl:left-[160px] lg:left-[75px]  left-[79px] font-rosario lg:text-[25px] md:text-[16px] sm:text-[13px]  text-[9px] text-[#FF8A3B]  lg:scale-90 xl:scale-100 sm:scale-90 sm:left-[61px] mdbutton ">
          <Link to="/aboutus">
            <button className="lg:w-[200px] lg:h-[50px] sm:w-[90px] sm:h-[40px] w-[50px] h-[20px] bg-white sm:rounded-[10px] rounded-[3px]   hover:text-black font-bold transition duration-300 ">
              About Us
            </button>
          </Link>
          <Link to="/contact">
            <button className="lg:w-[200px] lg:h-[50px] sm:w-[90px] sm:h-[40px] w-[50px] h-[20px] bg-white sm:rounded-[10px] rounded-[3px] hover:text-black font-bold transition duration-300 ">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className=" 2xl:max-w-[1240px]  xl:max-w-[1040px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[500px] max-w-[333px] mx-auto justify-center relative top-0">
        <p className="text-nowarap font-bold xl:text-[50px] font-rosario lg:text-[40px] md:text-[30px] sm:text-[30px] text-[25px] text-center sm:text-start">
          <span className="text-transparent [-webkit-text-stroke:0.5px_#000] lg:[-webkit-text-stroke:2px_#000]">
            {" "}
            Our Services
          </span>
          <span className="text-[#FF8A3A]  mx-3">to the</span>
          <span className="text-transparent [-webkit-text-stroke:0.5px_#000] lg:[-webkit-text-stroke:2px_#000] ">
            industry
          </span>
        </p>
        <p className="text-justify  sm:text-start font-medium font-rosario xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[15]  relative mt-3">
          We provide technical services to all your laboratory equipment, our
          dedicated, highly trained and professional team is ready to provide
          services on request. <br />
          Reach out to us at our :
        </p>

        <div className=" font-medium font-rosario xl:text-[30px] lg:text-[25px] md:text-[25px] sm:text-[20px] text-[15]">
          <p>
            {" "}
            <a href="tel:+94772363221" className="">
              hotline :
              <span className="text-[#0094FF] relative">
                +94 77 236 3221
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0094FF]"></span>
              </span>
            </a>
          </p>
          <p className="">
            {" "}
            <a href="mailto:services@altrascientific.com" className="">
              email{" "}
              <span className="relative xl:left-[19px] left-[10px]">:</span>
              <span className="text-[#0094FF] relative xl:left-6 left-3">
                services@altrascientific.com
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0094FF]"></span>
              </span>
            </a>
          </p>
        </div>
      </div>
      <div className="sm:flex grid mx-auto justify-center relative top-0 space-y-10 sm:space-y-0 sm:right-7 2xl:right-0 xl:scale-95 2xl:scale-100 xl:right-6">
        {servicesImages.map((img) => (
          <div
            className="sm:space-x-10 space-y-3 justify-center mx-auto"
            key={img.id}
          >
            <p
              className={`font-rosario text-center text-[#FF8A3A] font-bold 2xl:text-[30px] xl:text-[25px] lg:text-[20px] md:text-[17px] sm:text-[15px] text-[20px] text-center ${
                img.id === 3 && "relative xl:left-4 2xl:left-"
              } `}
            >
              {img.text}
            </p>
            <img
              src={img.img}
              alt={img.text}
              className={`object-cover rounded-lg justify-center mx-auto 2xl:w-[440px] xl:w-[400px]  xl:h-[250px] w-[310px] h-[150px] lg:w-[320px] lg:h-[200px] md:w-[250px] md:h-[150px] sm:w-[200px] sm:h-[100px] `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
)
export default Services;

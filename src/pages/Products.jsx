import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import counterDetails from "../assets/data/counterDetails";
import productCategoryData from "../assets/data/productCategoryData";
import bg from "../assets/images/products/bg/bg.png";
import bgMob from "../assets/images/products/bg/bgMob.png";
import MemoRizedClientele from "./Clientele";
import MemoRizedClientele2 from "./ClienteleSm";
import Counter from "./Counter";
import ProductCategory from "./ProductCategory";


const Products=React.memo(function Products() {
  const [countOn, setCounton] = useState(false);

     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {" "}
      <div className="mb-[30px] sm:mb-0 overflow-hidden  flex-col items-center w-full overflow-x-hidden z-0  lg:top-[0px] relative lg:mb-[-80px] md:mb-[-80px] ">
        <div className=" w-full relative">
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
          <div className="xl:bottom-[180px] xlBottom flex absolute sm:gap-x-3 gap-x-2 lg:gap-x-10  lg:bottom-[145px]  sm:bottom-[112px] bottom-[20px]  xl:left-[150px] lg:left-[75px] left-[66px] font-rosario lg:text-[25px] md:text-[16px] sm:text-[13px]  text-[9px] text-[#FF8A3B]  lg:scale-90 xl:scale-100 sm:scale-90 sm:left-[69px] mdbutton">
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
        <div className="bg-[#5B5B5B]  ">
          {" "}
          <div className=" xl:scale-90 xl:h-[300px] lg:h-[180px]    md:h-[150px]  sm:h-[100px]  flex h-[200px]  w-full  sm:justify-evenly mx-auto items-center  relative top-[0px] pb-3 sm:pb-0 sm:top-0 sm:px-0 px-[30px]  sm:gap-0 ">
            {counterDetails.map((detail) => (
              <Counter
                key={detail.id}
                topic={detail.topic}
                end={detail.end}
                data={detail}
              />
            ))}{" "}
          </div>{" "}
          <ScrollTrigger
            onEnter={() => setCounton(true)}
            onExit={() => setCounton(false)}
            className="text-[#ff8a3B] z-0 overflow-hidden grid relative mx-auto justify-center  bottom-9"
          >
            {countOn && (
              <div className="sm:hidden mx-auto    ">
                {" "}
                <h1 className="  text-[45px] text-center font-bold font-inter whitespace-nowrap">
                  <CountUp start={0} end={10000} delay={0} duration={2} />+
                </h1>
                <p className="mx-auto flex justify-center  text-[19px] text-center font-rosario ">
                  Trusted Partners
                </p>
              </div>
            )}
          </ScrollTrigger>
        </div>{" "}
        <div className="xl:scale-90 grid sm:grid-cols-2  relative lg:gap-y-[50px] sm:gap-y-[30px] xl:top-[50px] lg:top-[50px] sm:top-[40px]  text-nowrap top-[30px] ">
          {productCategoryData.map((categiry) => (
            <ProductCategory
              img1={categiry.img1}
              img2={categiry.img2}
              key={categiry.id}
              title={categiry.title}
              path={categiry.path}
              id={categiry.id}
            />
          ))}
        </div>
        <div className="bg-[#FF8A3A]    relative  md:top-0 md:block hidden">
          {" "}
          <MemoRizedClientele />
        </div>
        <div className=" overflow-x-hidden md:hidden relative sm:top-[20px] top-[60px] overflow-y-hidden ">
          <MemoRizedClientele2 />
        </div>
        <Link to="/contact" style={{ display: "none" }}>
          Contact
        </Link>
        <Link to="/aboutus" style={{ display: "none" }}>
          {" "}
          About Us
        </Link>
      </div>
    </>
  );
}
)
export default Products;

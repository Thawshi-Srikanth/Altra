import React, { useEffect } from "react";
import counterDetails from "../assets/data/counterDetails";
import bg from "../assets/images/products/bg/bg.png";
import Counter from "./Counter";

import { Link } from "react-router-dom";
import productCategoryData from "../assets/data/productCategoryData";
import MemoRizedClientele from "./Clientele";
import MemoRizedClientele2 from "./ClienteleSm";
import ProductCategory from "./ProductCategory";
import about from "../assets/images/products/buttons/about.png";
import contact from "../assets/images/products/buttons/contact.png";

function Products() {
/*     useEffect(() => {
    window.scrollTo(0, 0);
  }, []); */
  return (
    <>
      {" "}
      <div className="flex-col items-center w-full overflow-x-hidden z-0  lg:top-[0px] relative lg:mb-[-80px] md:mb-[-80px] ">
        <div className=" w-full relative">
          <img
            src={bg}
            alt="bgimage"
            className="w-full h-full object-cover relative  "
          />
          <div className="flex absolute sm:gap-x-3 lg:gap-x-10 2xl:bottom-[250px] xl:bottom-[215px] lg:bottom-[145px]  sm:bottom-[112px] 2xl:left-[180px] xl:left-[160px] lg:left-[75px]  font-rosario lg:text-[25px] md:text-[16px] sm:text-[13px] text-[#FF8A3B]  lg:scale-90 xl:scale-100 sm:scale-90 sm:left-[69px] mdbutton">
            <Link to="/aboutus">
              <button className="lg:w-[200px] lg:h-[50px] sm:w-[90px] sm:h-[40px] bg-white rounded-[10px] hover:text-black font-bold transition duration-300 ">
                About Us
              </button>
            </Link>
            <Link to="/contact">
              <button className="lg:w-[200px] lg:h-[50px] sm:w-[90px] sm:h-[40px] bg-white rounded-[10px] hover:text-black font-bold transition duration-300 ">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[#5B5B5B] xl:h-[300px] lg:h-[180px]    md:h-[150px]  sm:h-[100px]  flex h-[70px]  w-full  justify-evenly mx-auto items-center ">
          {counterDetails.map((detail) => (
            <Counter key={detail.id} topic={detail.topic} end={detail.end} />
          ))}
        </div>{" "}
        <div className="grid grid-cols-2  relative lg:gap-y-[50px] sm:gap-y-[30px] xl:top-[50px] lg:top-[50px] sm:top-[40px]  text-nowrap  ">
          {productCategoryData.map((categiry) => (
            <ProductCategory
              img1={categiry.img1}
              img2={categiry.img2}
              key={categiry.id}
              title={categiry.title}
            />
          ))}
        </div>
        <div className="bg-[#FF8A3A]    relative  md:top-0 md:block hidden">
          {" "}
          <MemoRizedClientele />
        </div>
        <div className="md:hidden relative sm:top-[20px]"><MemoRizedClientele2 /></div>
      </div>
    
      
    </>
  );
}

export default Products;

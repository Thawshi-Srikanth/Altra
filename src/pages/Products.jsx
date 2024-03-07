import React, { useEffect } from "react";
import counterDetails from "../assets/data/counterDetails";
import bg from "../assets/images/products/bg/bg.png";
import Counter from "./Counter";

import { Link } from "react-router-dom";
import productCategoryData from "../assets/data/productCategoryData";
import MemoRizedClientele from "./Clientele";
import ProductCategory from "./ProductCategory";
import about from "../assets/images/products/buttons/about.png";
import contact from "../assets/images/products/buttons/contact.png";

function Products() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <div className="flex-col items-center w-full overflow-hidden z-0  lg:top-[0px] relative lg:mb-[-80px] mb-[-20px]">
        <div className=" w-full relative">
          <img
            src={bg}
            alt="bgimage"
            className="w-full h-full object-cover relative  "
          />
          <div className="flex absolute gap-x-10 2xl:bottom-[250px] xl:bottom-[235px] 2xl:left-[160px] xl:left-[150px] font-rosario lg:text-[25px]  text-[#FF8A3B] ">
            <Link to="/aboutus">
              <button className="xl:w-[200px] xl:h-[50px] bg-white rounded-[10px] hover:text-black font-bold transition duration-300 ">
                About Us
              </button>
            </Link>
            <Link to="/contact">
              <button className="xl:w-[200px] xl:h-[50px] bg-white rounded-[10px] hover:text-black font-bold transition duration-300 ">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[#5B5B5B] xl:h-[300px] lg:h-[180px]   md:h-[140px]  sm:h-[100px]  flex h-[70px]  w-full  justify-evenly mx-auto items-center ">
          {counterDetails.map((detail) => (
            <Counter key={detail.id} topic={detail.topic} end={detail.end} />
          ))}
        </div>{" "}
        <div className="grid grid-cols-2  relative xl:gap-y-[50px] xl:top-[50px] ">
          {productCategoryData.map((categiry) => (
            <ProductCategory
              img1={categiry.img1}
              img2={categiry.img2}
              key={categiry.id}
              title={categiry.title}
            />
          ))}
        </div>
        <div className="bg-[#FF8A3A] relative ">
          {" "}
          <MemoRizedClientele />
        </div>
      </div>
    </>
  );
}

export default Products;

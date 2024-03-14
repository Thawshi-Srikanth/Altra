import { motion } from "framer-motion";
import React, { memo, useEffect, useRef, useState } from "react";
import { ProductsImages } from "../assets/data/ProductsImages";
import MobileViewProducts from "./MobileViewProducts";
import { brands } from "./../assets/data/brands";
import { userStateContext } from "../contexts/ContextProvider";
import { productsCaru } from "../assets/data/productsCaru";

const MemoRizedProducts = memo(function ShowProduct() {
  // const [width, setWidth] = useState(0);
  // const carousel = useRef();

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);
  // const itemStyle = {
  //   marginLeft: "-50px",
  // };

  return (
    <div className="overflow-xhidden  2xl:scale-90 sm:scale-75 lg:scale-100 w-full relative bottom-[25px] sm:bottom-0 xl:bottom-0 xl:mt-[130px]  md:mt-[-50px] lg:mt-0 md:mb-[120px] lg:mb-0 ">
      <p className="sm:text-[40px] text-[25px] pt-[40px] lg:pt-[60px] md:pt-[60px] sm:pt-[110px]  text-center font-rosario xl:text-[69px] lg:text-[50px] md:text-[45px] font-bold text-white ">
        Products
      </p>
      <div className="sm:mt-[30px] lg:scale-95 md:scale-90 sm:scale-75 scale-50 overscroll-x-auto z-1 mb-[40px] sm:mb-0 top-2 relative">
        <div className="bottom-[130px]  sm:bottom-0 flex justify-start [&_li]:mx-8 [&_img]:max-w-96 animate-infinite-scrollShowProducts scroll-smooth md:gap-x-[80px] xl:gap-x-[190px] relative md:top-3">
          {" "}
          {productsCaru.map((img) => (
            <div key={img.id}>
              <img src={img.img} alt={img.id} className="xl:scale-125 scale-90 sm:scale-100" />
            </div>
          ))}
        </div>
      </div>

      {/* dekstop */}
      {/*<div className="sm:top-[-67px] lg:mt-[120px]  relative  ">
        {" "}
        <motion.div
          ref={carousel}
          className=" carousel  xl:pl-[80px]  sm:block hidden sm:scale-75 lg:scale-100 "
          whileTap={{ cursor: "grabbling" }}
          style={{ top: "100px" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 10, left: -width }}
            className="inner-carousel  relative xl:mt-[50px] xl:min-w-[2100px] sm:min-w-[2100px]  z-[1]  "
          >
            {ProductsImages.map((product) => {
              return (
                <motion.div
                  key={product.id}
                  className="item xl:px-[10px]  lg:scale-90 relative sm:scale-90"
                  style={itemStyle}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="relative xl:w-[400px] xl:h-[600px]    xl:scale-110 "
                  />
                  <p
                    className={` font-medium text-nowrap xl:bottom-[40px] font-rosario absolute sm:mt-[-120px] xl:ml-0  sm:ml-[90px] xl:text-[55px] sm:text-[45px] text-center ${
                      product.title === "Equipment"
                        ? "sm:ml-[130px] xl:ml-[80px] "
                        : ""
                    } ${
                      product.title === "Lab Furniture"
                        ? "xl:ml-[45px] sm:ml-[100px]"
                        : ""
                    } ${
                      product.title === "Chemicals"
                        ? "xl:ml-[85px] sm:ml-[150px]"
                        : ""
                    } ${
                      product.title === "Thermometer"
                        ? "sm:ml-[103px] xl:ml-[40px] "
                        : ""
                    }  ${
                      product.title === "Filter Papers"
                        ? "sm:ml-[103px] xl:ml-[56px] "
                        : ""
                    }`}
                  >
                    {product.title}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
          </div>*/}

      {/*
md screens */}
      {/* <motion.div
        ref={carousel}
        className="carousel   lg:hidden "
        whileTap={{ cursor: "grabbling" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 6, left: -width }}
          className="inner-carousel  relative  "
        >
          {ProductsImages.map((product) => {
            return (
              <motion.div
                key={product.id}
                className="itemMob relative  md:bottom-[10px]    "
                style={itemStyle}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="relative   "
                />
                <p
                  className={` font-medium text-nowrap font-rosario absolute    md:text-[25px] text-center md:mt-[-60px] ${
                    product.title === "Equipment" ? "md:ml-[40px]" : ""
                  } ${
                    product.title === "Lab Furniture" ? " md:ml-[30px]" : ""
                  } ${product.title === "Chemicals" ? " md:ml-[40px]" : ""} ${
                    product.title === "Thermometer" ? " md:ml-[20px]" : ""
                  }  ${
                    product.title === "Filter Papers" ? " md:ml-[30px]" : ""
                  }`}
                >
                  {product.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div> */}

      {/* <MobileViewProducts />*/}
    </div>
  );
});

export default MemoRizedProducts;

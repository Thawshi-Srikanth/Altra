import { motion } from "framer-motion";
import React, { memo, useEffect, useRef, useState } from "react";
import { ProductsImages } from "../assets/data/ProductsImages";
import MobileViewProducts from "./MobileViewProducts";
import { brands } from "./../assets/data/brands";
import { userStateContext } from "../contexts/ContextProvider";

const MemoRizedProducts=memo(function ShowProduct() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  const itemStyle = {
    marginLeft: "-50px",
  };

  return (
    <div className="2xl:scale-90 sm:scale-75 lg:scale-100 w-full relative bottom-[25px] sm:bottom-0 xl:bottom-0 xl:mt-[130px]  md:mt-[-50px] lg:mt-0">
      <p className="sm:text-[40px] text-[25px] pt-[40px] lg:pt-[60px] md:pt-[60px] sm:pt-[110px]  text-center font-rosario xl:text-[69px] lg:text-[50px] md:text-[45px] font-bold text-white ">
        Products
      </p>
      {/* dekstop */}
      <div className="sm:top-[-67px] lg:mt-[120px]  relative  ">
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
                        ? "xl:ml-[85px] sm:ml-[130px]"
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
      </div>

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
      <MobileViewProducts />
    </div>
  );
})

export default MemoRizedProducts;

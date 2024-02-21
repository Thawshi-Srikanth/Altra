import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ProductsImages } from "../assets/data/ProductsImages";
import MobileViewProducts from "./MobileViewProducts";

function ShowProduct() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  const itemStyle = {
    marginLeft: "-50px",
  };

  return (
    <div className="relative">
      <p className="sm:text-[30px] text-[25px] pt-[40px] lg:pt-[60px] md:pt-[60px] sm:pt-[110px] md:text-[35px] text-center font-rosario xl:text-[69px] lg:text-[50px]  font-bold text-white ">
        Products
      </p>
      {/* dekstop */}
      <div className="relative">
        {" "}
        <motion.div
          ref={carousel}
          className="carousel  xl:pl-[80px]  lg:block hidden"
          whileTap={{ cursor: "grabbling" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 10, left: -width }}
            className="inner-carousel  relative xl:mt-[50px] "
          >
            {ProductsImages.map((product) => {
              return (
                <motion.div
                  key={product.id}
                  className="item xl:px-[10px]  lg:scale-90 relative "
                  style={itemStyle}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="relative xl:w-[400px] xl:h-[600px]    xl:scale-110"
                  />
                  <p
                    className={` ] font-medium text-nowrap xl:bottom-[40px] font-rosario absolute lg:mt-[-120px] xl:ml-0  lg:ml-[90px] xl:text-[55px] lg:text-[45px] text-center ${
                      product.title === "Equipment"
                        ? "lg:ml-[120px] xl:ml-[80px]"
                        : ""
                    } ${
                      product.title === "Lab Furniture"
                        ? "xl:ml-[45px] lg:ml-[100px]"
                        : ""
                    } ${
                      product.title === "Chemicals"
                        ? "lg:ml-[113px] xl:ml-[80px]"
                        : ""
                    } ${
                      product.title === "Thermometer"
                        ? "lg:ml-[103px] xl:ml-[40px] "
                        : ""
                    }  ${
                      product.title === "Filter Papers"
                        ? "lg:ml-[103px] xl:ml-[56px] "
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
}

export default ShowProduct;

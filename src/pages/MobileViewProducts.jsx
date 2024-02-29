import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ProductsImages } from "../assets/data/ProductsImages";

function MobileViewProducts() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  const itemStyle = {
    marginLeft: "-50px",
  };

  return (
    <motion.div
      ref={carousel}
      className="carousel z-[1]  lg:hidden relative bottom-[90px] md:bottom-0 sm:scale-95 md:scale-100 sm:mt-[-80px] md:mt-0"
      whileTap={{ cursor: "grabbling" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 6, left: -width }}
        className="inner-carousel  relative  md:min-w-[1400px] sm:min-w-max min-w-[580px] md:gap-x-[80px] "
      >
        {ProductsImages.map((product) => {
          return (
            <motion.div
              key={product.id}
              className="itemMob relative  md:bottom-[10px] md:left-[180px] mx-[-120px] sm:left-[30px] md:mx-0 left-[-31px]  sm:px-0 "
              style={itemStyle}
            >
              <img
                src={product.image}
                alt={product.title}
                className="relative md:block hidden  "
              />
              <img
                src={product.image}
                alt={product.title}
                className="relative md:hidden  scale-50  "
              />
              <p
                className={`sm:ml-[88px]  md:ml-0 font-medium text-nowrap font-rosario absolute   text-[15px] sm:text-[25px]  md:text-[25px] text-center mt-[-115px]  md:mt-[-60px] sm:mt-[-230px] ${
                  product.title === "Equipment" ? "md:ml-[87px] ml-[75px] sm:ml-[163px]  " : ""
                } ${product.title === "Lab Furniture" ? " md:ml-[73px] ml-[67px] sm:ml-[153px]" : ""} ${
                  product.title === "Chemicals" ? " md:ml-[86px] ml-[77px] sm:ml-[165px]" : ""
                } ${product.title === "Thermometer" ? " md:ml-[63px]  ml-[65px] sm:ml-[154px]" : ""}  ${
                  product.title === "Filter Papers" ? "sm:ml-[154px] md:ml-[74px]  ml-[70px]" : ""
                }`}
              >
                {product.title}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default MobileViewProducts;

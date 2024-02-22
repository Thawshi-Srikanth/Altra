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
      className="carousel   lg:hidden relative bottom-[90px] md:bottom-0 sm:scale-125 md:scale-100"
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
              className="itemMob relative  md:bottom-[10px] md:left-[30px] mx-[-120px] sm:left-[60px] md:mx-0 left-[-31px] "
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
                className={`sm:ml-[88px]  md:ml-0 font-medium text-nowrap font-rosario absolute   text-[15px]  md:text-[25px] text-center mt-[-115px]  md:mt-[-60px] sm:mt-[-130px] ${
                  product.title === "Equipment" ? "md:ml-[47px] ml-[75px] sm:ml-[93px]  " : ""
                } ${product.title === "Lab Furniture" ? " md:ml-[33px] ml-[67px] " : ""} ${
                  product.title === "Chemicals" ? " md:ml-[46px] ml-[77px] sm:ml-[93px]" : ""
                } ${product.title === "Thermometer" ? " md:ml-[33px]  ml-[65px] sm:ml-[84px]" : ""}  ${
                  product.title === "Filter Papers" ? " md:ml-[34px]  ml-[70px]" : ""
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

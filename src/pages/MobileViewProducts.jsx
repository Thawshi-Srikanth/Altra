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
      className="carousel   lg:hidden relative bottom-[80px] md:bottom-0 sm:scale-125 md:scale-100"
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
                className={` font-medium text-nowrap font-rosario absolute   text-[15px]  md:text-[25px] text-center mt-[-115px]  md:mt-[-60px] ${
                  product.title === "Equipment" ? "md:ml-[47px] ml-[75px]" : ""
                } ${product.title === "Lab Furniture" ? " md:ml-[33px] ml-[67px]" : ""} ${
                  product.title === "Chemicals" ? " md:ml-[46px] ml-[77px] " : ""
                } ${product.title === "Thermometer" ? " md:ml-[33px]  ml-[65px]" : ""}  ${
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

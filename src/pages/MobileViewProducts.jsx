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
    <div>
      {" "}
      <motion.div
        ref={carousel}
        className=" carousel z-[1]  sm:hidden relative bottom-[90px] md:bottom-0 sm:scale-90 md:scale-50 sm:mt-[-80px] md:mt-[-60px] "
        whileTap={{ cursor: "grabbling" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 6, left: -width }}
          className="inner-carousel  relative  md:min-w-[2500px] sm:min-w-[1400px] min-w-[700px] md:gap-x-[80px] "
        >
          {ProductsImages.map((product) => {
            return (
              <motion.div
                key={product.id}
                className="z-[1]  itemMob relative  md:bottom-[10px] md:left-[180px] mx-[-120px] sm:left-[30px] md:mx-0  left-[-31px]  sm:px-0 "
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
                  className={`  md:ml-0 font-medium text-nowrap font-rosario absolute   text-[15px] sm:text-[20px]  md:text-[35px] text-center mt-[-131px]  md:mt-[-120px] sm:mt-[-230px] ${
                    product.title === "Equipment"
                      ? "md:ml-[137px] ml-[95px] sm:pl-[110px] md:pl-0  "
                      : ""
                  } ${
                    product.title === "Lab Furniture"
                      ? " md:ml-[123px] ml-[88px] sm:pl-[100px] md:pl-0 "
                      : ""
                  } ${
                    product.title === "Chemicals"
                      ? " md:ml-[146px] ml-[90px] sm:pl-[110px] md:pl-0 "
                      : ""
                  } ${
                    product.title === "Thermometer"
                      ? " md:ml-[123px]  ml-[82px] sm:pl-[100px] md:pl-0 "
                      : ""
                  }  ${
                    product.title === "Filter Papers"
                      ? "sm:pl-[100px] md:pl-0  md:ml-[124px]  ml-[85px]"
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
  );
}

export default MobileViewProducts;

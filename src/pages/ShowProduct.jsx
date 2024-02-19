import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ProductsImages } from "../assets/data/ProductsImages";

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
    <div className=" ">
      <p className="lg:pt-[60px] text-center font-rosario xl:text-[69px] lg:text-[50px]  font-bold text-white ">
        Products
      </p>
      <motion.div
        ref={carousel}
        className="carousel  xl:pl-[80px]"
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
                  className={` font-medium text-nowrap xl:bottom-[40px] font-rosario absolute lg:mt-[-120px] xl:ml-[60px]  lg:ml-[90px] xl:text-[55px] lg:text-[45px] text-center ${
                    product.title === "Equipment"
                      ? "lg:ml-[120px] xl:ml-[80px]"
                      : ""
                  } ${
                    product.title === "Lab Furniture"
                      ? "xl:ml-[50px] lg:ml-[100px]"
                      : ""
                  } ${
                    product.title === "Chemicals"
                      ? "lg:ml-[113px] xl:ml-[80px]"
                      : ""
                  } ${
                    product.title === "Thermometer"
                      ? "lg:ml-[103px] xl:ml-[35px]"
                      : ""
                  } `}
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

export default ShowProduct;

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ProductsImages } from "../assets/data/ProductsImages";

function ShowProduct() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className=" ">
      <p className="lg:pt-[60px] text-center font-rosario xl:text-[69px] lg:text-[50px]  font-bold text-white ">
        Products
      </p>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbling" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 10, left: -width }}
          className=" inner-carousel "
        >
          {ProductsImages.map((product) => {
            return (
              <motion.div key={product.id} className="item  ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="relative   "
                />
                <p className={` text-nowrap font-bold font-rosario absolute lg:mt-[-120px]  lg:ml-[70px]  xl:text-[55px] lg:text-[45px] text-center ${product.title==="Equipment"?"lg:ml-[100px]":""} ${product.title==="Lab Furniture"?"xl:ml-[60px] lg:ml-[90px]":""} ${product.title==="Chemicals"?"lg:ml-[130px] xl:ml-[100px]":""}`}>
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

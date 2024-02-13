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
      <p className="lg:pt-[60px] text-center font-rosario xl:text-[69px] lg:text-[40px] font-bold text-white ">
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
                <p className={`text-nowrap font-bold font-rosario absolute lg:mt-[-120px] lg:ml-[120px]  text-[30px] ${product.title==="Equipment"?"xl:ml-[130px]":""}`}>
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

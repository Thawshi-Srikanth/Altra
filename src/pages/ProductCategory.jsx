import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductCategory({ img1, img2, title, path,id }) {


  const navigate=useNavigate()

  return (
    <div className="mx-auto justify-center  overflow-hidden mt-6 sm:mt-0">
      <Link to={`/products/${path}`}>
        <h1 className="font-rosario text-center xl:text-[49.66px]  lg:text-[35.66px] sm:text-[25.66px] text-[22.55px] md:text-[28.66px] lg:text-transparent !bg-clip-text [background:linear-gradient(90deg,_#000,_#ff8a3b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]  cursor-pointer font-extrabold ">
          {" "}
          {title}
        </h1>

        <div className="relative lg:scale-90 xl:scale-100 sm:scale-90 rounded-[9.08px] lg:rounded-[20px] scale-90 xl:h-[300px] xl:w-[600px] lg:h-[300px] lg:W-[550px]  ">
          <img
            src={img1}
            className="absolute   hover:opacity-0  transition duration-300 z-50"
            alt={`Product Image 1 for ${title}`}
          />
          <img src={img2} className="" alt={`Product Image 2 for ${title}`} />
        </div>
      </Link>
    </div>
  );
}

export default ProductCategory;

import React from "react";

function ProductCategory({img1,img2,title}) {
  return (
    <div
      className="mx-auto justify-center  overflow-hidden
    "
    >
    <p className="font-rosario text-center text-[49.66px]   text-transparent !bg-clip-text [background:linear-gradient(90deg,_#000,_#ff8a3b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]  cursor-pointer font-bold "> {title}</p>


      
      <div className="relative ">
        <img
          src={img1}
          className="absolute   hover:opacity-0 xl:left-[20px] xl:top-[18px] transition duration-300 z-50"
        />
        <img src={img2} className="" />
      </div>

   
    </div>
  );
}

export default ProductCategory;

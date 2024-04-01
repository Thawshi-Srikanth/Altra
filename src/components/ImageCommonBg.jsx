import React, { useState } from "react";
import { userStateContext } from "../contexts/ContextProvider";


function ImageCommonBg({ img, text }) {
  const { actualClient, } = userStateContext();

  const filtered = img.filter((item) =>{    return  item.title === actualClient});
console.log(actualClient)
  return (
    <div className="relative">
      <div className=" grid grid-cols-2 absolute items-center mx-auto justify-center">
        {" "}
        <p
          className={`${actualClient === "geyer" ? "xl:top-[130px]" : ""} 
        ${actualClient === "water" ? "xl:top-[60px]" : ""} 
        ${actualClient === "jp" ? "xl:top-[60px] " : ""} 
        
        font-medium xl:w-[727px] w-[217px] lg:w-[570px] md:w-[410px] sm:w-[370px] h-[120px] xl:h-[328px] 2xl:top-[60px] relative items-center mx-auto justify-center  text-[7px] md:text-[15px] sm:text-[13px] lg:text-[20px] xl:text-[23px] font-rosario  bottom-0 inset-x-0  text-center   sm:top-[60px] 2xl:left-[100px] xl:left-[-20px] px-2 sm:px-0  top-[39px]  sm:left-3  md:mx-[3px] lg:mx-5 md:top-[90px]  xl:px-8  xl:text-wrap scale-90 sm:scale-100`}
        >
          {text}
        </p>
      </div>

      {filtered.map((image) => (
        <img
          key={image.id}
          src={image.img}
          className="object-cover w-full xl:h-[470px]   sm:top-0"
        />
      ))}
    </div>
  );
}

export default ImageCommonBg;

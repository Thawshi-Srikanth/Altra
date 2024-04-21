import React, { useState } from "react";
import { userStateContext } from "../contexts/ContextProvider";
import imgMob from "../assets/images/products/mobile/mob.png";
import { useParams } from "react-router-dom";
function ImageCommonBg({ img, text, id }) {

  const { actualClient } = userStateContext();

    const { clientNextpath } = useParams();

  const filtered = img.filter((item) => {
    return item.title === clientNextpath;
  });

  return (
    <div className="relative">
      <div className=" top-3 sm:top-0 grid grid-cols-2 absolute items-center mx-auto justify-center">
        {" "}
        <p
          className={`md:mt-[-34px] lg:mt-0 relative  ${
            actualClient === "geyer" ? "xl:top-[130px]" : ""
          } 
        ${actualClient === "water" ? "xl:top-[60px] " : ""} 
           ${
             actualClient === "accustand" ? "2xl:relative 2xl:left-[15px] " : ""
           } 
                      ${
                        actualClient === "chemlab"
                          ? "2xl:relative 2xl:left-[60px] "
                          : ""
                      } 
        ${actualClient === "jp" ? "xl:top-[60px] " : ""} 
        ${actualClient === "apera" ? "mt-[-10px] sm:mt-0 " : ""} 
        ${
          actualClient === "geyer"
            ? "top-[47px] sm:mt-0   xl:mt-4 2xl:mt-20 md:mt-5 lg:mt-10 xl:mt-0"
            : ""
        } 
        ${actualClient === "france" ? "top-[40px] sm:mt-0 " : ""} 
        ${actualClient === "interscience" ? "top-[40px] sm:mt-0  " : ""} 
        ${
          actualClient === "euromax" ||
          actualClient === "camlab" ||
          actualClient === "gerber" ||
          actualClient === "consort" ||
          actualClient === "orto" ||
          actualClient === "jp"
            ? "mt-[-10px] sm:mt-0  md:relative md:scale-95 lg:scale-100 md:mt-[-22px] lg:mt-0"
            : ""
        } 
        ${actualClient === "france" ? "top-[32px] sm:top-0 " : ""} 
        ${
          actualClient === "megazyme"
            ? "top-[40px] sm:top-0 relative 2xl:left-[40px]"
            : ""
        } 
        ${actualClient === "method" ? "top-[40px] sm:top-0 " : ""} 
        ${actualClient === "consort" ? "xl:top-[50px] sm:top-0 " : ""} 
        ${actualClient === "gerber" ? "xl:top-[52px] sm:top-0 " : ""} 
        
        ${
          actualClient === "camlab" ||
          actualClient === "euromax" ||
          actualClient === "orto"
            ? "xl:top-[56px] sm:top-0 "
            : ""
        } 
        

  ${actualClient === "apera" ? "xl:top-[58px] " : ""}  
  ${
    actualClient === "lactos"
      ? "xl:top-[60px] relative mt-[-20px] sm:mt-0 "
      : ""
  }  

       mt-[-5px] sm:mt-0 font-medium xl:w-[727px] w-[227px] lg:w-[570px] md:w-[410px] sm:w-[370px] h-[120px] xl:h-[328px] 2xl:top-[60px] relative  mx-auto justify-center  text-[7.47px] md:text-[15px] sm:text-[13px] lg:text-[20px] xl:text-[23px] font-rosario  bottom-0 inset-x-0  text-center   sm:top-[60px] 2xl:left-[100px] xl:left-[-20px] px-2 sm:px-0  top-[32px]  sm:left-3  md:mx-[3px] lg:mx-5 md:top-[90px]  xl:px-8  xl:text-wrap scale-90 sm:scale-100 items-center`}
        >
          {text}
        </p>
        {filtered.map((image,id) => (
          <div
            key={image.id}
            className="grid top-5 left-3 mx-auto justify-center relative items-center  "
          >
            {" "}
            <img
              src={image.logo}
              className={`w-[150px] sm:hidden object-cover ${
                actualClient === "chemlab" ||
                actualClient === "megazyme" ||
                actualClient === "interscience"
                  ? "scale-x-90  relative right-1  "
                  : ""
              } 
               ${actualClient === "france" ? "relative top- scale-50 " : ""}
               ${actualClient === "jp" ? "relative top-2 " : ""}
               ${actualClient === "lactos" ? "scale-75 h-[125px] " : ""}
              
                `}
              alt={actualClient}
            />
          </div>
        ))}
      </div>

      {filtered.map((image, id) => (
        <>
          <img
            key={image.id}
            src={image.img}
            className="object-cover w-full xl:h-[470px]   sm:top-0 sm:block hidden"
          />
          <div>
            {" "}
            <img
              key={image.name}
              src={imgMob}
              className={`object-cover  h-[165px]   sm:top-0 sm:hidden `}
            />
          </div>
        </>
      ))}
    </div>
  );
}

export default ImageCommonBg;

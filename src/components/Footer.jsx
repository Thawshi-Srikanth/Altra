import React from "react";
import footerLogo from "../assets/images/Footer/footerLogo.png";
import social from "../assets/data/social";
import headerTitles from "./../assets/data/headerTitles";
import { Link, NavLink } from "react-router-dom";
import Line from "../assets/images/Footer/Line/Line.png";

function Footer() {
  const itemsToExcludeDekstop = ["Search", "Products", "Research"];
  const itemsToExcludeMobile = ["Search"];

  const titles = (arrayType) =>
    headerTitles.filter((title) => !arrayType.includes(title.name));

  const dekTitile = titles(itemsToExcludeDekstop);
  const mobTitile = titles(itemsToExcludeMobile);

  return (
    <div className="relative mt-[0px] sm:mt-[-140px] xl:mt-[80px]  md:mt-[70px] z-10">
      <div className="bg-[#2D2D2D] lg:grid lg:grid-cols-3 grid sm:grid-cols-3 lg:h-[350px] md:h-[250px] sm:h-[210px] h-[700px] relative">
        <div className="order-last scale-50 sm:scale-100 sm:order-none flex flex-col justify-center xl:ml-[80px] lg:ml-[30px] relative xl:scale-90 md:scale-90 bottom-[20px] sm:bottom-0 xl:top-[30px]">
          <div className="">
            <img
              src={footerLogo}
              alt=""
              className="lg:mt-[-15px] md:mt-[-15px]  md:scale-75 lg:scale-100 sm:scale-50 mx-auto sm:mx-0"
            />
          </div>

          <div className="mx-auto sm:mx-0 gap-[30px] flex lg:gap-[12px] md:gap-[10px] sm:gap-[0px] xl:gap-[30px] lg:mt-[12px] md:mt-[-23px] sm:mt-[-50px] lg:mb-[20px] relative 2xl:ml-[-40px]  xl:right-[20px] md:left-[20px] lg:right-0 sm:left-[10px]  sm:pb-[30px] mt-[5px] xl:ml-[-45px]">
            {social.map((social) => (
              <Link key={social.id} to={social.path} target="blank">
                {" "}
                <img
                  src={social.image}
                  alt={social.name}
                  className="md:scale-75 lg:scale-100  sm:scale-50  "
                />
              </Link>
            ))}
          </div>
        </div>

        <div className=" mx-auto sm:mx-0 grid sm:grid-cols-3  lg:gap-x-[70px] md:gap-x-[30px] sm:gap-x-[30px] relative sm:right-[50px] xl:scale-90 md:mt-[30px] lg:mt-0 sm:mt-[20px] sm:scale-75 md:scale-100">
          <div className="items-center lg:top-[40px] sm:text-[15px] lg:mt-[-17px]  relative xl:right-[30px] top-[60px] sm:top-0 ">
            {dekTitile.map((title) => (
              <div key={title.id} className="sm:block hidden">
                <Link to={title.path} className="mb-[30px] sm:mb-0">
                  {" "}
                  <p className="text-white font-rosario xl:text-[23px] lg:text-[20px] md:text-[15px] lg:my-[17px] text-nowrap text-center sm:text-left  sm:mb-0 relative bottom-[15px] sm:bottom-0 ">
                    {title.name}
                  </p>
                  <img src={title.image} alt="" />
                </Link>
              </div>
            ))}
            {mobTitile.map((title) => (
              <Link to={title.path} key={title.id} className="sm:hidden">
                <div className="mb-[30px] sm:mb-0">
                  {" "}
                  <p className="text-white font-rosario xl:text-[23px] lg:text-[20px] md:text-[15px] lg:my-[17px] text-nowrap text-center sm:text-left  sm:mb-0 relative bottom-[15px] sm:bottom-0 ">
                    {title.name}
                  </p>
                  <img src={title.image} alt="" />
                </div>
              </Link>
            ))}
          </div>
          <div className="lg:top-[40px] lg:mt-[-17px] relative xl:right-[30px] sm:block hidden">
            <p className="text-white font-rosario xl:text-[23px] sm:text-[15px] md:text-[15px] lg:text-[20px] lg:my-[17px]">
              <Link to="/products"> Products</Link>
            </p>
            <img src={Line} alt="line" />
            <p className="lg:text-[13px] md:text-[12px] sm:text-[12px]  xl:text-[13px] text-nowrap lg:ml-[-30px] md:ml-[-30px] sm:ml-[-30px] xl:ml-0 text-white wrap xl:scale-150 lg:scale-[125px]  relative left-[30px] lg:top-[15px] xl:top-[27px] ">
              Equipment
              <br /> Chemical And Reagents <br /> Consumable Filter Papers
              <br /> Lab Furniture
            </p>
          </div>
          <div className="sm:block hidden lg:top-[40px] lg:mt-[-17px] relative lg:left-[50px] md:left-[30px] xl:left-[70px] sm:left-[50px]">
            <p className="text-white md:text-[15px] sm:text-[15px] font-rosario xl:text-[23px] lg:text-[20px] lg:my-[17px] md:ml-[30px] sm:ml-[30px] lg:ml-0">
              <Link to="/research"> Research</Link>
            </p>
            <img
              src={Line}
              alt="line"
              className="sm:left-[30px] md:left-[31px] xl:left-0 lg:ml-0 relative"
            />
            <p className="lg:text-[13px] md:text-[12px] sm:text-[12px] xl:text-[13px] text-white wrap xl:scale-150  lg:scale-[125px] relative left-[30px]  xl:top-[23px] lg:top-[15px] lg:ml-[-30px] xl:ml-0 text-nowrap md:ml-[3px] ">
              Research Support <br />
              Expression Of Interest <br />
              Grants
            </p>
          </div>
        </div>
        <div className="left-[40px]  mx-auto  sm:mx-0 sm:scale-75 md:scale-100 lg:top-[50px]  relative lg:right-[30px] md:left-[90px]  sm:left-[20px] lg:left-0  xl:right-0 xl:scale-90 md:mt-[45px] lg:mt-0 sm:mt-[27px] mt-[75px] px-2 sm:px-0">
          <div className="lg:left-[130px] xl:left-[190px] relative grid grid-cols-2 sm:grid-cols-1 gap-[90px] sm:gap-0 text-nowrap">
            <p className="text-white font-rosario xl:text-[23px] sm:text-[15px] text-[13px] lg:text-[20px] md:text-[15px] lg:my-[17px] relative right-[15px] sm:right-0">
              <span className="text-nowrap text-center xl:pl-[80px] lg:left-[70px] relative xl:left-0 left-[50px] sm:left-0">
                Address:
              </span>
              <br /> 18/2 Lorem Ipsum Land <br />
              <span className="lg:pl-[60px] left-[30px] sm:left-0 relative">
                Colombo - 05
              </span>
            </p>
            <img
              src={Line}
              alt="line"
              className="lg:w-[250px] relative lg:bottom-[5px] md:bottom-[-2px] sm:bottom-[-3px] sm:block hidden"
            />
            <p className="text-white font-rosario xl:text-[23px] lg:text-[20px] md:text-[15px] text-[13px] lg:my-[17px] lg:pl-[60px] relative bottom-[10px] sm:pt-[18px] md:pt-[10px] lg:pt-0">
              <span className="lg:pl-[30px] left-[16px] sm:left-0 relative">
                Phone: <br />
              </span>
              <p className="lg:pl-[10px] ">
                0777777777 <br />
                0777777777
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#666666] lg:h-[55px] sm:h-[40px] h-[70px] ">
        <div className="sm:flex justify-between font-rosario sm:text-[10px] text-[9px] md:text-[12px] lg:text-[17px] lg:top-[15px] top-[10px] sm:top-0 relative xl:scale-90 ">
          {" "}
          <p className=" relative text-center sm:left-[10px] xl:left-[-70px] mx-auto sm:mx-0  sm:top-[10px] xl:top-[1px] top-[7px]">
            Copyright © 2024 <span className="px-[10px] sm:px-0">|</span> Altra
            Scientific Private Limited{" "}
            <span className="px-[10px] sm:px-0">|</span> All rights reserved
          </p>
          <a href="https://arrowreachdigital.com/" target="blank">
            {" "}
            <p className="sm:hidden text-nowrap text-center relative top-[20px]">
              Crafted by Arrow Reach Digital
            </p>
            <p className="relative right-[60px] xl:right-[-60px] sm:right-[35px] sm:block hidden sm:top-[10px] xl:top-[1px]">
              | Crafted by{" "}
              <span className="hover:text-[#FF8A3A] ml-[5px] ">
                Arrow Reach Digital
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

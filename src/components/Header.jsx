import React, { useEffect, useRef, useState } from "react";
import headerTitles from "../assets/data/headerTitles";
import headerLogo from "../assets/images/headerLogo.png";
import search from "../assets/images/search.svg";
import toggle from "../assets/images/toggle.png";

import { Link, useLocation } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";

function Header() {
  const [currentTab, setCurrentTab] = useState(null);
  const [mobDrawer, setMobDrawer] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  useEffect(() => {
    const pathName = location.pathname;

    const tittles = {
      "/": "Home",
      "/aboutUs": "About Us",
      "/research": "Research",
      "/services": "Services",
      "/contact": "Contact",
      "/products": "Products",
    };
    setCurrentTab(tittles[pathName] || "");

    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMobDrawer(!open);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [location.pathname, mobDrawer]);

  const handleItemClick = (item) => {
    setCurrentTab(item);
    setMobDrawer(!mobDrawer);
  };

  return (
    <div
      className={`  bottom-0 w-screen  ${
        currentTab !== "Home" ? "fixed top-0 z-10 " : ""
      }`}
    >
      {/* dekstop */}
      <div
        className={`bg-white  top-0 z-[50] bottom-0 w-screen  relative  lg:block hidden  lg:flex-row lg:h-[100px] lg:shadow-[10px_10px_10px_rgba(0,_0,_0,_0.3)] `}
      >
        <div className="lg:right-[10px] xl:right-0 lg:flex lg:flex-row xl:pl-[86px] xl:pr-[86px] lg:pt-[10px] lg:pb-[10px] relative xl:left-[30px] 2xl:left-[40px]">
          <Link to="/">
            <div className="lg:flex lg:flex-row lg:scale-75 xl:scale-100 relative xl:right-[60px] 2xl:right-[70px]  ">
              <img src={headerLogo} alt="headerLogo" className="lg:h-[80px] " />
            </div>
          </Link>
          <div className="relative xl:left-[40px] lg:flex  lg:gap-x-[55px] xl:gap-x-[90px] xl:text-[24px] font-rosario justify-center items-center">
            {headerTitles.map((title) => (
              <div key={title.id} className="">
                <ul className="flex ">
                  <li className="lg:flex lg:flex-row">
                    <Link to={title.path}>
                      <p
                        className={`${
                          currentTab == title.name
                            ? "text-[#FF8A3A]"
                            : "text-black"
                        } xl:text-[17px] 2xl:text-[22px] font-bold hover:text-[#FF8A3A]
                      `}
                        onClick={() => handleItemClick(title.name)}
                      >
                        {title.name}
                      </p>
                    </Link>

                    {title.img ? (
                      <img
                        src={title.img}
                        alt="toggle"
                        className="relative xl:left-[20px] "
                      />
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="relative  xl:left-[130px] lg:left-[33px] flex  items-center ">
            {" "}
            <img
              src={search}
              alt="headerLogo"
              className="xl:w-[42px] xl:h-[42px] lg:w-[35px] lg:h-[35px]"
            />
          </div>
        </div>
      </div>

      {/* mobile */}
      {mobDrawer ? (
        <div
          className="rounded-r-[20px] overflow-x-hidden lg:hidden w-2/4 sm:w-1/3  mx-auto   fixed top-0 left-0 z-40 md:max-h-[700px] space-y-[20px] h-[320px] sm:h-full bg-white  shadow-[0px_4px_4px_#00000040] sm:overflow-y-auto  scroll-smooth focus:scroll-auto  "
          id="drawer-navigation"
          ref={menuRef}
        >
          {headerTitles.map((title) => (
            <div key={title.id} className=" w-full md:top-[4px] relative">
              <ul className="  mx-auto flex-col relative  left-[30px] top-[20px] ">
                <li className="flex space-x-2 ">
                  <Link to={title.path}>
                    <p
                      className={`${
                        currentTab == title.name
                          ? "text-[#FF8A3A]"
                          : "text-black"
                      } md:text-[25px] sm:text-[22px] text-[20px] font-bold text-[#FF8A3A] text-center font-rosario
                  `}
                      onClick={() => handleItemClick(title.name)}
                    >
                      {title.name}
                    </p>
                  </Link>
                  {/* title.img ? (
                    <img src={title.img} alt="toggle" className="relative  " />
                  ) : (
                    ""
                  ) */}
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white top-0 z-[50] lg:hidden relative shadow-[10px_10px_10px_rgba(0,_0,_0,_0.3)] h-16 mb-[-30px]">
          <div className="grid grid-cols-3 pt-[13px] pb-[13px] pl-[25px] pr-[20px] items-center relative searchwidth ">
            <Link to="/">
              {" "}
              <img
                src={headerLogo}
                alt="logo"
                className="md:scale-50 relative md:bottom-[19px] logo sm:scale-75 sm:bottom-[11px] md:mt-[-8px]"
              />
            </Link>
            <img
              onClick={() => setMobDrawer(!mobDrawer)}
              src={toggle}
              alt="toggle"
              className="w-[19px] h-[17px] relative left-[160px] toggle sm:left-[330px]  md:bottom-[15px] sm:bottom-[11px] md:mt-[-8px]"
            />
            <img
              src={search}
              alt="search"
              className="w-[24px] h-[24px]  left-[90px]  md:left-[180px] sm:left-[162px] relative md:bottom-[15px] sm:bottom-[11px] md:mt-[-8px]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

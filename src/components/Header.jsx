import React, { useEffect, useState } from "react";
import headerTitles from "../assets/data/headerTitles";
import headerLogo from "../assets/images/headerLogo.png";
import logoMobile from "../assets/images/logoMobile.png";
import toggle from "../assets/images/toggle.png";
import search from "../assets/images/search.svg";

import { Link, useLocation } from "react-router-dom";

function Header() {
  const [currentTab, setCurrentTab] = useState(null);
  const location = useLocation();

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
  }, [location.pathname]);

  const handleItemClick = (item) => {
    setCurrentTab(item);
  };

  return (
    <div>
      {/* dekstop */}
      <div className=" relative lg:block hidden lg:flex lg:flex-row lg:h-[100px] lg:shadow-[10px_10px_10px_rgba(0,_0,_0,_0.3)] ">
        <div className="lg:right-[10px] xl:right-0 lg:flex lg:flex-row xl:pl-[86px] xl:pr-[86px] lg:pt-[10px] lg:pb-[10px] relative xl:left-[30px] 2xl:left-[40px]">
          <Link to="/">
            <div className="lg:flex lg:flex-row lg:scale-75 xl:scale-100 relative xl:right-[70px]  ">
              <img src={headerLogo} alt="headerLogo" className="lg:h-[80px]" />
            </div>
          </Link>
          <div className="relative xl:left-[0px] lg:flex  lg:gap-x-[40px] xl:gap-x-[75px] xl:text-[24px] font-rosario justify-center items-center">
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
                        } xl:text-[17px] 2xl:text-[22px] font-bold
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
                        className="relative xl:left-[20px]"
                      />
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            ))}
           
          </div>
          <div className="relative xl:left-[60px] lg:left-[33px] flex  items-center ">
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

      <div className="lg:hidden relative shadow-[10px_10px_10px_rgba(0,_0,_0,_0.3)] h-16 mb-[20px]">
        <div className="grid grid-cols-3 pt-[13px] pb-[13px] pl-[25px] pr-[20px] items-center relative  ">
          <Link to="/">
            {" "}
            <img src={logoMobile} alt="logo" className="" />
          </Link>
          <img
            src={toggle}
            alt="toggle"
            className="w-[19px] h-[17px] relative left-[160px] md:left-[350px] "
          />
          <img
            src={search}
            alt="search"
            className="w-[24px] h-[24px] relative left-[90px]  md:left-[180px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

import React, { useEffect, useState } from "react";
import headerTitles from "../assets/data/headerTitles";
import headerLogo from "../assets/images/headerLogo.png";

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
    <div className="lg:flex lg:flex-row lg:h-[100px] lg:shadow-[10px_10px_10px_rgba(0,_0,_0,_0.3)] ">
      <div className="lg:flex lg:flex-row xl:pl-[86px] xl:pr-[86px] lg:pt-[10px] lg:pb-[10px]">
        <Link to="/">
          <div className="lg:flex lg:flex-row lg:scale-75 xl:scale-100 ">
            <img src={headerLogo} alt="headerLogo" className="lg:h-[80px]" />
          </div>
        </Link>
        <div className="xl:ml-[100px] lg:flex  lg:gap-x-[40px] xl:gap-x-[70px] xl:text-[24px] font-rosario justify-center items-center">
          {headerTitles.map((title) => (
            <div key={title.id}>
              <ul>
                {title.lense ? (
                  <img
                    src={title.lense}
                    alt="searchIcon"
                    className="lg:h-[30px]"
                  />
                ) : (
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

                    {title.img ? <img src={title.img} alt="toggle" /> : ""}
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;

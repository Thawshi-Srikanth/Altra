import React from "react";
import headerTitles from "../assets/data/headerTitles";
import headerLogo from "../assets/images/headerLogo.png";
import headerLogoText from "../assets/images/headerLogoText.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="lg:flex lg:flex-row lg:h-100 lg:shadow-[10px_10px_10px_rgba(0,_0,_0,_0.3)] ">
      <div className="lg:flex lg:flex-row xl:pl-[86px] xl:pr-[86px] lg:pt-[10px] lg:pb-[10px]">
        {" "}
        <div className="lg:flex lg:flex-row lg:scale-75 xl:scale-100 ">
          <img src={headerLogo} alt="headerLogo" />
          <img src={headerLogoText} alt="headerLogoText" />
        </div>
        <div className="xl:ml-[100px] lg:flex  lg:gap-x-[40px] xl:gap-x-[70px] xl:text-[24px] font-rosario justify-center items-center">
          {" "}
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
                      {" "}
                      <p
                        className={`${
                          title.color ? `${title.color}` : "xl:text-[17px] 2xl:text-[22px]"
                        }`}
                      >
                        {title.name}
                      </p>
                    </Link>

                    {title.img ? (
                      <img src={title.img} alt="toggle"  />
                    ) : (
                      ""
                    )}
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

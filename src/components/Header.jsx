import React from "react";
import headerTitles from "../assets/data/headerTitles";
import headerLogo from "../assets/images/headerLogo.png";
import headerLogoText from "../assets/images/headerLogoText.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="lg:flex lg:flex-row lg:h-100 lg:shadow-[10px_10px_10px_rgba(0,_0,_0,_0.3)]">
      <div className="lg:flex lg:flex-row lg:pl-[86px] lg:pr-[86px] lg:pt-[10px] lg:pb-[10px]">
        {" "}
        <div className="lg:flex lg:flex-row  ">
          <img src={headerLogo} alt="headerLogo" />
          <img src={headerLogoText} alt="headerLogoText" />
        </div>
        <div className="lg:ml-[100px] lg:flex lg:gap-x-[70px] lg:text-[24px] font-rosario justify-center items-center">
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
                          title.color ? `${title.color}` : ""
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

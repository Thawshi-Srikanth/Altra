import React from "react";
import footerLogo from "../assets/images/Footer/footerLogo.png";
import social from "../assets/data/social";
import headerTitles from "./../assets/data/headerTitles";
import { Link } from "react-router-dom";
import Line from "../assets/images/Footer/Line/Line.png";

function Footer() {
  const itemsToExclude = ["Products", "Research", "Search"];

  const titles = headerTitles.filter(
    (title) => !itemsToExclude.includes(title.name)
  );
  console.log(titles);
  return (
    <div className=" ">
      <div className="bg-[#2D2D2D] lg:grid lg:grid-cols-3 lg:h-[400px]">
        <div className="flex flex-col justify-center xl:ml-[100px] ">
          <div>
            <img src={footerLogo} alt="" className="lg:mt-[-15px]" />
          </div>

          <div className="flex lg:gap-[12px] lg:mt-[12px] lg:mb-[20px]">
            {social.map((social) => (
              <Link key={social.id} to={social.path} target="blank">
                {" "}
                <img src={social.image} alt={social.name} />
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3  lg:gap-x-[70px] relative right-[50px] ">
          <div className="items-center lg:top-[40px] relative lg:mt-[-17px]">
            {titles.map((title) => (
              <Link to={title.path} key={title.id} className="">
                <p className="text-white font-rosario xl:text-[25px] lg:text-[25px] lg:my-[17px] text-nowrap">
                  {title.name}
                </p>
                <img src={title.image} alt="" />
              </Link>
            ))}
          </div>
          <div className="lg:top-[40px] lg:mt-[-17px] relative">
            <p className="text-white font-rosario lg:text-[25px] lg:my-[17px]">
              Products
            </p>
            <img src={Line} alt="line" />
            <p className="lg:text-[11px] text-nowrap lg:ml-[-30px] xl:ml-0 text-white wrap xl:scale-150 lg:scale-[125px]  relative left-[30px] lg:top-[15px] xl:top-[27px]">
              Equipment
              <br /> Chemical And Reagents <br /> Consumable Filter Papers
              <br /> Lab Furniture
            </p>
          </div>
          <div className="lg:top-[40px] lg:mt-[-17px] relative lg:left-[40px]">
            <p className="text-white font-rosario lg:text-[25px] lg:my-[17px]">
              Research
            </p>
            <img src={Line} alt="line" />
            <p className="lg:text-[11px] text-white wrap xl:scale-150  lg:scale-[125px] relative left-[30px] xl:top-[23px] lg:top-[15px] lg:ml-[-30px] xl:ml-0 text-nowrap">
              Research Support <br />
              Expression Of Interest <br />
              Grants
            </p>
          </div>
        </div>
        <div className="lg:top-[50px]  relative lg:right-[50px]  xl:right-0">
          <div className="lg:left-[130px] relative">
            <p className="text-white font-rosario lg:text-[25px] lg:my-[17px] ">
              <span className="xl:pl-[80px] lg:left-[70px] relative xl:left-0">
                Address:
              </span>
              <br /> 18/2 Lorem Ipsum Land <br />
              <span className="lg:pl-[60px]">Colombo - 05</span>
            </p>
            <img
              src={Line}
              alt="line"
              className="lg:w-[250px] relative lg:bottom-[5px]"
            />
            <p className="text-white font-rosario lg:text-[25px] lg:my-[17px] lg:pl-[60px] relative bottom-[10px]">
              <span className="lg:pl-[30px]">
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
      <div className="bg-[#666666] lg:h-[55px]   ">
        <div className="flex justify-between font-rosario  lg:text-[17px] lg:top-[15px] relative">
          {" "}
          <p className="relative left-[45px] ">
            Copyright2024 | Altra Scientific Private Limited | All rights
            reserved
          </p>
          <p className="relative right-[60px]">
            | Crafted by Arrow Reach Digital
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

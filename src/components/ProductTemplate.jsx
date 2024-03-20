import React from "react";
import MemoRizedClientele from "../pages/Clientele";
import ClientLogos from "./ClientLogos";
import EquipmentClients from "../pages/Equipments/EquipmentClients";
import MemoRizedClientele2 from "../pages/ClienteleSm";
import { Link, useNavigate } from "react-router-dom";

function ProductTemplate({
  id,
  imgOne,
  imgTwo,
  imgThree,
  imgOneMob,
  imgTwoMob,
  nextpath,
}) {
  const navigate = useNavigate();

  return (
    <div>
      <img src={imgOne} alt="equipment" className="w-full relative top-7 sm:top-0 " />
      <img src={imgTwo} alt="detail" className="mx-auto w-full relative top-8 sm:top-0 " />

      <div className="bg-[#FF8A3A]  md:mb-[-80px] mb-[0px]">
        {/* {id == 1 && <ClientLogos>{<EquipmentClients />}</ClientLogos>} */}
        <Link to={`/productCatelgoue/${nextpath}`} className="">
          {" "}
          <img
            src={imgThree}
            className=" mx-auto justify-center items-center relative lg:top-20 sm:top-[50px] top-[60px] lg:w-[650px] lg:h-[188px] md:w-[600px] md:h-[148px] sm:w-[400px] sm:h-[100px] w-[190px] h-[55px]"
          />
        </Link>
        <div className="sm:hidden bg-[#FF8A3A] h-[150px]"></div>
        <div className="   relative  md:top-0 md:block hidden">
          {" "}
          <MemoRizedClientele />
        </div>
        <div className="sm:block hidden overflow-x-hidden md:hidden relative sm:top-[20px] top-[60px] overflow-y-hidden ">
          <MemoRizedClientele2 />
        </div>
      </div>
    </div>
  );
}

export default ProductTemplate;

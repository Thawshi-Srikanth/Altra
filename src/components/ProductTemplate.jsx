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
      <img src={imgOne} alt="equipment" className="w-full " />
      <img src={imgTwo} alt="detail" className="mx-auto " />

      <div className="bg-[#FF8A3A]  lg:md:mb-[-80px]">
        {/* {id == 1 && <ClientLogos>{<EquipmentClients />}</ClientLogos>} */}
        <Link to={`/productCatelgoue/${nextpath}`}>
          {" "}
          <img
            src={imgThree}
            className="mx-auto justify-center items-center relative top-20 lg:w-[650px] lg:h-[188px]"
          />
        </Link>

        <div className="   relative  md:top-0 md:block hidden">
          {" "}
          <MemoRizedClientele />
        </div>
        <div className=" overflow-x-hidden md:hidden relative sm:top-[20px] top-[60px] overflow-y-hidden ">
          <MemoRizedClientele2 />
        </div>
      </div>
    </div>
  );
}

export default ProductTemplate;

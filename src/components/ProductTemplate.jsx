import React from "react";
import MemoRizedClientele from "../pages/Clientele";
import ClientLogos from "./ClientLogos";
import EquipmentClients from "../pages/Equipments/EquipmentClients";
import MemoRizedClientele2 from "../pages/ClienteleSm";

function ProductTemplate({ id, imgOne, imgTwo, imgOneMob, imgTwoMob }) {
  return (
    <div>
      <img src={imgOne} alt="equipment" className="w-full sm:block hidden" />
      <img src={imgTwo} alt="detail" className="mx-auto sm:block hidden" />
      <img src={imgOneMob} alt="equipment" className="w-full sm:hidden" />
      <img src={imgTwoMob} alt="detail" className="mx-auto sm:hidden" />

      <div className="bg-[#FF8A3A]  lg:md:mb-[-80px]">
        {id == 1 && <ClientLogos>{<EquipmentClients />}</ClientLogos>}

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

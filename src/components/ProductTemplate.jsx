import React from "react";
import MemoRizedClientele from "../pages/Clientele";
import ClientLogos from "./ClientLogos";
import EquipmentClients from "../pages/Equipments/EquipmentClients";
import MemoRizedClientele2 from "../pages/ClienteleSm";
import { Link, useNavigate } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";

function ProductTemplate({
 
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgOneMob,
  imgTwoMob,
  nextpath,
  description,
  clients,
  MainNextpath
}) {


  const { setActualClient,setIndex ,actualClient} = userStateContext();
console.log(actualClient);
const forwardArrayIndex=(data)=>{
 
setActualClient(data.nextpath);
setIndex(data.index)
}
  return (
    <div>
      <img
        src={imgOne}
        alt="equipment"
        className="w-full relative top-7 sm:top-0 "
      />
      {/* <img
        src={imgTwo}
        alt="detail"
        className="mx-auto w-full relative top-8 sm:top-0 "
      /> */}
      <div className="flex justify-center mx-auto  xl:h-[365px]  md:-[130px] lg:h-[150px]  md:h-[140px]  sm:h-[140px] h-[128px] items-center">
        <p className="text-[8.96px] md:text-[16px] sm:text-[13px] lg:text-[20px] xl:w-[1227px] lg:w-[1200px] w-[366px] md:w-[810px]  sm:w-[530px] font-medium text-center font-rosario xl:text-[30px] items-center  relative mt-[27px] sm:mt-0">
          {description}
        </p>
      </div>

      <div className="bg-[#FF8A3A]  md:mb-[-80px] mb-[0px]">
        {/* {id == 1 && <ClientLogos>{<EquipmentClients />}</ClientLogos>} */}
        <div className="flex justify-evenly">
          {clients.map((client) => (
            <Link
              to={`/productCatelgoue/${MainNextpath}`}
              className="flex "
              key={client.id}
              onClick={()=>forwardArrayIndex(client)}
            >
              <img
                src={client.client}
                className="transition duration-500 hover:scale-125  mx-auto justify-center items-center relative lg:top-20 sm:top-[50px] top-[60px] lg:w-[342px] lg:h-[171px] md:w-[250px] md:h-[108px] sm:w-[200px] sm:h-[104px] w-[178px] h-[89px]"
              />
            </Link>
          ))}
          {/* {imgFour? (
            <Link>
              <img
                src={imgFour}
                className="transition duration-500 hover:scale-125  mx-auto justify-center items-center relative lg:top-20 sm:top-[50px] top-[60px] lg:w-[450px] lg:h-[188px] md:w-[250px] md:h-[108px] sm:w-[200px] sm:h-[104px] w-[178px] h-[89px]"
              />
            </Link>
          ):""}
          {imgThree ? (
            <Link>
              <img
                src={imgFive}
                className="transition duration-500 hover:scale-125  mx-auto justify-center items-center relative lg:top-20 sm:top-[50px] top-[60px] lg:w-[450px] lg:h-[188px] md:w-[250px] md:h-[108px] sm:w-[200px] sm:h-[104px] w-[178px] h-[89px]"
              />
            </Link>
          ):""} */}
        </div>

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

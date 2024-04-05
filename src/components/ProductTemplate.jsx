import React from "react";
import { Link } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";
import MemoRizedClientele from "../pages/Clientele";
import MemoRizedClientele2 from "../pages/ClienteleSm";

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
  MainNextpath,
}) {

  const pathName = location.pathname;
console.log(pathName)
  const { setActualClient, setIndex, actualClient,setCurrentPath } = userStateContext();

  console.log(MainNextpath);
  const equipmentMainPageSizes = [1, 3, 5, 7];
  const forwardArrayIndex = (data) => {
    console.log(actualClient);
    setActualClient(data.nextpath);
    setIndex(data.index);
      setCurrentPath(pathName);
  };
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

      <div className="bg-[#FF8A3A]  md:mb-[-80px] mb-[-50px] sm:mb-0">
        <div
          className={`flex justify-evenly mx-auto  
          
               ${
                 MainNextpath === "glassware" || MainNextpath === "plasticware"
                   ? "relative "
                   : " "
               }

          
          
          ${
            MainNextpath === "equipment"
              ? "    right-5  sm:right-0 px-[20px] sm:grid sm:grid-cols-4 grid grid-cols-2 sm:gap-x-0  sm:mx-[10px]  space-y-7 sm:space-y-5 md:space-y-14 md:right-2  xl:left-[-20px] 2xl:left-[-32px] relative  sm:space-x-5 2xl:space-x-0 2xl:mx-[60px]   2xl:space-y-10 items-baseline justify-center "
              : ""
          } 
          
          ${
            MainNextpath === "chemicatalogue"
              ? " grid grid-cols-2  mx-auto justify-center sm:flex xl:left-1 2xl:left-0 relative  "
              : ""
          }
          ${
            MainNextpath === "consumables"
              ? "grid grid-cols-2 sm:flex  mx-6 sm:mx-auto justify-center space-y-7 sm:space-y-0  items-baseline right- relative sm:right-0 xl:left-1 2xl:left-0 "
              : ""
          }
          xl:relative mx-auto xl:right-5  right-3`}
        >
          {clients.map((client) => (
            <Link
              to={`/productCatelgoue/${MainNextpath}`}
              className={`flex  ${
                MainNextpath === "equipment" ||
                (MainNextpath === "consumables" &&
                  "relative top-[-30px] sm:top-0  ")
              }`}
              key={client.id}
              onClick={() => forwardArrayIndex(client)}
            >
              <img
                src={client.client}
                className={`
 ${
   MainNextpath === "equipment" &&
   [2, 4, 6, 8].includes(client.id) &&
   "scale-x-105  sm:scale-100"
 }



                ${
                  MainNextpath === "equipment" ||
                  (MainNextpath === "consumables" &&
                    "relative left-[-1px] sm:left-0  ")
                }
                
                
                ${
                  MainNextpath === "equipment" &&
                  [1, 3, 5, 7, 9].includes(client.id)
                    ? "rounded-md w-[100px] h-[89px]  lg:h-[171px]  md:h-[101px] sm:h-[101px] lg:w-[206px] md:w-[116px] sm:w-[146px]  xl:max-w-[240px] xl:h-[123px] 2xl:h-[159px]  scale-x-75 sm:scale-100"
                    : "rounded-md xl:w-[342px]  xl:h-[171px] md:h-[101px] sm:h-[101px] lg:h-[171px]  "
                } 
                   ${
                     MainNextpath === "equipment" && client.id === 9
                       ? " xl:left-[490px]  2xl:left-[650px] lg:left-[370px] sm:left-[240px] md:mx-20 lg:mx-0 lg:ml-0 mx-auto left-[89px] "
                       : " "
                   }
                  
                   ${
                     MainNextpath === "equipment" && client.id === 9
                       ? "relative md:left-[190px] lg:left-0"
                       : " "
                   }
                   ${
                     MainNextpath === "equipment" && client.id === 5
                       ? "relative md:scale-x-110  md:left-[-10px] xl:scale-100  xl:left-[-10px] 2xl:left-0"
                       : " "
                   }
                    ${
                      MainNextpath === "equipment" &&
                      ![1, 3, 5, 7, 9].includes(client.id)
                        ? "relative md:scale-x-125 lg:scale-x-150   xl:scale-100  "
                        : " "
                    }


                   ${
                     MainNextpath === "consumables" &&
                     [1, 3].includes(client.id)
                       ? "w-[119px] h-[89px] sm:w-full sm:h-full scale-x-75 sm:scale-100 "
                       : " "
                   }
                   ${
                     MainNextpath === "consumables" &&
                     [2, 4].includes(client.id)
                       ? "scale-x-105  sm:scale-100 "
                       : " "
                   }
                   ${
                     MainNextpath === "equipment"
                       ? "xl:w-[342px] xl:h-[171px]"
                       : " "
                   }

${
  MainNextpath === "chemicatalogue" && client.id === 3
    ? "scale-90 sm:scale-100 w-[171px] h-[89px] relative mx-[125px]  sm:mx-0 mt-4 sm:mt-0 sm:top-0 left-24 sm:left-0 "
    : "scale-90 sm:scale-100 left-3 sm:left-0 w-[171px] h-[89px] xl:w-full xl:h-full md:w-[100px] md:h-[108px]  sm:w-[200px] sm:h-[104px] sm:px-5 "
}


                transition duration-500 hover:scale-125  mx-auto justify-center items-center relative lg:top-20 sm:top-[50px] top-[30px] lg:w-[342px] lg:h-[171px] md:w-[250px] md:h-[108px]  sm:w-[200px] sm:h-[104px] w-[178px] h-[89px]`}
              />
            </Link>
          ))}
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

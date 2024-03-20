import React from "react";

function FurnitureCataelogueImages({ catelogue }) {
console.log(catelogue);
const firstRow = catelogue.slice(0, 5);
const secondRow=catelogue.slice(5,9)
const thirdRow=catelogue.slice(9,11)
const mobileview=catelogue.slice(0,9)
  return (
    <div className="xl:space-y-[40px] lg:space-y-[40px] md:space-y-[30px] sm:space-y-[10px] relative xl:top-[30px] lg:top-[30px] sm:top-[20px] sm:mb-[170px] md:mb-0">
      {" "}
      <div className="flex xl:gap-x-[40px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[10px] justify-center">
        {firstRow.map((image) => (
          <div className="" key={image.id}>
            <img
              src={image.Catlogueimage}
              className="xl:w-[250px] xl:h-[335px]  sm:h-[150px] sm:w-[100px] md:h-[200px] md:w-[140px] lg:w-[150px] lg:h-[250px] border border-blue-gray-400 rounded-lg sm:block hidden"
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 mx-auto justify-center gap-y-3 relative top-3">
        {mobileview.map((image) => (
          <div className="sm:hidden mx-auto justify-center" key={image.id}>
            <img
              src={image.Catlogueimage}
              className="h-[161px] w-[111px] border border-blue-gray-400 rounded-lg "
              alt="Catalogue Image"
            />
          </div>
        ))}
      </div>
      <div className="flex xl:gap-x-[40px] lg:gap-x-[30px] sm:gap-x-[30px] md:gap-x-[10px] justify-center">
        {secondRow.map((image) => (
          <div className="" key={image.id}>
            <img
              src={image.Catlogueimage}
              className="xl:w-[250px] xl:h-[335px]  sm:h-[150px] sm:w-[100px] md:h-[200px] md:w-[140px] lg:w-[150px] lg:h-[250px] border border-blue-gray-400 rounded-lg sm:block hidden"
            />
          </div>
        ))}
      </div>
      <div className="flex xl:gap-x-[40px] lg:gap-x-[30px]  justify-center md:gap-x-[10px] relative top-7 sm:top-0 gap-x-6 mb-10 sm:mb-0">
        {thirdRow.map((image) => (
          <div className="px-1" key={image.id}>
            <img
              src={image.Catlogueimage}
              className="xl:w-[436px] xl:h-[335px] lg:w-[236px] lg:h-[235px] md:w-[200px] md:h-[150px] h-[139px] w-[181px] border border-blue-gray-400 rounded-lg"
            />
          </div>
        ))}
      </div>
      <p className="text-[14px] text-center font-rosario xl:text-[15px] text-[#666] mb-5 sm:mb-0">
        Copyrights- Catalog Method Fume Hood
      </p>
    </div>
  );
}

export default FurnitureCataelogueImages;

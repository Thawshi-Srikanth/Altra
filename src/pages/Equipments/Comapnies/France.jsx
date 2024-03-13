import React from "react";
import france from "../../../assets/images/BrandsIntro/France.png";
import FranceCatalogue from "../../../assets/data/FranceCatalogue.js";
function France() {
  return (
    <div className="">
      <img
        src={france}
        alt="france"
        className="w-full xl:h-[580px] h-[173px] lg:-[500px] md:h-[480px] sm:h-[420px] object-fill"
      />
      <div>
        <p className="xl:text-[50px] font-bold font-rosario text-[#ff8a3a] text-center mt-5 md:text-[30px] lg:text-[40px]">
          Product Catalogue
        </p>
        <div className="top-[20px] grid grid-cols-3 relative xl:top-[40px] md:top-[20px] 2xl:gap-y-[50px]   lg:gap-y-[130px] md:gap-y-[20px] sm:gap-y-[50px] gap-y-[20px] mb-[42px] lg:mb-[190px] xl:mb-[10px] lg:px-[10px]  xl:px-0 md:px-[10px] sm:px-[50px]">
          {FranceCatalogue.map((image) => (
            <div
              className="xl:w-[400px] xl:h-[400px] lg:w-[310px] lg:h-[210px] md:w-[230px] md:h-[230px]  sm:w-[180px] sm:h-[180px] w-[120px] h-[120px] mx-auto "
              key={image.id}
            >
              <img
                src={image.img}
                alt=""
                className="  "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default France;

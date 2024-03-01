import React, { useCallback } from "react";
import "react-html5video/dist/styles.css";
import bgVideo from "./assets/video/bgVideo.mp4";
import MemoRizedBrands from "./pages/Brands";
import Clientele from "./pages/Clientele";
import Commitment from "./pages/Commitment";
import HeroSection from "./pages/HeroSection";
import HeroText from "./pages/HeroText";
import Magnetic from "./pages/Magnetic";
import PhScale from "./pages/PhScale";
import MemoRizedProducts from "./pages/ShowProduct";
import MemoRizedClientele from "./pages/Clientele";

export default function Home() {
  const renderProfileImg = useCallback((element) => {
    switch (element) {
      case 0:
        return bgVideo;

      default:
        return "";
    }
  }, []);
  return (

    
      <div className="lg:mt-[0px]    w-screen relative lg:top-36 top-[80px]  ">
        <div className="h-full w-full overflow-x-hidden ">
          <video
            playsInline
            disablePictureInPicture="true"
            controlsList="nodownload"
            controls={false}
            src={renderProfileImg(0)}
            autoPlay={true}
            loop
            muted
            className="justify-end flex items-center absolute xl:h-[5700px]  2xl:h-[5600px] lg:h-[4100px] md:h-[2998px] sm:h-[2426px] h-[1750px] object-cover min-w-full "
          />
          <div className="relative bg-[#FF8A3A] bg-opacity-80 min-w-full ">
            <HeroSection />
            <HeroText />
            <MemoRizedBrands />
            <Commitment />
          
            <Magnetic />
            <MemoRizedProducts />
            <PhScale />
            <MemoRizedClientele />
        
          </div>
        </div>{" "}
      </div>

    //   <div className="lg:mt-[20px]  ">
    //   <video
    //     src={bgVideo}
    //     autoPlay="{true}"
    //     loop
    //     muted
    //     className=" absolute z-0 w-auto
    //         md:min-w-[768px]  lg:h-[3970px] max-w-none xl:h-[4670px]  2xl:h-[4679px] "
    //   />
  );
}

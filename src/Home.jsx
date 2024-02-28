import React, { useCallback } from "react";
import Brands from "./pages/Brands";
import Clientele from "./pages/Clientele";
import Commitment from "./pages/Commitment";
import HeroSection from "./pages/HeroSection";
import HeroText from "./pages/HeroText";
import Magnetic from "./pages/Magnetic";
import PhScale from "./pages/PhScale";
import ShowProduct from "./pages/ShowProduct";
import bgVideo from "./assets/video/bgVideo.mp4";
import "react-html5video/dist/styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
            className="justify-end flex items-center absolute   xl:h-[4680px] lg:h-[4020px] md:h-[2918px] sm:h-[2670px] h-[1810px] object-cover min-w-full "
          />
          <div className="relative bg-[#FF8A3A] bg-opacity-80 min-w-full ">
            <HeroSection />
            <HeroText />
            <Brands />
            <Commitment />
            <Magnetic />
            <ShowProduct />
            <PhScale />
            <Clientele />
        
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

import React from "react";
import Brands from "./pages/Brands";
import Clientele from "./pages/Clientele";
import Commitment from "./pages/Commitment";
import HeroSection from "./pages/HeroSection";
import HeroText from "./pages/HeroText";
import Magnetic from "./pages/Magnetic";
import PhScale from "./pages/PhScale";
import ShowProduct from "./pages/ShowProduct";
import bgVideo from "./assets/video/bgVideo.mp4"

export default function Home() {
  return (
    <div className="lg:mt-[20px]  ">
    <video
      src={bgVideo}
      autoPlay="{true}"
      loop
      muted
      className=" absolute z-0 w-auto  
          md:min-w-[768px]  lg:h-[3940px] max-w-none xl:h-[4670px]  2xl:h-[4679px] "
    />

    <div className="relative bg-[#FF8A3A] bg-opacity-80">
      <HeroSection />
      <HeroText />
      <Brands />
      <Commitment />
      <Magnetic />
      <ShowProduct />
      <PhScale />
      <Clientele />
    </div>
  </div>
   
  );
}

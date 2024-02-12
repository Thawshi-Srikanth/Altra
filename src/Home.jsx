import React from "react";
import HeroSection from "./pages/HeroSection";
import HeroText from "./pages/HeroText";
import Brands from "./pages/Brands";
import Commitment from "./pages/Commitment";
import bgVideo from "./assets/video/bgVideo.mp4";
import Magnetic from "./pages/Magnetic";
import Clientele from "./pages/Clientele";
export default function Home() {
  return (
    <div className="lg:mt-[20px] overflow-x-hidden">
      <video
        src={bgVideo}
        autoPlay="{true}"
        loop
        muted
        className=" absolute z-0 w-auto  
            min-w-full h-[4000px] max-w-none overflow-x-hidden "
      />

      <div className="relative ">
        <HeroSection />
        <HeroText />
        <Brands />

        <Commitment />
        <Magnetic/>
        <Clientele/>
      </div>
    </div>
  );
}

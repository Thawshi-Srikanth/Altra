import React from "react";
import HeroSection from "./pages/HeroSection";
import HeroText from "./pages/HeroText";
import Brands from "./pages/Brands";
import Commitment from "./pages/Commitment";
import bgVideo from "./assets/video/bgVideo.mp4";
export default function Home() {
  return (
    <div>
     
   
        <video
          src={bgVideo}
          autoPlay="{true}"
          loop
          muted
          className=" absolute z-0 w-auto  
            min-w-full  max-w-none"
        />
        <div className="relative">
        <HeroSection />
          <HeroText />
          <Brands />
          <Commitment />
        </div>
  
    </div>
  );
}

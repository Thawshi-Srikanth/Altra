import React from "react";
import researchVideo from "../assets/video/research.mp4";
import researchPoster from "../assets/images/Research/poster.png";
import research from "../assets/images/Research/Research.png";
import researchMob from "../assets/images/Research/ResearchMOb.png";
function ResearchVideo() {
  return (
    <div>
      {" "}
      <video
        src={researchVideo}
        className=" object-cover w-full 2xl:h-[700px] lg:h-[600px] md:h-[400px] sm:h-[300px] h-[209px] relative top-7 sm:top-0 "
        alt="research"
        playsInline
        disablePictureInPicture="true"
        controlsList="nodownload"
        controls={false}
        loop
        muted
        autoPlay
        poster={researchPoster}
      />
      <div className="sm:block hidden xl:bottom-60 lg:bottom-60 mdBottom   xlBottomResearch xl:left-[630px] lg:left-[500px]   left-4 mx-auto justify-center  absolute ">
        <img
          src={research}
          className="sm:justify-end   object-cover 2xl:w-[689px] xl:w-[640px] xl:h-[190px] lg:w-[500px]  lg:h-[150px] md:w-[390px] sm:w-[300px] sm:h-[100px] w-[325px] h-[60px] mx-auto justify-center rounded-md relative xl:right-5 xl:top-4 2xl:top-20"
          alt="research"
        />
      </div>
      <div className="sm:hidden mobBottom   mx-auto justify-center  absolute flex">
        <img
          src={researchMob}
          className=" relative left-1 object-cover   w-[300px] h-[60px] mx-auto justify-center rounded-md"
          alt="research"
        />
      </div>
    </div>
  );
}

export default ResearchVideo;

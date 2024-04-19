import React from "react";
import researchVideo from "../assets/video/research.mp4";
function ResearchVideo() {
  return (
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
      // poster={researchPoster}
    />
  );
}

export default ResearchVideo;

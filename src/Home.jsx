import React, { Suspense, lazy, useCallback, useEffect, useState } from "react";
import "react-html5video/dist/styles.css";
import bgVideo from "./assets/video/bgVideo.mp4";
import delayForDemo from "./components/Delay";
import Loader from "./components/Loader";
import Commitment from "./pages/Commitment";
import HeroSection from "./pages/HeroSection";
import HeroText from "./pages/HeroText";
import MagnetDesktop from "./pages/MagnetDesktop";
import Magnetic from "./pages/Magnetic";
import PhScale from "./pages/PhScale";
import Phdekstop from "./pages/Phdekstop";

export default function Home() {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [pageLoaded, setPageLoaded] = useState(false);

  const LazyBrands = lazy(() => {
    if (pageLoaded == true) {
      return import("./pages/Brands");
    } else {
      setPageLoaded(true);
      return delayForDemo(import("./pages/Brands"), 3500);
    }
  });

  const LazyClientle = lazy(() => {
    if (pageLoaded == true) {
      return import("./pages/Clientele");
    } else {
      setPageLoaded(true);
      return delayForDemo(import("./pages/Clientele"), 3500);
    }
  });
  const LazyProducts = lazy(() => {
    if (pageLoaded == true) {
      return import("./pages/ShowProduct");
    } else {
      setPageLoaded(true);
      return delayForDemo(import("./pages/ShowProduct"), 3500);
    }
  });

  const renderProfileImg = useCallback((element) => {
    switch (element) {
      case 0:
        return bgVideo;

      default:
        return "";
    }
  }, []);
  return (
    <div className="lg:mt-[0px]    w-screen relative lg:top-30 sm:top-[80px] top-[50px]  overflow-y-hidden ">
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
          className="justify-end flex items-center absolute xl:h-[4964px]   lg:h-[4150px] md:h-[3158px] sm:h-[2456px] h-[1790px] object-cover min-w-full "
        />
        <div className="relative bg-[#FF8A3B] bg-opacity-80 min-w-full ">

          <HeroSection />
          <HeroText />
          <Suspense fallback={<Loader />}>
            <LazyBrands />
          </Suspense>

          <Commitment />
<MagnetDesktop/>
          <Magnetic />
          <Suspense fallback={<Loader />}>
            <LazyProducts />
          </Suspense>
<Phdekstop/>
          <PhScale />
          <Suspense fallback={<Loader />}>
            {" "}
            <LazyClientle />
          </Suspense>
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

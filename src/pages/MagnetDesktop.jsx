import React from 'react'
import FactDesk from "../assets/images/Magnet/FactDesk.png";
function MagnetDesktop() {
  return (
    <div className="flex mx-auto justify-center xl:scale-90">
      <img
        src={FactDesk}
        alt=""
        className="xl:block hidden relative w-full  mx-auto  xl:scale-90 items-center justify-center left-10"
      />
    </div>
  );
}

export default MagnetDesktop
import React from 'react'
import phDekstop from "../assets/images/Phmeter/phdekstop.png"
function Phdekstop() {
  return (
    <div className="flex mx-auto justify-center">
      <img
        src={phDekstop}
        alt=""
        className="xl:block hidden relative px-5 w-3/4  mx-auto   items-center justify-center scale-125 xl:left-3 2xl:left-0 "
      />
    </div>
  );
}

export default Phdekstop
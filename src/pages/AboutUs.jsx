import React, { useEffect } from 'react'

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='text-center mt-[100px]'>AboutUs</div>
  )
}

export default AboutUs
import React from 'react'
import badge from "../assets/Rating Badge.svg"
import video from "../assets/services-video.mp4"
import {useNavigate} from "react-router-dom"
import {useRef , useEffect} from "react"
const Hero = () => {
  const navigate = useNavigate("/contact")
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5; 
    }
  }, []);
  return (
    <>
    <div className="w-full h-[90vh] justify-center text-center
     align-items-center flex flex-col gap-6 px-5 py-8 my-20">
    <div className="flex justify-center"><img src={badge} alt="" /></div>
  <h1 className="mb-4 text-4xl text-center font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
    ALL IN ONE TECH SOLUTIONS <br /> FOR BUSINESSES
  </h1>
  <p className="mb-6 text-lg font-normal text-center text-body lg:text-xl sm:px-16 xl:px-48 ">
    Webcools builds modern websites, premium branding, custom software solutions, and powerful digital experiences for startups and businesses worldwide.
  </p>
  <div className="justify-center bg-dark lg:mx-[44%] mx-auto">
  <button onClick={() => navigate("/contact")}
  
        type="button"
        className="text-white bg-[#fd6f00] font-bold tracking-wide rounded-full text-sm px-6 py-3 w-37.5 outline-none hover:transform hover:scale-110 transition-all duration-300 ease-in-out justify-center items-center
         "
      >
        GET STARTED
      </button>
      </div>




      </div>
      <div className="max-w-4xl mx-auto overflow-hidden rounded-xl -my-30">
  <video 
  ref={videoRef}
    src={video} 
    className="w-full h-auto object-cover"
    autoPlay 
    loop 
    muted 
    playsInline
  />
</div>
</>
  )
}

export default Hero
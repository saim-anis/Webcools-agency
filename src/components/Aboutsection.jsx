import React from 'react'

const Aboutsection = () => {
  return (
    <div id="Aboutsection" className="mt-40 mx-auto py-12 px-4 w-[80vw] text-center" >
      <h1 className="text-5xl font-bold">About <span className="text-[#fd6f00] font-2xl">Webcools</span></h1>
      <p className="text-center mb-3">Creative Digital Solutions Designed For Ambitious Brands.</p>
      <div className='sm:text-2xl text-1xl sm:flex block  my-32  text-left py-2 gap-3'>
        <div className="w-full px-8 py-8 mb-8 border-2 rounded-2xl text-white">
          <h2 className='font-bold my-2 text-center'>Who we are?</h2>
          <p>Webcools is a creative agency specialicing in Website Design, Branding, UI/UX and Digital Marketing.We help businesses create strong online identities and achieve measurable goals.</p>
        </div>
        <div className="w-full px-8 py-8 mb-8 border-2 rounded-2xl text-white">
          <h2 className='text-center font-bold my-2'>Our Mission</h2>
          <p>To empower businesses with modern digital experiences that built trust, generate leads and create long-term success.</p>
        </div>
      </div>
      </div>
  )
}

export default Aboutsection
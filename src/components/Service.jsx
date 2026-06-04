import React from 'react'
import react from '../assets/reactdev.jpg'
import digital from '../assets/digitalmarketing.png'
import seo from '../assets/SEO.jpg'
import ui from '../assets/UI_Design.jpg'
import ecom from '../assets/Ecoomerce.jpg'
import bi from '../assets/Brand_Identity.jpg'
import wp from '../assets/wp.jpg'
const Service = () => {
  return ( 
    
     <div id="Services" className=" mx-auto  px-4 w-[80vw] text-center text-2xl sm:text-[25px]" >
      <h2 className="text-5xl font-bold">Creative <span className="text-[#fd6f00] font-2xl italic">Services </span> That drive digital results.</h2>
      {/* <p className="text-center mb-3">Creative Digital Solutions Designed For Ambitious Brands.</p> */}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:text-2xl text-[20px] my-32 text-left py-2 gap-3'>
      
       {/* ----custom web dev */}
       <div className=" block max-w-sm p-6 border border-default rounded shadow-xs">
  
    <img className="rounded-2xl hover:rotate-1" src={react} alt="" />
  
  
    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
      Custom Web Development.
    </h5>
 
  <p className="mb-6 text-body">
    Custom responsive website built for performance.
  </p>
  
   
</div>
{/* -----ecom  */}
 <div className=" block max-w-sm p-6 border border-default rounded-base shadow-xs">
  
    <img className="rounded-2xl hover:rotate-1" src={ecom} alt="" />
  
  
    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
      Ecommerce Store
    </h5>
 
  <p className="mb-6 text-body">
     To empower businesses with modern Stores. We built stores in shopify, woocomerce and custom.
  </p>
  
   
</div>
{/* ----ui ux  */}

 <div className=" block max-w-sm p-6 border border-default rounded-base shadow-xs">
  
    <img className="rounded-2xl hover:rotate-1" src={ui} alt="" />
  
  
    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
      UI/UX Design
    </h5>
 
  <p className="mb-6 text-body">
    User focused designs that improve engagement and conversions.

  </p>
  
   
</div>
{/* -----branding */}
 <div className=" block max-w-sm p-6 border border-default rounded-base shadow-xs">
  
    <img className="rounded-2xl hover:rotate-1" src={bi} alt="" />
  
  
    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
      Brand Identity
    </h5>
 
  <p className="mb-6 text-body">
    
Proffesional branding solutions that makes businesses memorable.
  </p>
  
   
</div>
{/* ------seo */}
     <div className=" block max-w-sm p-6 border border-default rounded-base shadow-xs">
  
    <img className="rounded-2xl hover:rotate-1" src={seo} alt="" />
  
  
    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
     SEO Optimization
    </h5>
 
  <p className="mb-6 text-body">
   
Increase visiblity and drive organic traffic to your website.
  </p>
  
   
</div>
{/* --marketing */}
<div className=" block max-w-sm p-6 border border-default rounded-base shadow-xs">
  
    <img className="rounded-2xl hover:rotate-1" src={digital} alt="" />
  
  
    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
      Digital Marketing
    </h5>
 
  <p className="mb-6 text-body">
  
Data driven marketing campaigns generates real results.
  </p>
  
   
</div>
      </div>
      </div>


      
  )
}

export default Service
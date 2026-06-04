import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutsection from '../components/Aboutsection'
import Service from '../components/Service'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import TestimonialMarquee from '../components/TestimonialMarquee'

function Home() {
  return (
  
   <>
    <Navbar/>
    <Hero/>
    <Aboutsection/>
   <Service/>
   <Counter/>
   <TestimonialMarquee/>
   <Footer/>
   
</>

  )

}

export default Home
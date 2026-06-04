import { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import logo from "../assets/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: 'Home', action: () => { setIsOpen(false); navigate('/') } },
    { label: 'About', action: () => scrollToSection('Aboutsection') },
    { label: 'Services', action: () => scrollToSection('Services') },
    { label: 'Testimonials', action: () => scrollToSection('TestimonialMarquee') },
    { label: 'Contact', action: () => { setIsOpen(false); navigate('/contact') } },
  ]

  return (
    <nav className="bg-[#0a012d] fixed w-full z-20 top-0 inset-x-0 border-b border-default">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-6">

        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-12" alt="Webcools Logo" />
        </a>

        <div className="flex items-center gap-3 md:order-2">
          <button
            type="button"
            onClick={() => {
              const phone = "923150634015"
              const message = encodeURIComponent("How much for a business website?")
              window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
            }}
            className="text-white bg-[#fd6f00] font-bold tracking-wide rounded-full text-sm px-4 py-3 hover:scale-110 transition-all duration-300"
          >
            GET A QUOTE
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-9 h-9 justify-center text-white rounded md:hidden"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14"/>
              </svg>
            )}
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="text-white font-normal flex flex-col p-4 md:p-0 mt-4 md:mt-0 border border-default rounded md:border-0 md:flex-row md:space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={item.action}
                  className="block w-full text-left py-2 px-3 hover:text-[#fd6f00] transition-colors duration-200 md:p-0"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
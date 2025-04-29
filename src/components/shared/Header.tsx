import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui"
import { BiMenu, BiX } from "react-icons/bi"
import HcfSignupPopup from "@/components/shared/Popups/HcfSignupPopup"

interface HeaderProps {
  scrollToSection?: (ref: React.RefObject<HTMLElement>) => void
  featuresRef?: React.RefObject<HTMLElement>
  aboutRef?: React.RefObject<HTMLElement>
  contactRef?: React.RefObject<HTMLElement>
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, featuresRef, aboutRef, contactRef }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>GoGetWell.AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-purple-600" : "text-gray-100 hover:text-white"}`}>
              Home
            </Link>
            {featuresRef && scrollToSection && (
              <button 
                onClick={() => scrollToSection(featuresRef)}
                className={`font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-purple-600" : "text-gray-100 hover:text-white"}`}
              >
                Features
              </button>
            )}
            {aboutRef && scrollToSection && (
              <button 
                onClick={() => scrollToSection(aboutRef)}
                className={`font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-purple-600" : "text-gray-100 hover:text-white"}`}
              >
                About
              </button>
            )}
            {contactRef && scrollToSection && (
              <button 
                onClick={() => scrollToSection(contactRef)}
                className={`font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-purple-600" : "text-gray-100 hover:text-white"}`}
              >
                Contact
              </button>
            )}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className={`font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-purple-600" : "text-gray-100 hover:text-white"}`}>
              Login
            </Link>
            <HcfSignupPopup
              popupButtonStatus
              buttonChildren={
                <Button
                  variant="solid"
                  className={`rounded-lg ${
                    scrolled 
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                      : "bg-white text-purple-600"
                  } hover:shadow-lg px-6 py-2 transition-all duration-300`}
                >
                  Get Started
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? 
              <BiX size={24} className={scrolled ? "text-gray-900" : "text-white"} /> : 
              <BiMenu size={24} className={scrolled ? "text-gray-900" : "text-white"} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-4 py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-800 hover:text-purple-600 font-medium" onClick={toggleMobileMenu}>
                Home
              </Link>
              {featuresRef && scrollToSection && (
                <button 
                  onClick={() => {
                    scrollToSection(featuresRef);
                    toggleMobileMenu();
                  }}
                  className="text-left text-gray-800 hover:text-purple-600 font-medium"
                >
                  Features
                </button>
              )}
              {aboutRef && scrollToSection && (
                <button 
                  onClick={() => {
                    scrollToSection(aboutRef);
                    toggleMobileMenu();
                  }}
                  className="text-left text-gray-800 hover:text-purple-600 font-medium"
                >
                  About
                </button>
              )}
              {contactRef && scrollToSection && (
                <button 
                  onClick={() => {
                    scrollToSection(contactRef);
                    toggleMobileMenu();
                  }}
                  className="text-left text-gray-800 hover:text-purple-600 font-medium"
                >
                  Contact
                </button>
              )}
              <div className="pt-2 border-t border-gray-200">
                <Link to="/login" className="block text-gray-800 hover:text-purple-600 font-medium mb-4">
                  Login
                </Link>
                <HcfSignupPopup
                  popupButtonStatus
                  buttonChildren={
                    <Button
                      block
                      variant="solid"
                      className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg py-2 transition-all duration-300"
                    >
                      Get Started
                    </Button>
                  }
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

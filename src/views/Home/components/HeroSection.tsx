"use client"

import type React from "react"
import { motion } from "framer-motion"
import { BiChevronDown } from "react-icons/bi"
import { Button } from "@/components/ui"
import HcfSignupPopup from "@/components/shared/Popups/HcfSignupPopup"

interface HeroSectionProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void
  featuresRef: React.RefObject<HTMLElement>
  contactRef: React.RefObject<HTMLElement>
  aboutRef: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection, featuresRef, contactRef, aboutRef }) => {
  return (
    <div className="relative bg-gradient-to-br from-[#01052f] to-[#0c1654] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#01052f] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        {/* Animated particles/dots effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 6 + 2 + "px",
                height: Math.random() * 6 + 2 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Removed HomeNavbar since we're using the new Header component */}
      
      <div className="relative min-h-[100vh] flex items-center pt-16">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Content Section */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium"
              >
                Revolutionizing Healthcare Management
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  AI Front Office
                </span>{" "}
                <br />
                for Healthcare Agents
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Create your <span className="font-semibold text-purple-300">AI Store</span> in minutes and scale your
                healthcare business with <span className="font-semibold text-purple-300">Digital Marketing</span> that
                works.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <HcfSignupPopup
                  popupButtonStatus
                  buttonChildren={
                    <Button
                      block
                      variant="solid"
                      className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Started
                    </Button>
                  }
                />

                <Button
                  block
                  variant="plain"
                  className="rounded-lg border border-gray-600 hover:border-white text-white px-8 py-3 text-lg font-medium transition-all duration-300"
                  onClick={() => scrollToSection(featuresRef)}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-4xl font-bold text-white mb-2">
                      2100<span className="text-purple-400">+</span>
                    </h3>
                    <p className="text-gray-300">Qualified Doctors</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-4xl font-bold text-white mb-2">
                      1000<span className="text-purple-400">+</span>
                    </h3>
                    <p className="text-gray-300">Hospitals</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-4xl font-bold text-white mb-2">
                      800<span className="text-purple-400">+</span>
                    </h3>
                    <p className="text-gray-300">Treatment Plans</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          onClick={() => scrollToSection(featuresRef)}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <BiChevronDown size={24} />
          </div>
        </motion.div>
      </div>

      {/* Add a subtle wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-white"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,136.33,111.31,213.25,91.5c31.83-8.15,62.6-18.64,97.95-24.34Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default HeroSection

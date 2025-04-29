"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Header from "@/components/shared/Header"
import HeroSection from "./components/HeroSection"
import HomeFAQs from "./components/HomeFAQ"
import ContactForm from "./components/ContactForm"
import MainFooter from "./components/MainFooter"
import InfoSection from "./components/InfoSection"
import FeaturesGrid from "./components/FeaturesGrid"
import Testimonials from "./components/Testimonials"
import TrustedBy from "./components/TrustedBy"

const Home: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    let lastScrollTop = 0

    const handleScroll = () => {
      const hcf = document.querySelector(".hcf-profile")
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        hcf?.classList.add("hcf-profile-fixed")
      } else if (scrollTop < lastScrollTop) {
        hcf?.classList.remove("hcf-profile-fixed")
      }

      lastScrollTop = scrollTop
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation variants for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header 
        scrollToSection={scrollToSection}
        featuresRef={featuresRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />
      <HeroSection
        scrollToSection={scrollToSection}
        featuresRef={featuresRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-white py-16"
      >
        <TrustedBy />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16"
        ref={featuresRef}
      >
        <FeaturesGrid />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-white py-16"
        ref={aboutRef}
      >
        <InfoSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16"
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-white py-16"
      >
        <HomeFAQs />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-gradient-to-br from-purple-50 to-blue-50 py-16"
        ref={contactRef}
      >
        <ContactForm />
      </motion.div>

      <MainFooter />
    </div>
  )
}

export default Home

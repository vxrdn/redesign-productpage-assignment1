"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

const TrustedBy: React.FC = () => {
  const partners = [
    { name: "Apollo Hospitals", logo: "/img/logo/apollo.jpg" },
    { name: "Max Healthcare", logo: "/img/logo/max.jpg" },
    // { name: "Fortis Healthcare", logo: "/img/logo/placeholder-logo.svg" },
    { name: "Medanta", logo: "/img/logo/medanta.jpg" },
    { name: "Narayana Health", logo: "/img/logo/naratana.jpeg" },
  ]

  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "placeholder.svg"; // Fallback image
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted By Leading Healthcare Providers</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="grayscale hover:grayscale-0 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src={`${partner.logo}` || "/images/placeholder.svg"} 
              alt={partner.name} 
              className="h-12 md:h-16 object-contain"
              onError={handleImageError}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default TrustedBy

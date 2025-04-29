"use client"

import type React from "react"
import { motion } from "framer-motion"
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from "react-icons/bi"
import { BsDatabase } from "react-icons/bs"
import { FaUserSecret } from "react-icons/fa"
import { FiFileText } from "react-icons/fi"
import { LuLanguages } from "react-icons/lu"

const solutions = [
  {
    icon: <BiGlobeAlt size={24} />,
    title: "Custom AI-Powered Website",
    description:
      "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "bg-blue-500",
  },
  {
    icon: <FaUserSecret size={24} />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "bg-purple-500",
  },
  {
    icon: <BiMessageSquare size={24} />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    color: "bg-green-500",
  },
  {
    icon: <FiFileText size={24} />,
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "bg-orange-500",
  },
  {
    icon: <BiTrendingUp size={24} />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "bg-pink-500",
  },
  {
    icon: <BsDatabase size={24} />,
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    color: "bg-indigo-500",
  },
  {
    icon: <LuLanguages size={24} />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    color: "bg-red-500",
  },
  {
    icon: <BiCreditCard size={24} />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    color: "bg-teal-500",
  },
  {
    icon: <BiSearch size={24} />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    color: "bg-cyan-500",
  },
]

const FeaturesGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Solutions</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Powerful tools designed to transform your healthcare practice with AI-driven efficiency
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl relative group"
          >
            <div className="p-8">
              <div
                className={`${solution.color} inline-flex p-4 rounded-xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
            <div
              className={`h-1 w-full ${solution.color} opacity-75 absolute bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
            ></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default FeaturesGrid

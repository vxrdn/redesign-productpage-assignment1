"use client"

import type React from "react"
import { motion } from "framer-motion"

interface TestimonialProps {
  quote: string
  name: string
  title: string
  image: string
}

const testimonials: TestimonialProps[] = [
  {
    quote:
      "GoGetWell.AI has completely transformed how I manage my healthcare practice. The AI-powered website and patient management tools have increased my patient conversions by 40%.",
    name: "Dr. Rajesh Kumar",
    title: "Cardiologist, Apollo Hospitals",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "As a healthcare facilitator, I was struggling with managing patient inquiries and follow-ups. The AI agent handles all routine questions, allowing me to focus on providing personalized care.",
    name: "Priya Sharma",
    title: "Healthcare Facilitator, Max Healthcare",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The multilingual support feature has been a game-changer for our international patients. We've seen a significant increase in patient satisfaction and engagement.",
    name: "Dr. Ananya Patel",
    title: "Medical Tourism Specialist",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, image }) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <svg
          className="h-12 w-12 text-purple-400 opacity-25"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-600 flex-grow mb-6">{quote}</p>
      <div className="flex items-center">
        <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
    </div>
  </motion.div>
)

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from healthcare professionals who have transformed their practices with GoGetWell.AI
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Testimonial {...testimonial} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials

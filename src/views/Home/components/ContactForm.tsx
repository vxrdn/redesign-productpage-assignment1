"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button, Notification, toast } from "@/components/ui"
import { BiPhone, BiSend, BiUser } from "react-icons/bi"
import { BsLinkedin, BsTwitter } from "react-icons/bs"
import { CgMail } from "react-icons/cg"
import { Link } from "react-router-dom"

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<{
    fullname: string
    email: string
    subject: string
    message: string
  }>({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focused, setFocused] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsSubmitting(true)
      // await apiContactUs(formState)
      setTimeout(() => {
        setIsSubmitting(false)
        toast.push(
          <Notification title={"Success"} type={"success"}>
            Your message has been sent successfully. We'll get back to you soon!
          </Notification>,
        )
        setFormState({
          fullname: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 1000)
    } catch (err: any) {
      setIsSubmitting(false)
      toast.push(
        <Notification title={err?.response?.data.message || "Error"} type={"danger"}>
          {err?.response?.data.message || "Something went wrong. Please try again."}
        </Notification>,
      )
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions about GoGetWell.AI? Our team is here to help you transform your healthcare practice.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column - Contact Info */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's start a conversation</h3>
            <p className="text-gray-600 text-lg">
              Ready to revolutionize your healthcare practice? Contact us for personalized support and see how our AI
              solutions can help you grow.
            </p>
          </div>

          <div className="space-y-6">
            {/* Contact Details */}
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-4 rounded-lg shadow-md">
                <BiPhone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-500 font-medium">Phone</p>
                <a href="tel:+919811396858" className="text-gray-900 text-lg hover:text-purple-600 transition-colors">
                  +91 9811396858
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-4 rounded-lg shadow-md">
                <CgMail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-500 font-medium">Email</p>
                <a
                  href="mailto:hello@gogetwell.ai"
                  className="text-gray-900 text-lg hover:text-purple-600 transition-colors"
                >
                  hello@gogetwell.ai
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                to="https://x.com/gogetwellai"
                target="_blank"
                className="bg-purple-100 p-4 rounded-lg shadow-md hover:bg-purple-200 transition-colors"
              >
                <BsTwitter className="w-6 h-6 text-purple-600" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/gogetwellai/"
                target="_blank"
                className="bg-purple-100 p-4 rounded-lg shadow-md hover:bg-purple-200 transition-colors"
              >
                <BsLinkedin className="w-6 h-6 text-purple-600" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === "fullname" || formState.fullname ? "text-purple-600" : "text-gray-400"}`}
              >
                <BiUser className="w-5 h-5" />
              </div>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formState.fullname}
                onChange={handleChange}
                onFocus={() => setFocused("fullname")}
                onBlur={() => setFocused("")}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                required
              />
            </div>

            <div className="relative">
              <div
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === "email" || formState.email ? "text-purple-600" : "text-gray-400"}`}
              >
                <CgMail className="w-5 h-5" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formState.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                required
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                rows={5}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                required
              />
            </div>

            <Button
              loading={isSubmitting}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Send Message</span>
              <BiSend className="w-5 h-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactForm

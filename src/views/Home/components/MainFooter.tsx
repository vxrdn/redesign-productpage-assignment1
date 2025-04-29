import type React from "react"
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

interface LinkItem {
  text: string
  path: string
}

const MainFooter: React.FC = () => {
  const links: LinkItem[] = [
    { text: "Privacy Policy", path: "/privacy-policy" },
    { text: "Terms of Service", path: "/terms-of-service" },
    { text: "Pricing Policy", path: "/pricing-policy" },
    { text: "Editor Policy", path: "/editor-policy" },
  ]

  const productLinks: LinkItem[] = [
    { text: "Features", path: "#features" },
    { text: "Pricing", path: "/pricing" },
    { text: "Case Studies", path: "/case-studies" },
    { text: "Documentation", path: "/docs" },
  ]

  const companyLinks: LinkItem[] = [
    { text: "About Us", path: "/about" },
    { text: "Careers", path: "/careers" },
    { text: "Blog", path: "/blog" },
    { text: "Contact", path: "/contact" },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">GoGetWell.AI</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Revolutionizing healthcare management with AI-powered solutions for healthcare facilitators.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://twitter.com/gogetwellai"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                to="https://www.linkedin.com/company/gogetwellai/"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaFacebookF size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-600 hover:text-purple-600 transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-600 hover:text-purple-600 transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} GoGetWell.AI. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-600 text-sm hover:text-purple-600 transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter

import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Games', href: '#games' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]


  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-loop-silver to-loop-grey rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <span className="text-white font-bold text-xl">LOOP</span>
            </div>
            <p className="text-gray-400 mb-4">
              The Ultimate Gaming & Entertainment Destination in Metpally
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/loop_the_game_zone"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919603944601"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:loopthegamezone@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-loop-silver transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-loop-silver mt-1" />
                <p className="text-gray-400 text-sm">
                  Market Road, Near Yashoda Hospital, 2nd Floor, Metpally - 505325
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-loop-silver" />
                <div className="text-gray-400 text-sm">
                  <p>+91 96039 44601</p>
                  <p>+91 70951 74690</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-loop-silver" />
                <p className="text-gray-400 text-sm">loopthegamezone@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Loop - The Game Zone. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-loop-silver transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-loop-silver transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-loop-silver transition-colors">
                Booking Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { motion } from 'framer-motion'
import { FaGamepad, FaVrCardboard } from 'react-icons/fa'
import { MdTheaters, MdSportsEsports } from 'react-icons/md'

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to book a gaming session at Loop - The Game Zone."
    window.open(`https://wa.me/qr/ANRXQSMLFHBMM1?text=${encodeURIComponent(message)}`, '_blank')
  }

  const scrollToGames = () => {
    const gamesSection = document.getElementById('games')
    gamesSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-loop-silver opacity-20"
      >
        <FaGamepad size={60} />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 text-loop-silver opacity-20"
      >
        <FaVrCardboard size={80} />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-20 text-loop-silver opacity-20"
      >
        <MdTheaters size={70} />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-40 right-10 text-loop-silver opacity-20"
      >
        <MdSportsEsports size={65} />
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Animated Logo */}
        {/* <motion.div
          initial={{ scale: 0, rotateY: 0 }}
          animate={{ scale: 1, rotateY: 360 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8"
        >
          <div className="w-64 h-24 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-loop-dark to-loop-grey rounded-2xl shadow-2xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-loop-black to-loop-dark rounded-2xl shadow-2xl flex items-center justify-center p-4 transform rotate-354">
              <img src="/LOOP LOGO.PNG" alt="Loop Logo" className="w-[150px] h-[120px]" />
            </div>
          </div>
        </motion.div> */}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Experience Gaming
          <span className="block gradient-text">Like Never Before</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          VR • PlayStation • Mini Theatre • Sports Gaming
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-loop-silver to-loop-grey text-black font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Now
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToGames}
            className="border-2 border-loop-silver text-loop-silver font-bold px-8 py-4 rounded-full text-lg hover:bg-loop-silver hover:text-black transition-all duration-300"
          >
            Explore Games
          </motion.button>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 text-gray-400"
        >
          <p>📍 Market Road, Near Yashoda Hospital, 2nd Floor, Metpally</p>
          <p>⏰ Open Daily: 10 AM - 10 PM</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-loop-silver rounded-full flex justify-center">
          <div className="w-1 h-2 bg-loop-silver rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

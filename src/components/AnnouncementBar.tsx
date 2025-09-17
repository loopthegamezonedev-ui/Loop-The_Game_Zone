import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="bg-gradient-to-r from-loop-gold to-yellow-600 text-black py-2 px-4 text-center relative"
      >
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-sm font-medium">
            🎮 Grand Opening Offer! Get 20% OFF on all packages this week! 🎉
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-gray-700 transition-colors"
          >
            <FaTimes size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AnnouncementBar

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaWhatsapp, FaClock, FaCalendarAlt } from 'react-icons/fa'

const Booking = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to book a gaming session at Loop - The Game Zone."
    window.open(`https://wa.me/qr/ANRXQSMLFHBMM1?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-loop-silver/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-loop-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Book Your <span className="gold-gradient-text">Gaming Experience</span> Now!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 mb-8"
          >
            Ready to have the time of your life? Book your slot now through WhatsApp!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
          >
            <div className="flex items-center space-x-3 text-gray-300">
              <FaClock className="text-2xl text-loop-silver" />
              <span className="text-lg">Open Daily: 10 AM - 10 PM</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <FaCalendarAlt className="text-2xl text-loop-silver" />
              <span className="text-lg">Advance Booking Available</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Book via WhatsApp</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="glass rounded-xl p-4">
              <h4 className="font-semibold text-white mb-1">Quick Response</h4>
              <p className="text-gray-400 text-sm">Get instant confirmation</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h4 className="font-semibold text-white mb-1">Flexible Timings</h4>
              <p className="text-gray-400 text-sm">Choose your preferred slot</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h4 className="font-semibold text-white mb-1">Group Bookings</h4>
              <p className="text-gray-400 text-sm">Special rates for groups</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-gray-400"
          >
            <p className="mb-2">Contact us directly:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/qr/ANRXQSMLFHBMM1" target="_blank" rel="noopener noreferrer" className="hover:text-loop-silver transition-colors">
                📱 WhatsApp: Book Now
              </a>
              <span className="hidden md:inline">|</span>
              <a href="tel:9603944601" className="hover:text-loop-silver transition-colors">
                📞 Surya: 9603944601
              </a>
              <span className="hidden md:inline">|</span>
              <a href="tel:7095174690" className="hover:text-loop-silver transition-colors">
                📞 Rahul: 7095174690
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Booking

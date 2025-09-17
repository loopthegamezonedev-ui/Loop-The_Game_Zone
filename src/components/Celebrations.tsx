import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBirthdayCake, FaHeart, FaBaby, FaUsers } from 'react-icons/fa'
import { MdBusinessCenter } from 'react-icons/md'
import { GiPartyPopper } from 'react-icons/gi'

const Celebrations = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const handleWhatsAppClick = (eventType: string) => {
    const message = `Hi! I'd like to organize a ${eventType} at Loop - The Game Zone.`
    window.open(`https://wa.me/qr/ANRXQSMLFHBMM1?text=${encodeURIComponent(message)}`, '_blank')
  }

  const celebrations = [
    {
      title: 'Birthday Parties',
      icon: <FaBirthdayCake />,
      description: 'Make birthdays unforgettable with gaming, decorations, and fun!',
      color: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Anniversaries',
      icon: <FaHeart />,
      description: 'Celebrate your special day with entertainment and memories.',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Bride/Groom to Be',
      icon: <GiPartyPopper />,
      description: 'Pre-wedding celebrations with friends in a fun environment.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Baby Showers',
      icon: <FaBaby />,
      description: 'Welcome the little one with joy, games, and celebrations.',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      title: 'Corporate Events',
      icon: <MdBusinessCenter />,
      description: 'Team building and corporate parties with entertainment.',
      color: 'from-gray-600 to-gray-800',
    },
    {
      title: 'Get-togethers',
      icon: <FaUsers />,
      description: 'Reunions and casual meetups with friends and family.',
      color: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section id="celebrations" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Host Your <span className="gradient-text">Celebrations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Make every occasion special with our customized party packages and entertainment options
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {celebrations.map((celebration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => handleWhatsAppClick(celebration.title)}
            >
              <div className="glass rounded-2xl p-8 h-full hover:border-loop-silver transition-all duration-300">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${celebration.color} flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {celebration.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {celebration.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {celebration.description}
                </p>

                <div className="flex items-center text-loop-silver group-hover:text-loop-gold transition-colors duration-300">
                  <span className="text-sm font-medium">Book Now</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Loop for Your Celebrations?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-300">
              <div>
                <div className="text-3xl text-loop-silver mb-2">🎮</div>
                <p>Unlimited Gaming</p>
              </div>
              <div>
                <div className="text-3xl text-loop-silver mb-2">🎨</div>
                <p>Custom Decorations</p>
              </div>
              <div>
                <div className="text-3xl text-loop-silver mb-2">📸</div>
                <p>Professional Photography</p>
              </div>
              <div>
                <div className="text-3xl text-loop-silver mb-2">🎬</div>
                <p>Private Theatre</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Celebrations

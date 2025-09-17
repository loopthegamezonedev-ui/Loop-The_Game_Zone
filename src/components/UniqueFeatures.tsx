import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCamera, FaVrCardboard, FaPalette, FaIceCream } from 'react-icons/fa'

const UniqueFeatures = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const features = [
    {
      icon: <FaCamera />,
      title: 'Photo Spots & Booths',
      description: 'Instagram-worthy photo spots with neon lights and themed backgrounds for perfect selfies and group photos.',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      icon: <FaVrCardboard />,
      title: 'Roller Coaster VR Stand',
      description: 'Experience the thrill of roller coasters in our dedicated VR stand with motion simulation.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaPalette />,
      title: 'Amazing Interiors',
      description: 'Modern gaming-inspired interiors with ambient lighting and comfortable seating areas.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <FaIceCream />,
      title: 'Refreshments Available',
      description: 'Enjoy ice cream, samosas, soft drinks, and snacks while gaming with friends.',
      gradient: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unique <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300">
            What makes Loop special
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Everything You Need for the Perfect Day Out
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl mb-2">🎮</div>
                <p className="text-gray-400">Latest Games</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🎊</div>
                <p className="text-gray-400">Party Setup</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🍿</div>
                <p className="text-gray-400">Snacks & Drinks</p>
              </div>
              <div>
                <div className="text-4xl mb-2">📸</div>
                <p className="text-gray-400">Photo Ops</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UniqueFeatures

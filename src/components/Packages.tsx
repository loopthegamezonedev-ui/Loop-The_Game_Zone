import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaCrown, FaFilm, FaGift } from 'react-icons/fa'
import { MdCelebration } from 'react-icons/md'

const Packages = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const handleWhatsAppClick = (packageName: string, price: string) => {
    const message = `Hi! I'm interested in the ${packageName} package (${price}) at Loop - The Game Zone.`
    window.open(`https://wa.me/qr/ANRXQSMLFHBMM1?text=${encodeURIComponent(message)}`, '_blank')
  }

  const packages = [
    {
      name: 'Silver Package',
      price: '₹1,500',
      icon: <FaStar />,
      color: 'from-gray-400 to-gray-600',
      features: [
        'Decoration',
        'Mini Theatre for 1 hour',
        'DSLR Photography',
      ],
      popular: false,
    },
    {
      name: 'Gold Package',
      price: '₹2,000',
      icon: <FaCrown />,
      color: 'from-yellow-400 to-yellow-600',
      features: [
        'Premium Decoration',
        'Mini Theatre for 1.5 hours',
        'DSLR Photography',
      ],
      popular: true,
    },
    {
      name: 'Movie Package',
      price: '₹1,500',
      icon: <FaFilm />,
      color: 'from-red-400 to-red-600',
      features: [
        'Theatre for 3 hours',
        'Up to 8 members',
        'Premium Sound System',
      ],
      popular: false,
    },
  ]

  const comboPackages = [
    {
      name: 'Celebration + Movie',
      price: '₹2,500',
      icon: <MdCelebration />,
      features: [
        'Premium Decoration',
        'Theatre for 3.5 hours',
        'DSLR Photography',
      ],
    },
    {
      name: 'Triple Combo',
      price: '₹3,000',
      icon: <FaGift />,
      features: [
        'Premium Decoration',
        'Theatre + Games',
        '3.5 hours duration',
      ],
    },
  ]

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gold-gradient-text">Packages</span>
          </h2>
          <p className="text-xl text-gray-300">
            Choose the perfect package for your celebration
          </p>
        </motion.div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative glass rounded-2xl p-8 ${
                pkg.popular ? 'border-2 border-loop-gold' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-loop-gold to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center text-white text-3xl mx-auto mb-6`}>
                {pkg.icon}
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-2">{pkg.name}</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="text-loop-silver mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppClick(pkg.name, pkg.price)}
                className={`w-full py-3 rounded-full bg-gradient-to-r ${pkg.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
              >
                Book This Package
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Combo Packages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Combo <span className="gradient-text">Packages</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comboPackages.map((combo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8 border-2 border-loop-silver"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-white">{combo.name}</h4>
                  <span className="text-2xl gold-gradient-text">{combo.icon}</span>
                </div>

                <div className="text-3xl font-bold gold-gradient-text mb-4">{combo.price}</div>

                <ul className="space-y-2 mb-6">
                  {combo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="text-loop-gold mr-2">★</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick(combo.name, combo.price)}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-loop-gold to-yellow-600 text-black font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Book Combo Package
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages

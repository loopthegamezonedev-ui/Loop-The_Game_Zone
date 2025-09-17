import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGamepad, FaMoneyBillWave, FaTv, FaCalendarAlt } from 'react-icons/fa'
import CountUp from './CountUp'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const features = [
    {
      icon: <FaMoneyBillWave />,
      title: 'Budget Friendly Gaming',
      description: 'Enjoy premium gaming experiences at affordable prices for everyone.',
    },
    {
      icon: <FaGamepad />,
      title: 'Latest Gaming Equipment',
      description: 'State-of-the-art PS4, PS5, and VR gaming systems for ultimate fun.',
    },
    {
      icon: <FaTv />,
      title: 'Mini Theatre Experience',
      description: '4K projector with premium sound system for movie nights.',
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Party & Event Hosting',
      description: 'Perfect venue for birthdays, anniversaries, and celebrations.',
    },
  ]

  const stats = [
    { value: 1000, label: 'Hours of Fun', suffix: '+' },
    { value: 500, label: 'Happy Gamers', suffix: '+' },
    { value: 50, label: 'Games Available', suffix: '+' },
    { value: 100, label: 'Events Hosted', suffix: '+' },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to <span className="gradient-text">Loop - The Game Zone</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your ultimate destination for gaming and entertainment in Metpally. 
            Experience the thrill of modern gaming with friends and family in a premium environment.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-xl text-center group"
            >
              <div className="text-4xl text-loop-silver mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {inView && (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

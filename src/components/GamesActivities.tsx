import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPlaystation, FaVrCardboard, FaTableTennis } from 'react-icons/fa'
import { MdTheaters } from 'react-icons/md'
import { GiDart } from 'react-icons/gi'
import { IoMdFootball } from 'react-icons/io'

const GamesActivities = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const handleWhatsAppClick = (activity: string) => {
    const message = `Hi! I'd like to book ${activity} at Loop - The Game Zone.`
    window.open(`https://wa.me/qr/ANRXQSMLFHBMM1?text=${encodeURIComponent(message)}`, '_blank')
  }

  const activities = [
    {
      title: 'PlayStation Zone',
      icon: <FaPlaystation />,
      gradient: 'from-blue-500 to-blue-700',
      items: [
        { name: 'PS4 Single Player', price: '₹100/hour' },
        { name: 'PS4 Multiplayer', price: '₹150/hour' },
        { name: 'PS5 Single Player', price: '₹150/hour' },
        { name: 'PS5 Multiplayer', price: '₹200/hour' },
      ],
    },
    {
      title: 'VR Experience',
      icon: <FaVrCardboard />,
      gradient: 'from-purple-500 to-purple-700',
      items: [
        { name: 'VR Roller Coaster Ride', price: '₹50/ride' },
        { name: 'VR Gaming Session', price: '₹200/hour' },
        { name: '4 VR Headsets Available', price: 'Book Now' },
      ],
    },
    {
      title: 'Sports Gaming',
      icon: <FaTableTennis />,
      gradient: 'from-green-500 to-green-700',
      items: [
        { name: 'Table Tennis (Single)', price: '₹100/hour' },
        { name: 'Table Tennis (2 Teams)', price: '₹150/hour' },
        { name: 'Foosball', price: '₹100/hour', icon: <IoMdFootball /> },
        { name: 'Dart Board', price: '₹100/hour', icon: <GiDart /> },
      ],
    },
    {
      title: 'Mini Theatre',
      icon: <MdTheaters />,
      gradient: 'from-red-500 to-red-700',
      items: [
        { name: 'Capacity', price: 'Up to 20 people' },
        { name: '4K Projector', price: 'Premium Quality' },
        { name: 'Premium Sound System', price: 'Dolby Audio' },
        { name: 'Air Conditioned', price: 'Comfortable' },
      ],
    },
  ]

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Games & <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-xl text-gray-300">
            Choose from our wide range of gaming experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${activity.gradient} flex items-center justify-center text-white text-3xl mr-4`}>
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{activity.title}</h3>
              </div>

              <div className="space-y-3">
                {activity.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-10 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon && <span className="text-loop-silver">{item.icon}</span>}
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                    <span className="font-semibold text-loop-silver">{item.price}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppClick(activity.title)}
                className={`w-full mt-6 py-3 rounded-full bg-gradient-to-r ${activity.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300`}
              >
                Book {activity.title}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GamesActivities

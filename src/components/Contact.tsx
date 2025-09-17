import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaClock } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300">
            Visit us or reach out for bookings and inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-loop-silver to-loop-grey rounded-lg flex items-center justify-center text-black flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-400">
                      Market Road, Near Yashoda Hospital<br />
                      2nd Floor, Metpally, Telangana - 505325
                    </p>
                    <a
                      href="https://share.google/ZY7Xt7HPO9aVEeQmA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-loop-silver hover:text-loop-gold transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-loop-silver to-loop-grey rounded-lg flex items-center justify-center text-black flex-shrink-0">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <a href="tel:9603944601" className="block text-gray-400 hover:text-loop-silver transition-colors">
                      Surya Pothu: +91 96039 44601
                    </a>
                    <a href="tel:7095174690" className="block text-gray-400 hover:text-loop-silver transition-colors">
                      Rahul Mahajan: +91 70951 74690
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-loop-silver to-loop-grey rounded-lg flex items-center justify-center text-black flex-shrink-0">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-gray-400">
                      Open All Days<br />
                      10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="mailto:loopthegamezone@gmail.com"
                  className="glass rounded-xl p-4 flex items-center space-x-3 hover:border-loop-silver transition-all duration-300 flex-1"
                >
                  <FaEnvelope className="text-xl text-loop-silver" />
                  <span className="text-gray-400">Email Us</span>
                </a>

                <a
                  href="https://instagram.com/loop_the_game_zone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-4 flex items-center space-x-3 hover:border-loop-silver transition-all duration-300 flex-1"
                >
                  <FaInstagram className="text-xl text-loop-silver" />
                  <span className="text-gray-400">Follow Us</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-full min-h-[400px] lg:min-h-[500px]"
          >
            <div className="glass rounded-xl p-2 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8!2d78.8!3d18.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzAwLjAiTiA3OMKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Loop - The Game Zone Location"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Do I need to book in advance?</h4>
              <p className="text-gray-400">Walk-ins are welcome, but we recommend booking in advance for weekends and special packages.</p>
            </div>

            <div className="glass rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Is parking available?</h4>
              <p className="text-gray-400">Yes, we have ample parking space available for both two-wheelers and four-wheelers.</p>
            </div>

            <div className="glass rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Can we bring outside food?</h4>
              <p className="text-gray-400">Outside food is not allowed, but we have a variety of snacks and beverages available.</p>
            </div>

            <div className="glass rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">What's the minimum age requirement?</h4>
              <p className="text-gray-400">All ages are welcome! We have games suitable for children and adults alike.</p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Contact

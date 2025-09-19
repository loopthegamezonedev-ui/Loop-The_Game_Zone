import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Gallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Placeholder images - replace with actual images
  const galleryImages = [
    { id: 1, src: '/gallery/glly8.jpeg', category: 'interior', alt: 'Gaming Zone Interior' },
    { id: 2, src: '/gallery/glly6.jpeg', category: 'gaming', alt: 'PlayStation Gaming Area' },
    { id: 3, src: '/gallery/glly9.jpeg', category: 'events', alt: 'Birthday Celebration' },
    { id: 4, src: '/gallery/glly2.jpeg', category: 'photo-spots', alt: 'Photo Booth Area' },
    { id: 5, src: '/gallery/glly1.jpeg', category: 'gaming', alt: 'VR Gaming Experience' },
    { id: 6, src: '/gallery/glly3.jpeg', category: 'interior', alt: 'Parties' },
    { id: 7, src: '/gallery/glly7.jpeg', category: 'events', alt: 'Fossball' },
    { id: 8, src: '/gallery/glly5.jpeg', category: 'photo-spots', alt: 'Dart Board' },
    { id: 9, src: '/gallery/glly4.jpeg', category: 'gaming', alt: 'Table Tennis Area' },
    { id:10, src:'/gallery/glly10.jpeg', category: 'events', alt: 'Birthday decorations'
    }
  ]


  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -260, // 240px image width + 20px gap
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 260, // 240px image width + 20px gap
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300">
            Take a look at our amazing gaming space and events
          </p>
        </motion.div>


        {/* Horizontal Scrolling Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-4 sm:px-8 md:px-12"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-40 h-56 sm:w-48 sm:h-72 md:w-60 md:h-80 object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium text-sm">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white text-3xl hover:text-loop-silver transition-colors"
                >
                  <FaTimes />
                </button>
                
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto rounded-lg"
                />
                
                <div className="mt-4 text-center">
                  <p className="text-white text-lg">{galleryImages[selectedImage].alt}</p>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(prev => prev! > 0 ? prev! - 1 : galleryImages.length - 1)
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-loop-silver transition-colors"
                >
                  ‹
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(prev => prev! < galleryImages.length - 1 ? prev! + 1 : 0)
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-loop-silver transition-colors"
                >
                  ›
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery

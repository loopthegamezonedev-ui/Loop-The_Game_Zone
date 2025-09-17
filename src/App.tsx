import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import GamesActivities from './components/GamesActivities'
import Packages from './components/Packages'
import Celebrations from './components/Celebrations'
import Gallery from './components/Gallery'
import UniqueFeatures from './components/UniqueFeatures'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import AnnouncementBar from './components/AnnouncementBar'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <div key="main" className="relative min-h-screen bg-loop-dark">
          {/* <AnnouncementBar /> */}
          <Navbar />
          <Hero />
          <About />
          <GamesActivities />
          <Packages />
          <Celebrations />
          <Gallery />
          <UniqueFeatures />
          <Booking />
          <Contact />
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App

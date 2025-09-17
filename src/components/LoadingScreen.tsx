import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-loop-dark"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Animated Loop Logo */}
          <div className="relative w-48 h-20 mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="w-full h-full rounded-full border-4 border-loop-silver border-t-transparent"></div>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/LOOP LOGO.PNG" alt="Loop Logo" className="w-[150px] h-[120px]" />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-2">
            The Game Zone
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-loop-silver rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-loop-silver rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-loop-silver rounded-full animate-pulse delay-150"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

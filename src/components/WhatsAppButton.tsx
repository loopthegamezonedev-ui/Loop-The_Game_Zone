import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    console.log('WhatsApp button clicked!') // Debug log
    const phoneNumber = '919603944601';
    const message = "Hi! I'd like to know more about Loop - The Game Zone."
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    console.log('Opening WhatsApp URL:', whatsappUrl) // Debug log
    window.location.href = whatsappUrl; // use direct navigation
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
      >
        <FaWhatsapp className="text-2xl" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Chat with us!
            <div className="absolute top-full right-4 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default WhatsAppButton

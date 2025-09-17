# Loop - The Game Zone

A modern, responsive single-page website for Loop - The Game Zone, a gaming and entertainment venue in Metpally, Telangana.

## Features

- **Modern Design**: Gaming-inspired design with silver/grey gradient theme
- **Responsive Layout**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **WhatsApp Integration**: Direct booking through WhatsApp
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Interactive Gallery**: Masonry layout with lightbox functionality
- **Glassmorphism Effects**: Modern UI with glass-like effects

## Tech Stack

- **React** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography
- **React Intersection Observer** for scroll animations
- **Vite** for fast development and building

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/loop-the-game-zone.git
cd loop-the-game-zone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About.tsx
│   ├── AnnouncementBar.tsx
│   ├── Booking.tsx
│   ├── Celebrations.tsx
│   ├── Contact.tsx
│   ├── CountUp.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── GamesActivities.tsx
│   ├── Hero.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Packages.tsx
│   ├── ScrollToTop.tsx
│   ├── UniqueFeatures.tsx
│   └── WhatsAppButton.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Features Overview

### Sections

1. **Hero Section**: Eye-catching intro with animated logo and CTAs
2. **Navigation**: Sticky header with glassmorphism effect
3. **About**: Business highlights with animated counters
4. **Games & Activities**: Interactive cards showcasing all gaming options
5. **Packages**: Pricing cards for different celebration packages
6. **Celebrations**: Event types the venue can host
7. **Gallery**: Masonry grid with lightbox viewing
8. **Unique Features**: Special amenities and offerings
9. **Booking**: WhatsApp integration for easy bookings
10. **Contact**: Location info, map, and FAQ section

### Key Components

- **WhatsApp Floating Button**: Always-visible booking option
- **Scroll to Top**: Smooth navigation back to top
- **Loading Screen**: Branded loading animation
- **Announcement Bar**: Special offers display

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- Loop Silver: `#C0C0C0`
- Loop Grey: `#808080`
- Loop Gold: `#FFD700`
- Loop Dark: `#0A0A0A`

### Contact Information

Update contact details in relevant components:
- Phone numbers in WhatsApp links
- Email addresses
- Social media links
- Google Maps coordinates

## Performance Optimizations

- Lazy loading for images
- Code splitting (future implementation)
- Optimized animations
- Minified CSS and JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is proprietary software for Loop - The Game Zone.

## Contact

For any queries or support:
- Surya Pothu: 9603944601
- Rahul Mahajan: 7095174690
- Email: loopthegamezone@gmail.com
- Instagram: @loop_the_game_zone
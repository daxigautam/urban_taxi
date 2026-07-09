import { motion } from 'framer-motion';
import { Star, CheckCircle2, Clock, ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenBooking = () => setIsBookingModalOpen(true);
    window.addEventListener('openBooking', handleOpenBooking);
    return () => window.removeEventListener('openBooking', handleOpenBooking);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-20 pb-4 md:pb-12 overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/hero-bg.png" 
          alt="Luxury Urban Taxi" 
          className="w-full h-full object-cover object-[95%_center] md:object-left scale-110 lg:scale-[1.15] origin-center transition-transform duration-1000"
        />
        {/* Subtle gradient overlay to ensure text readability but keep the mountain visible */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/50 md:via-black/10 md:to-transparent" />
      </div>

      <div className="w-full px-4 lg:px-8 relative z-10 flex flex-col justify-between h-full min-h-[calc(85vh-5rem)] md:min-h-[calc(100vh-5rem)]">
        
        <div className="flex-1 flex items-center mt-8 lg:mt-0">
          
          {/* Left Content - Reduced size for cleaner look */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-xl xl:max-w-2xl relative z-20 flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0 pt-8 md:pt-0"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4 md:mb-4 w-full">
              <div className="hidden md:block w-6 h-[1px] bg-accent"></div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white drop-shadow-md md:drop-shadow-none md:text-gray-300 font-bold md:font-medium">Premium Urbania & Innova Crysta Rentals</span>
            </div>

            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading text-accent md:text-white mb-3 md:mb-4 leading-[1.15] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:drop-shadow-none">
              Travel Together.
            </h1>

            <div className="mb-6 md:mb-10 space-y-3 md:space-y-6 flex flex-col items-center md:items-start">
              <p className="text-accent md:text-gray-300 text-xs md:text-sm max-w-[260px] sm:max-w-sm leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:drop-shadow-none">
                Luxury rides for group travel, corporate trips, family vacations, weddings, and more.
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white md:text-accent font-heading tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:drop-shadow-lg max-w-[300px] sm:max-w-sm md:max-w-md leading-relaxed">
                "Anywhere from Nagpur. Everywhere with Comfort."
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-12 w-full max-w-[260px] sm:max-w-none">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 bg-accent text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-colors flex items-center justify-center space-x-2 shadow-lg rounded-sm"
              >
                <span>Book Your Ride</span>
                <ArrowRight className="w-4 h-4 md:w-3.5 md:h-3.5" />
              </button>
              <a href="#fleet" className="w-full sm:w-auto px-6 py-3 border border-accent/50 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-accent/10 transition-colors flex items-center justify-center space-x-2 rounded-sm">
                <span>Explore Fleet</span>
                <ArrowRight className="w-4 h-4 md:w-3.5 md:h-3.5 text-gray-400" />
              </a>
            </div>

            {/* Stats Row - Compact */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-4 sm:gap-4 w-full max-w-[320px] sm:max-w-none">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center space-x-1.5 text-accent mb-1">
                  <Star className="w-4 h-4 md:w-3.5 md:h-3.5" fill="currentColor" />
                  <span className="text-lg md:text-base font-bold text-white">4.9</span>
                </div>
                <p className="text-[11px] md:text-[10px] text-gray-400 text-center md:text-left">Customer Rating</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center space-x-1.5 text-accent mb-1">
                  <CheckCircle2 className="w-4 h-4 md:w-3.5 md:h-3.5" />
                  <span className="text-lg md:text-base font-bold text-white">5000+</span>
                </div>
                <p className="text-[11px] md:text-[10px] text-gray-400 text-center md:text-left">Successful Trips</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center space-x-1.5 text-accent mb-1">
                  <Clock className="w-4 h-4 md:w-3.5 md:h-3.5" />
                  <span className="text-lg md:text-base font-bold text-white">24/7</span>
                </div>
                <p className="text-[11px] md:text-[10px] text-gray-400 text-center md:text-left">Customer Support</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center space-x-1.5 text-accent mb-1">
                  <ShieldCheck className="w-4 h-4 md:w-3.5 md:h-3.5" />
                  <span className="text-lg md:text-base font-bold text-white">100%</span>
                </div>
                <p className="text-[11px] md:text-[10px] text-gray-400 text-center md:text-left">Sanitized Vehicles</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Elements */}
        <div className="flex items-end justify-between mt-8 hidden lg:flex">
          <div className="w-1/3"></div> {/* Spacer */}
          
          <motion.a 
            href="#fleet"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 cursor-pointer text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-[9px] uppercase tracking-widest font-medium">Scroll to Explore</span>
            <div className="w-5 h-8 border border-current rounded-full flex justify-center p-1">
              <div className="w-1 h-1.5 bg-current rounded-full animate-bounce"></div>
            </div>
          </motion.a>

          <div className="w-1/3 flex justify-end">
            <a 
              href="#gallery"
              className="flex items-center space-x-3 text-white hover:text-accent transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                <Play size={14} className="ml-1" fill="currentColor" />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold">Watch Experience</span>
            </a>
          </div>
        </div>

      </div>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </section>
  );
}

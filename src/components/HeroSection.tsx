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
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/hero-bg.png" 
          alt="Luxury Urban Taxi" 
          className="w-full h-full object-cover object-left scale-100 lg:scale-[1.15] origin-left transition-transform duration-1000"
        />
        {/* Subtle gradient overlay to ensure text readability but keep the mountain visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="w-full px-4 lg:px-8 relative z-10 flex flex-col justify-between h-full min-h-[calc(100vh-5rem)]">
        
        <div className="flex-1 flex items-center mt-8 lg:mt-0">
          
          {/* Left Content - Reduced size for cleaner look */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-xl xl:max-w-2xl relative z-20"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-6 h-[1px] bg-accent"></div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-300 font-medium">Premium Urbania & Innova Crysta Rentals</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading text-white mb-4 leading-[1.15]">
              Travel Together.
            </h1>

            <div className="mb-10 space-y-6">
              <p className="text-gray-300 text-xs md:text-sm max-w-sm leading-relaxed font-light">
                Luxury rides for group travel, corporate trips, family vacations, weddings, and more.
              </p>
              <h3 className="text-xl md:text-2xl text-accent font-heading tracking-wider drop-shadow-lg max-w-[280px] sm:max-w-sm md:max-w-md leading-relaxed">
                "Anywhere from Nagpur. Everywhere with Comfort."
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="px-6 py-3 bg-accent text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Book Your Ride</span>
                <ArrowRight size={14} />
              </button>
              <a href="#fleet" className="px-6 py-3 border border-accent/50 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-accent/10 transition-colors flex items-center justify-center space-x-2">
                <span>Explore Fleet</span>
                <ArrowRight size={14} className="text-gray-400" />
              </a>
            </div>

            {/* Stats Row - Compact */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="flex items-center space-x-1.5 text-accent mb-0.5">
                  <Star size={14} fill="currentColor" />
                  <span className="text-base font-bold text-white">4.9</span>
                </div>
                <p className="text-[10px] text-gray-400">Customer Rating</p>
              </div>
              <div>
                <div className="flex items-center space-x-1.5 text-accent mb-0.5">
                  <CheckCircle2 size={14} />
                  <span className="text-base font-bold text-white">5000+</span>
                </div>
                <p className="text-[10px] text-gray-400">Successful Trips</p>
              </div>
              <div>
                <div className="flex items-center space-x-1.5 text-accent mb-0.5">
                  <Clock size={14} />
                  <span className="text-base font-bold text-white">24/7</span>
                </div>
                <p className="text-[10px] text-gray-400">Customer Support</p>
              </div>
              <div>
                <div className="flex items-center space-x-1.5 text-accent mb-0.5">
                  <ShieldCheck size={14} />
                  <span className="text-base font-bold text-white">100%</span>
                </div>
                <p className="text-[10px] text-gray-400">Sanitized Vehicles</p>
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

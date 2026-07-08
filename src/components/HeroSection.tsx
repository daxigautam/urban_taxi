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
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#0a0a0a]">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col justify-center min-h-[calc(100vh-6rem)]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-12 lg:mt-0">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full relative z-20 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Premium Transportation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 leading-[1.1] tracking-tight">
              Build Your Dream <br className="hidden md:block" />
              Travel Experience <br className="hidden md:block" />
              with Urban Taxi
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-light mb-10">
              Unlock powerful comfort, elegant luxury, and full reliability to create a professional journey across India that truly stands out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors flex items-center justify-center space-x-2 rounded-md shadow-lg"
              >
                <span>Reserve Now</span>
                <ArrowRight size={16} />
              </button>
              <a href="#fleet" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 rounded-md">
                <span>Explore Fleet</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-8 pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5 text-accent mb-1">
                  <Star size={16} fill="currentColor" />
                  <span className="text-xl font-bold text-white">4.9</span>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">Customer Rating</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5 text-accent mb-1">
                  <CheckCircle2 size={16} />
                  <span className="text-xl font-bold text-white">5K+</span>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">Successful Trips</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visuals & Floating Collage */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full relative h-[450px] md:h-[600px] flex items-center justify-center hidden sm:flex"
          >
            {/* The Swoosh Graphic (Adapted to Gold/Dark theme) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 scale-125 md:scale-150">
                <path d="M-100 600C50 600 150 400 350 400C550 400 650 150 900 150" stroke="url(#paint0_linear)" strokeWidth="120" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear" x1="-100" y1="600" x2="900" y2="150" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d0ae74" stopOpacity="0.05" />
                    <stop offset="0.5" stopColor="#d0ae74" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#d0ae74" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating Image Collage */}
            <div className="relative w-full max-w-lg h-full perspective-1000">
              
              {/* Main Image (Force Urbania) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[5%] w-[85%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] z-20"
              >
                <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">Force Urbania</div>
                </div>
                <img src="/force-urbania.avif" alt="Force Urbania" className="w-full h-auto object-cover grayscale-[20%]" />
              </motion.div>

              {/* Secondary Floating Image (Innova) */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[5%] -right-[5%] w-[65%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] z-30 backdrop-blur-sm"
              >
                <div className="bg-[#1a1a1a]/90 backdrop-blur px-4 py-2 flex items-center justify-between border-b border-white/5">
                  <span className="text-[9px] text-accent font-bold tracking-widest uppercase">Innova Crysta</span>
                </div>
                <img src="/white-innova.png" alt="Innova Crysta" className="w-full h-auto object-cover opacity-90 p-2" />
              </motion.div>
              
              {/* Floating UI Card (Testimonial snippet) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[35%] -left-[15%] w-48 bg-[#111]/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl z-40 hidden md:block"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Star size={12} className="text-accent" fill="currentColor" />
                  <Star size={12} className="text-accent" fill="currentColor" />
                  <Star size={12} className="text-accent" fill="currentColor" />
                  <Star size={12} className="text-accent" fill="currentColor" />
                  <Star size={12} className="text-accent" fill="currentColor" />
                </div>
                <p className="text-xs text-gray-300 italic mb-2">"The most luxurious ride I've ever experienced in Nagpur."</p>
                <div className="text-[10px] text-accent font-bold uppercase tracking-wider">- Premium Client</div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </section>
  );
}

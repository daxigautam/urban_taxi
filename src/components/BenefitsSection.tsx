import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Map, Navigation, Heart, Sparkles } from 'lucide-react';

const benefits = [
  { icon: UserCheck, title: 'Professional Drivers', desc: 'Highly trained, vetted, and courteous chauffeurs for a seamless experience.' },
  { icon: Sparkles, title: 'Luxury Interiors', desc: 'Immaculate vehicles with premium seating, ambient lighting, and dual AC.' },
  { icon: Heart, title: 'Safe Family Travel', desc: 'Child-friendly features and safety-first driving policies.' },
  { icon: Map, title: '24/7 Support', desc: 'Dedicated concierge desk available round the clock to assist you.' },
  { icon: Navigation, title: 'GPS Tracking', desc: 'Real-time tracking for peace of mind during your entire journey.' },
];

const sliderImages = ['/force-urbania.avif', '/front-left-side-47.avif'];

export function BenefitsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-us" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Soft Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block font-medium"
          >
            Why Choose Urban Taxi
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-heading text-white leading-tight"
          >
            Experience <span className="text-gradient font-serif italic">Luxury</span>, Not Just Transportation
          </motion.h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Features List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-accent/40 hover:bg-[#151515] transition-all duration-500 relative overflow-hidden flex items-center space-x-6"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                    <Icon className="text-accent" size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading text-white mb-1">{benefit.title}</h4>
                    <p className="text-textSecondary text-sm leading-relaxed font-light">{benefit.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Image, Description & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Slider */}
            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-8 group border border-white/10 shadow-2xl bg-[#0c0c0c]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={sliderImages[currentImageIndex]} 
                  alt="Luxury Fleet" 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Slider Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {sliderImages.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'bg-accent w-8' : 'bg-white/30 w-2 hover:bg-white/60'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Luxury Description */}
            <div className="mb-10">
              <h3 className="text-3xl font-heading text-white mb-4">The Standard of Excellence</h3>
              <p className="text-textSecondary leading-relaxed font-light text-lg">
                We believe that every journey should be an unforgettable experience. From our meticulously maintained luxury vehicles to our highly trained professional chauffeurs, every detail is tailored for your ultimate comfort and safety.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-heading text-accent mb-2">
                  10K+
                </div>
                <p className="text-xs uppercase tracking-widest text-textSecondary font-medium">Happy Clients</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-4xl md:text-5xl font-heading text-accent mb-2">
                  99%
                </div>
                <p className="text-xs uppercase tracking-widest text-textSecondary font-medium">On-Time Arrival</p>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

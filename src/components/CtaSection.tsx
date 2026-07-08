import { motion } from 'framer-motion';

export function CtaSection() {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-bg.png"
          className="w-full h-full object-cover grayscale-[20%]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-night-drive-on-a-highway-through-a-city-3155-large.mp4" type="video/mp4" />
        </video>
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-primary/80 z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading text-white mb-10"
        >
          Ready for Your <br className="md:hidden" /> Next <span className="text-gradient">Journey?</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openBooking'))}
            className="inline-block px-10 py-5 bg-accent text-primary font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 luxury-shadow"
          >
            Reserve Your Premium Ride
          </button>
        </motion.div>
      </div>
    </section>
  );
}

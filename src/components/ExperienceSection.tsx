import { motion } from 'framer-motion';

export function ExperienceSection() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
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
          <source src="/advertisement.mp4" type="video/mp4" />
        </video>
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading text-white mb-4 leading-tight">
            Travel isn't only about reaching your destination.
          </h2>
          <p className="text-base md:text-xl font-heading italic text-white/80 mb-8">
            It's about comfort, elegance, and unforgettable moments.
          </p>

        </motion.div>
      </div>
    </section>
  );
}

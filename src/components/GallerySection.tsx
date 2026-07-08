import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Play, X } from 'lucide-react';

const galleryItems = [
  { url: '/gallery/urban-taxi-video-2.mp4', type: 'video', span: 'md:col-span-2 md:row-span-2', title: 'Luxury Fleet Flow' },
  { url: '/gallery/force-urbania.avif', type: 'image', span: 'md:col-span-1 md:row-span-1', title: 'Force Urbania Interior' },
  { url: '/gallery/urban-taxi-video-1.mp4', type: 'video', span: 'md:col-span-1 md:row-span-1', title: 'Friends Road Trip' },
  { url: '/innova-crysta-white.mp4', type: 'video', span: 'md:col-span-3 md:row-span-1', title: 'Mountain Drive Experience' },
];

export function GallerySection() {
  const [activeItem, setActiveItem] = useState<{url: string, type: string, title: string} | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#0c0c0c] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            Gallery
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6"
          >
            A Glimpse of <span className="text-accent italic font-serif">Luxury</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${item.span} shadow-2xl`}
              onClick={() => setActiveItem(item)}
            >
              {item.type === 'video' ? (
                <>
                  <video 
                    src={item.url} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Play className="text-white ml-1" size={24} fill="currentColor" />
                    </div>
                  </div>
                </>
              ) : (
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10" />
              
              <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-heading text-xl md:text-2xl">{item.title}</h3>
                <div className="w-8 h-[2px] bg-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 md:p-12"
            onClick={() => setActiveItem(null)}
          >
            <button 
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] bg-black/50 p-2 rounded-full border border-white/10"
            >
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[85vh] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === 'video' ? (
                <video 
                  src={activeItem.url} 
                  autoPlay 
                  controls 
                  className="w-full h-full object-contain"
                />
              ) : (
                <img 
                  src={activeItem.url} 
                  alt={activeItem.title}
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

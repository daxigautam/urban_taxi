import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Quote, X, MessageSquarePlus } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const initialTestimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Corporate Executive',
    text: 'Booked the Urbania for a corporate outing from Nagpur to Pench. The vehicle was spotless and the AC was chilling. Driver was very polite and drove safely on the highway. Highly recommended!',
    image: 'https://ui-avatars.com/api/?name=Rajesh+Mehta&background=050505&color=d4af37&size=200&font-size=0.33'
  },
  {
    name: 'Priya Sharma',
    role: 'Bride',
    text: 'We hired them for our family wedding in Nagpur. The Innova Crystas were in top condition and reported on time for all events. The drivers were very cooperative with the guests. Took away all our tension!',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=050505&color=d4af37&size=200&font-size=0.33'
  },
  {
    name: 'Amit Deshmukh',
    role: 'Frequent Traveler',
    text: 'I regularly use their service for Nagpur airport drops. The cars are always well-maintained and arrive 15 minutes early. The drivers are professional and help with the luggage. Best premium service in town.',
    image: 'https://ui-avatars.com/api/?name=Amit+Deshmukh&background=050505&color=d4af37&size=200&font-size=0.33'
  },
  {
    name: 'Neha Gupta',
    role: 'Event Planner',
    text: 'As an event planner, I always recommend Urban Taxi to my VIP clients. Their Force Urbania vans are very spacious and perfect for group travel. The service is always prompt and reliable.',
    image: 'https://ui-avatars.com/api/?name=Neha+Gupta&background=050505&color=d4af37&size=200&font-size=0.33'
  },
  {
    name: 'Sanjay Patel',
    role: 'Business Owner',
    text: 'Traveled from Nagpur to Pune with my family. The journey was extremely comfortable and the seats were very relaxing. Transparent billing with no hidden charges. Definitely my go-to choice now.',
    image: 'https://ui-avatars.com/api/?name=Sanjay+Patel&background=050505&color=d4af37&size=200&font-size=0.33'
  },
  {
    name: 'Dr. Anjali Joshi',
    role: 'Family Traveler',
    text: 'Traveling with kids means safety comes first. Urban Taxi provided a very smooth ride for our Tadoba safari trip. The driver drove very carefully through the forest sections. Great experience.',
    image: 'https://ui-avatars.com/api/?name=Anjali+Joshi&background=050505&color=d4af37&size=200&font-size=0.33'
  }
];

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) return;
    
    const newTestimonial = {
      name: newName,
      role: 'Verified Client',
      text: newText,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(newName)}&background=050505&color=d4af37&size=200&font-size=0.33`
    };
    
    setTestimonials([newTestimonial, ...testimonials]);
    setIsModalOpen(false);
    setNewName('');
    setNewText('');
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0c0c0c] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6"
          >
            Words from Our <span className="text-gradient">Clients</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-7xl mx-auto mt-12"
        >
          <Swiper
            key={testimonials.length} // Force re-render when new testimonial is added
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            loop={testimonials.length >= 3}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            className="pb-16 testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="glass-dark p-8 md:p-10 rounded-2xl text-center relative mx-2 mt-10 mb-4 h-full flex flex-col justify-between hover:bg-white/5 transition-colors duration-300 border border-white/5">
                  <div>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                      <div className="w-20 h-20 rounded-full border-2 border-accent p-1 bg-[#0c0c0c] shadow-lg shadow-black/50">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <Quote className="mx-auto text-accent/20 mt-8 mb-4" size={40} />
                    <p className="text-base md:text-lg text-textMain/90 font-light italic leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-heading text-xl">{testimonial.name}</h4>
                    <span className="text-textSecondary text-sm tracking-widest uppercase">{testimonial.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 bg-accent text-black px-8 py-4 rounded-full font-heading uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <MessageSquarePlus size={20} />
              Add Your Experience
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border border-white/10 rounded-2xl p-8 w-full max-w-md relative shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-3xl font-heading text-white mb-2">Share Your Experience</h3>
              <p className="text-textSecondary mb-8 text-sm">We'd love to hear about your journey with us.</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">Your Name</label>
                  <input 
                    type="text" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                    placeholder="e.g. Rohan Sharma"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">Your Experience</label>
                  <textarea 
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors h-32 resize-none placeholder:text-white/20"
                    placeholder="Tell us about your trip..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-accent text-black font-heading uppercase tracking-widest py-4 rounded-xl mt-4 hover:bg-white transition-colors duration-300 flex justify-center items-center gap-2"
                >
                  <MessageSquarePlus size={18} />
                  Post Experience
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

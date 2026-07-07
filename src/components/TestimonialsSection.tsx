import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Corporate Executive',
    text: 'We booked the Force Urbania for a corporate team outing from Nagpur to Pench. The experience was nothing short of a 5-star hotel on wheels. Punctual, professional, and ultra-luxurious.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Priya Sharma',
    role: 'Bride',
    text: 'Urban Taxi handled our entire wedding transportation in Nagpur. The Innova Crystas were pristine, and the drivers were incredibly polite. It took so much stress off our shoulders!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Amit Deshmukh',
    role: 'Frequent Traveler',
    text: 'I regularly use their airport transfer service. The cars are always sanitized, smell great, and the chauffeurs are highly professional. The best premium taxi service in Nagpur.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Neha Gupta',
    role: 'Event Planner',
    text: 'We always recommend Urban Taxi to our VIP clients. Their fleet of Urbania vans is unmatched in Nagpur for group travel. The drivers are professional and the service is flawless.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Sanjay Patel',
    role: 'Business Owner',
    text: 'The best intercity travel experience I\'ve had. Traveling from Nagpur to Pune was smooth and comfortable. Their transparent pricing and premium vehicles make them my go-to choice.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Dr. Anjali Joshi',
    role: 'Family Traveler',
    text: 'Safety and comfort are my top priorities when traveling with kids. Urban Taxi exceeded our expectations during our trip to Tadoba. The vehicle was spotless and the driver was extremely careful.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  }
];

export function TestimonialsSection() {
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
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            loop={true}
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
        </motion.div>
      </div>
    </section>
  );
}

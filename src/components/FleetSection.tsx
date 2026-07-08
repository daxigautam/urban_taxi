import { motion } from 'framer-motion';
import { Users, Briefcase, Snowflake, Music, CheckCircle2 } from 'lucide-react';

const fleet = [
  {
    name: 'Force Urbania',
    image: '/force-urbania.avif', 
    capacity: '16+1 SEATER',
    luggage: '15 Bags',
    features: ['Roof Carrier', 'Premium Recliner Seats', 'Standing Height Cabin', 'Panoramic Windows'],
    description: 'The ultimate luxury minibus for large families, corporate outings, and wedding groups. Experience airplane-like comfort on the road.',
  },
  {
    name: 'Toyota Innova Crysta',
    image: '/white-innova.png', 
    capacity: '6+1 SEATER',
    luggage: '4 Bags',
    features: ['Captain Seats', 'Silent Cabin', 'Plush Interiors'],
    description: 'The gold standard in premium chauffeur-driven cars. Perfect for airport transfers, business meetings, and small family getaways.',
  }
];

function FleetCard({ vehicle, index }: { vehicle: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:luxury-shadow transition-all duration-700 hover:-translate-y-2 flex flex-col"
    >
      {/* Image Container - Reduced Height */}
      <div className="relative h-60 md:h-72 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 relative z-10 flex-1 flex flex-col">
        <div className="-mt-16 mb-4">
            <h3 className="text-2xl md:text-3xl font-heading text-white mb-2 drop-shadow-md">{vehicle.name}</h3>
        </div>

        <div className="pb-6 mt-4">
          <p className="text-textSecondary text-sm mb-6 leading-relaxed">{vehicle.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-3 text-textMain/80">
              <Users className="text-accent" size={20} />
              <span className="text-sm font-medium tracking-wide">{vehicle.capacity}</span>
            </div>
            <div className="flex items-center space-x-3 text-textMain/80">
              <Briefcase className="text-accent" size={20} />
              <span className="text-sm font-medium tracking-wide">{vehicle.luggage}</span>
            </div>
            <div className="flex items-center space-x-3 text-textMain/80">
              <Snowflake className="text-accent" size={20} />
              <span className="text-sm font-medium tracking-wide">Dual AC</span>
            </div>
            <div className="flex items-center space-x-3 text-textMain/80">
              <Music className="text-accent" size={20} />
              <span className="text-sm font-medium tracking-wide">Premium Audio</span>
            </div>
          </div>

          <div className="space-y-3">
            {vehicle.features.map((feature: string) => (
              <div key={feature} className="flex items-center space-x-3">
                <CheckCircle2 className="text-accent" size={16} />
                <span className={feature === 'Roof Carrier' ? "text-sm text-accent font-semibold tracking-wide" : "text-sm text-textSecondary"}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4">
            <button 
                onClick={() => window.dispatchEvent(new CustomEvent('openBooking'))}
                className="inline-block w-full text-center py-4 border border-accent/50 text-accent hover:bg-accent hover:text-primary transition-colors duration-300 uppercase tracking-widest text-sm font-bold"
            >
                Reserve Now
            </button>
        </div>
      </div>
    </motion.div>
  );
}

export function FleetSection() {
  return (
    <section id="fleet" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            The Fleet
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading text-white mb-6"
          >
            Arrive in <span className="text-gradient">Style</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-textSecondary max-w-2xl mx-auto"
          >
            Our meticulously maintained fleet offers unparalleled comfort and elegance for<br />
            <span className="text-accent font-medium">"every journey originating from Nagpur."</span>
          </motion.p>
        </div>

        {/* Decreased frame size by using max-w-5xl, increased gap to gap-16 lg:gap-24 */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {fleet.map((vehicle, index) => (
            <FleetCard key={vehicle.name} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

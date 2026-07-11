import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const localPackages = [
  { duration: '4 hrs & 40 kms', price: '2,414', originalPrice: '2,607', discount: '8%' },
  { duration: '8 hrs & 80 kms', price: '3,674', originalPrice: '3,968', discount: '8%' },
  { duration: '12 hrs & 100 kms', price: '5,459', originalPrice: '5,896', discount: '8%' }
];

const outstationPackages = [
  { duration: '1 Day & 300 kms', price: '6,405', originalPrice: '6,789', discount: '6%' },
  { duration: '2 Days & 600 kms', price: '12,810', originalPrice: '13,579', discount: '6%' },
  { duration: '3 Days & 900 kms', price: '19,215', originalPrice: '20,368', discount: '6%' },
  { duration: '4 Days & 1200 kms', price: '25,620', originalPrice: '27,157', discount: '6%' },
  { duration: '5 Days & 1500 kms', price: '32,025', originalPrice: '33,947', discount: '6%' },
  { duration: '6 Days & 1800 kms', price: '38,430', originalPrice: '40,736', discount: '6%' },
  { duration: '7 Days & 2100 kms', price: '44,835', originalPrice: '47,525', discount: '6%' },
  { duration: '8 Days & 2400 kms', price: '51,240', originalPrice: '54,314', discount: '6%' },
  { duration: '9 Days & 2700 kms', price: '57,645', originalPrice: '61,104', discount: '6%' },
  { duration: '10 Days & 3000 kms', price: '64,050', originalPrice: '67,893', discount: '6%' },
  { duration: '11 Days & 3300 kms', price: '70,455', originalPrice: '74,682', discount: '6%' },
  { duration: '12 Days & 3600 kms', price: '76,860', originalPrice: '81,472', discount: '6%' },
];

export function InnovaPrices() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary text-textMain font-sans">
      <Navbar />
      <div className="min-h-screen pt-32 md:pt-36 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
        <button 
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }}
          className="inline-flex items-center space-x-2 text-textSecondary hover:text-accent transition-colors duration-300 mb-6"
        >
          <ArrowLeft size={24} />
          <span className="uppercase tracking-widest text-base font-bold">Back</span>
        </button>

        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-base tracking-[0.4em] font-medium uppercase mb-6 block"
          >
            Premium SUV
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading text-white mb-8"
          >
            Toyota Innova Crysta <span className="text-gradient">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-textSecondary text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Premium comfort at unbeatable rates for your local and intercity travel needs from Nagpur.
          </motion.p>
        </div>

        {/* Local Packages */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-10 flex items-center">
            <span className="w-12 h-[2px] bg-accent mr-6"></span>
            Local Car Rental Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {localPackages.map((pkg, idx) => (
              <div key={idx} className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl hover:border-accent/40 hover:-translate-y-2 transition-all duration-500 shadow-2xl group flex flex-col">
                <div className="flex flex-col justify-between items-start mb-8 gap-4 flex-1">
                  <h3 className="text-2xl md:text-3xl text-white font-sans font-medium tracking-wide w-full">{pkg.duration}</h3>
                  <div className="text-left mt-auto w-full">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-base text-textSecondary line-through">₹ {pkg.originalPrice}</span>
                        <span className="text-xs font-bold bg-accent text-primary px-3 py-1 rounded-full uppercase tracking-widest">{pkg.discount} off</span>
                    </div>
                    <span className="text-4xl md:text-5xl text-accent font-sans font-bold block mb-1 tracking-tight">₹ {pkg.price}</span>
                    <span className="text-sm md:text-base text-textSecondary uppercase tracking-widest block mt-2">inc. of taxes</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10 group-hover:border-accent/20 transition-colors mt-auto">
                  <p className="text-base md:text-lg text-textSecondary font-sans font-light flex items-center mb-6">
                    <Info size={24} className="text-accent mr-3 shrink-0" />
                    ₹19 per extra km & ₹225 per extra hour
                  </p>
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('openBooking'))}
                    className="w-full py-3 bg-white/5 hover:bg-accent hover:text-primary border border-white/10 hover:border-accent text-white uppercase tracking-widest text-sm font-bold transition-all duration-300 rounded-lg"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outstation Packages */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-10 flex items-center">
            <span className="w-12 h-[2px] bg-accent mr-6"></span>
            Outstation Rental Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {outstationPackages.map((pkg, idx) => (
              <div key={idx} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:border-accent/40 hover:-translate-y-2 transition-all duration-500 flex flex-col group shadow-2xl">
                <h3 className="text-xl md:text-2xl text-white font-sans font-medium tracking-wide mb-8">{pkg.duration}</h3>
                
                <div className="mt-auto">
                    <div className="flex justify-between items-end mb-6">
                        <div className="pb-1">
                            <span className="text-sm text-textSecondary line-through block mb-2">₹ {pkg.originalPrice}</span>
                            <span className="text-xs font-bold bg-accent/20 text-accent px-3 py-1.5 rounded-full uppercase tracking-widest border border-accent/20">{pkg.discount} off</span>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl md:text-4xl text-white font-sans font-bold block mb-2 group-hover:text-accent transition-colors tracking-tight">₹ {pkg.price}</span>
                            <span className="text-xs md:text-sm text-textSecondary uppercase tracking-widest block">inc. of taxes</span>
                        </div>
                    </div>
                    
                    <div className="pt-5 border-t border-white/10 group-hover:border-accent/20 transition-colors mt-6">
                    <p className="text-sm md:text-base text-textSecondary font-sans font-light mb-6 flex items-center">
                        <Info size={20} className="text-accent mr-3 shrink-0" />
                        ₹19 per extra km & ₹225 per extra hour
                    </p>
                    <button 
                      onClick={() => window.dispatchEvent(new CustomEvent('openBooking'))}
                      className="w-full py-3 bg-white/5 hover:bg-accent hover:text-primary border border-white/10 hover:border-accent text-white uppercase tracking-widest text-sm font-bold transition-all duration-300 rounded-lg"
                    >
                      Book Now
                    </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Terms & Inclusions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white font-heading text-2xl md:text-3xl mb-8 flex items-center">
                <span className="w-2 h-8 bg-accent mr-4 rounded-full"></span>
                Package Inclusions
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start text-base md:text-lg text-textSecondary font-light">
                  <CheckCircle2 size={24} className="text-accent mr-4 shrink-0 mt-0.5" />
                  All applicable taxes
                </li>
                <li className="flex items-start text-base md:text-lg text-textSecondary font-light">
                  <CheckCircle2 size={24} className="text-accent mr-4 shrink-0 mt-0.5" />
                  Driver charges and allowance
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-heading text-2xl md:text-3xl mb-8 flex items-center">
                <span className="w-2 h-8 bg-red-500 mr-4 rounded-full"></span>
                Exclusions
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start text-base md:text-lg text-textSecondary font-light">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-5 shrink-0 mt-2.5"></span>
                  State permit (applicable for interstate travel)
                </li>
                <li className="flex items-start text-base md:text-lg text-textSecondary font-light">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-5 shrink-0 mt-2.5"></span>
                  Toll & Parking charges at actuals
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        </div>
      </div>
      <Footer />
    </div>
  );
}

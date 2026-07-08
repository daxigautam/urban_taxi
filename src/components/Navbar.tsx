import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '#services' },
  { name: 'Why Us', path: '#why-us' },
  { name: 'Testimonials', path: '#testimonials' },
  { name: 'Gallery', path: '#gallery' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md py-1 shadow-lg shadow-black/50' : 'bg-gradient-to-b from-black/50 to-transparent pt-3 pb-1'
      }`}
    >
      <div className="w-full px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#">
            <img src="/logo.png" alt="Urban Taxi" className="h-16 md:h-20 lg:h-28 w-auto object-contain origin-left scale-110 md:scale-[1.75]" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm uppercase tracking-widest text-textMain/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Book Button */}
        <div className="hidden md:flex items-center ml-4">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openBooking'))}
            className="px-8 py-3 bg-accent text-black text-[11px] font-extrabold uppercase tracking-[0.25em] hover:bg-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] ring-1 ring-black/20 rounded-sm"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-xl border-b border-white/10 flex flex-col py-6 px-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 text-lg font-heading tracking-wider border-b border-white/5 text-textMain"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openBooking'));
              setIsMobileMenuOpen(false);
            }}
            className="px-6 py-3 border border-accent/50 text-white text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-colors text-center w-full"
          >
            Book Now
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}

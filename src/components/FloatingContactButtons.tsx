import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CalendarCheck } from 'lucide-react';
import { cn } from '../lib/utils';

// Magnetic Button Wrapper
function MagneticButton({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 }); // 0.3 is the magnetic pull strength
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn("relative z-50 flex items-center justify-center rounded-full transition-shadow hover:shadow-lg", className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function FloatingContactButtons() {
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [showWaPopup, setShowWaPopup] = useState(false);

  // Close one popup if the other is opened
  const togglePhone = () => {
    setShowPhonePopup(!showPhonePopup);
    if (showWaPopup) setShowWaPopup(false);
  };

  const toggleWa = () => {
    setShowWaPopup(!showWaPopup);
    if (showPhonePopup) setShowPhonePopup(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4 items-end">
      {/* Invisible Overlay for closing popups when clicking outside */}
      {(showPhonePopup || showWaPopup) && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowPhonePopup(false);
            setShowWaPopup(false);
          }}
        />
      )}

      {/* Booking / Calendar */}
      <div className="relative z-50">
        <MagneticButton 
          className="bg-accent text-primary p-4 shadow-glass hover:bg-white"
          onClick={() => {
            window.dispatchEvent(new CustomEvent('openBooking'));
            setShowPhonePopup(false);
            setShowWaPopup(false);
          }}
        >
          <CalendarCheck size={24} />
        </MagneticButton>
      </div>

      {/* Call */}
      <div className="relative flex items-center justify-end w-full z-50">
        <AnimatePresence>
          {showPhonePopup && (
            <motion.div 
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="absolute right-16 bg-[#111] border border-white/10 p-2 rounded-xl shadow-2xl whitespace-nowrap overflow-hidden flex flex-col gap-1 mr-2"
            >
              <a href="tel:+919823959770" className="px-4 py-2 hover:bg-white/10 rounded-lg text-white font-heading text-sm transition-colors flex items-center gap-2">
                <Phone size={14} className="text-accent" /> +91 9823959770
              </a>
              <a href="tel:+919811612383" className="px-4 py-2 hover:bg-white/10 rounded-lg text-white font-heading text-sm transition-colors flex items-center gap-2">
                <Phone size={14} className="text-accent" /> +91 9811612383
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        
        <MagneticButton 
          className="bg-[#111] border border-white/10 text-white p-4 shadow-glass hover:border-accent hover:text-accent"
          onClick={togglePhone}
        >
          <Phone size={24} />
        </MagneticButton>
      </div>

      {/* WhatsApp */}
      <div className="relative flex items-center justify-end w-full z-50">
        <AnimatePresence>
          {showWaPopup && (
            <motion.div 
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="absolute right-16 bg-[#25D366] p-2 rounded-xl shadow-2xl whitespace-nowrap overflow-hidden flex flex-col gap-1 mr-2"
            >
              <a href="https://wa.me/919823959770" target="_blank" rel="noreferrer" className="px-4 py-2 hover:bg-black/10 rounded-lg text-white font-heading text-sm transition-colors flex items-center gap-2 font-bold tracking-wider">
                +91 9823959770
              </a>
              <a href="https://wa.me/919811612383" target="_blank" rel="noreferrer" className="px-4 py-2 hover:bg-black/10 rounded-lg text-white font-heading text-sm transition-colors flex items-center gap-2 font-bold tracking-wider">
                +91 9811612383
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <MagneticButton 
          className="bg-[#25D366] text-white p-4 shadow-glass hover:bg-[#1ebe57]"
          onClick={toggleWa}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </MagneticButton>
      </div>
    </div>
  );
}

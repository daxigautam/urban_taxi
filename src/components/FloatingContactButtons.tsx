import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4 items-end">
      {/* Booking / Calendar */}
      <MagneticButton 
        className="bg-accent text-primary p-4 shadow-glass hover:bg-white"
        onClick={() => {
          window.dispatchEvent(new CustomEvent('openBooking'));
        }}
      >
        <CalendarCheck size={24} />
      </MagneticButton>

      {/* Call */}
      <MagneticButton 
        className="bg-[#111] border border-white/10 text-white p-4 shadow-glass hover:border-accent hover:text-accent"
        onClick={() => window.open('tel:+919766631092')}
      >
        <Phone size={24} />
      </MagneticButton>

      {/* WhatsApp */}
      <MagneticButton 
        className="bg-[#25D366] text-white p-4 shadow-glass hover:bg-[#1ebe57]"
        onClick={() => window.open('https://wa.me/919766631092')}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </MagneticButton>
    </div>
  );
}

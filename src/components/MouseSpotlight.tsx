import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

export function MouseSpotlight() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for the spotlight
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25, mass: 0.5 });

  const background = useMotionTemplate`radial-gradient(500px circle at ${springX}px ${springY}px, rgba(201, 169, 106, 0.12), transparent 80%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen"
      style={{ background }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
}

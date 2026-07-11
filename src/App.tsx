import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { Home } from './pages/Home';
import { MouseSpotlight } from './components/MouseSpotlight';
import { FloatingParticles } from './components/FloatingParticles';
import { FloatingContactButtons } from './components/FloatingContactButtons';

import { UrbaniaPrices } from './pages/UrbaniaPrices';
import { InnovaPrices } from './pages/InnovaPrices';
import { BookingModal } from './components/BookingModal';
import { useState } from 'react';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenBooking = () => setIsBookingModalOpen(true);
    window.addEventListener('openBooking', handleOpenBooking);
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.removeEventListener('openBooking', handleOpenBooking);
    };
  }, []);

  return (
    <BrowserRouter>
      <MouseSpotlight />
      <FloatingParticles />
      <FloatingContactButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urbania-prices" element={<UrbaniaPrices />} />
        <Route path="/innova-prices" element={<InnovaPrices />} />
      </Routes>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react';
import { MapPin, Calendar, Users, Car, ArrowRight, ShieldCheck, ChevronDown, User, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function BookingForm() {
  const [name, setName] = useState('');
  const [pickup, setPickup] = useState('Anywhere in Nagpur');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup.toLowerCase().includes('nagpur')) {
      alert('Pickup is available only within Nagpur city. Please select a pickup location in Nagpur.');
      return;
    }
    
    // Format WhatsApp message
    const message = `*New Booking Request*%0A%0A*Name:* ${name}%0A*Pickup:* ${pickup}%0A*Drop:* ${drop}%0A*Date:* ${date}%0A*Passengers:* ${passengers}%0A*Vehicle:* ${vehicle}`;
    const whatsappUrl = `https://wa.me/919766631092?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success state
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[500px]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle2 size={40} className="text-accent" />
        </motion.div>
        <h3 className="text-2xl font-heading text-white mb-4">Thank you for your booking!</h3>
        <p className="text-textSecondary mb-8 max-w-[250px] mx-auto">
          We have directed you to WhatsApp to complete your reservation. We will be in touch shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="py-3 px-8 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors rounded-sm"
        >
          Book Another Ride
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      
      {/* Top Title & Divider */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-heading text-white tracking-widest uppercase mb-4">Book Your Ride</h3>
        <div className="flex items-center justify-center space-x-3 text-accent opacity-70">
          <div className="w-10 h-[1px] bg-accent"></div>
          <div className="w-2 h-2 border border-accent rotate-45"></div>
          <div className="w-10 h-[1px] bg-accent"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        
        {/* Name Field */}
        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg p-3 hover:border-accent/50 transition-colors">
          <User size={20} className="text-gray-400 absolute left-4" />
          <div className="pl-10 w-full flex justify-between items-center cursor-pointer">
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Full Name</span>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                className="bg-transparent text-sm text-white focus:outline-none placeholder-gray-400 w-full"
                required
              />
            </div>
          </div>
        </div>

        {/* Pickup Field */}
        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg p-3 hover:border-accent/50 transition-colors">
          <MapPin size={20} className="text-gray-400 absolute left-4" />
          <div className="pl-10 w-full flex justify-between items-center cursor-pointer">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Pickup Location</span>
              <input 
                type="text" 
                value={pickup} 
                onChange={(e) => setPickup(e.target.value)}
                className="bg-transparent text-sm text-white focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            <ChevronDown size={14} className="text-gray-500" />
          </div>
        </div>

        {/* Drop Field */}
        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg p-3 hover:border-accent/50 transition-colors">
          <MapPin size={20} className="text-gray-400 absolute left-4" />
          <div className="pl-10 w-full flex justify-between items-center cursor-pointer">
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Drop Destination</span>
              <input 
                type="text" 
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                placeholder="Enter Destination"
                className="bg-transparent text-sm text-white focus:outline-none placeholder-gray-400 w-full"
                required
              />
            </div>
            <ChevronDown size={14} className="text-gray-500 absolute right-4 pointer-events-none" />
          </div>
        </div>

        {/* Date Field */}
        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg p-3 hover:border-accent/50 transition-colors">
          <Calendar size={20} className="text-gray-400 absolute left-4" />
          <div className="pl-10 w-full flex justify-between items-center cursor-pointer">
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Travel Date</span>
              <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent text-sm text-gray-300 focus:outline-none [&::-webkit-calendar-picker-indicator]:invert-[1] w-full"
                required
              />
            </div>
          </div>
        </div>

        {/* Passengers Field */}
        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg p-3 hover:border-accent/50 transition-colors">
          <Users size={20} className="text-gray-400 absolute left-4" />
          <div className="pl-10 w-full flex justify-between items-center cursor-pointer">
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Passengers</span>
              <select 
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="bg-transparent text-sm text-gray-300 focus:outline-none appearance-none cursor-pointer w-full"
                required
              >
                <option value="" disabled hidden>Select Passengers</option>
                <option value="1-4 Passengers" className="text-black">1-4 Passengers</option>
                <option value="5-7 Passengers" className="text-black">5-7 Passengers</option>
                <option value="8-17 Passengers" className="text-black">8-17 Passengers</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-gray-500 absolute right-4 pointer-events-none" />
          </div>
        </div>

        {/* Vehicle Field */}
        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg p-3 hover:border-accent/50 transition-colors mb-6">
          <Car size={20} className="text-gray-400 absolute left-4" />
          <div className="pl-10 w-full flex justify-between items-center cursor-pointer">
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Vehicle</span>
              <select 
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="bg-transparent text-sm text-gray-300 focus:outline-none appearance-none cursor-pointer w-full"
                required
              >
                <option value="" disabled hidden>Select Vehicle</option>
                <option value="Force Urbania (17 Seater)" className="text-black">Force Urbania (17 Seater)</option>
                <option value="Toyota Innova Crysta (7 Seater)" className="text-black">Toyota Innova Crysta (7 Seater)</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-gray-500 absolute right-4 pointer-events-none" />
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full py-4 bg-[#d0ae74] text-[#111] font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 hover:bg-white transition-colors rounded-sm shadow-md mt-6"
        >
          <span>Reserve Now</span>
          <ArrowRight size={16} />
        </button>

        {/* Footer Text */}
        <div className="pt-4 flex items-center justify-center space-x-2 text-gray-400">
          <ShieldCheck size={14} />
          <span className="text-[10px] font-medium tracking-wide">Safe. Reliable. On-Time.</span>
        </div>
      </form>
    </div>
  );
}

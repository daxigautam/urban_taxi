import { useState } from 'react';
import { MapPin, Calendar, Users, Car, ArrowRight, ShieldCheck, ChevronDown, User, Clock } from 'lucide-react';
export function BookingForm() {
  const [name, setName] = useState('');
  const [pickup, setPickup] = useState('Anywhere in Nagpur');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [days, setDays] = useState('1');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup.toLowerCase().includes('nagpur')) {
      alert('Pickup is available only within Nagpur city. Please select a pickup location in Nagpur.');
      return;
    }
    
    let estimatedPrice = 0;
    const numDays = parseInt(days) || 1;
    if (vehicle.includes('Innova')) {
      estimatedPrice = numDays * 6405;
    } else if (vehicle.includes('Urbania')) {
      estimatedPrice = numDays * 9713;
    }
    
    // Format WhatsApp message
    const message = `*New Booking Request*%0A%0A*Name:* ${name}%0A*Pickup:* ${pickup}%0A*Drop:* ${drop}%0A*Date:* ${date}%0A*Days:* ${days}%0A*Passengers:* ${passengers}%0A*Vehicle:* ${vehicle}%0A*Estimated Price:* ₹${estimatedPrice}`;
    setWhatsappMessage(message);
    
    // Show selection state
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[500px]">
        <h3 className="text-2xl font-heading text-white mb-4">Choose a Representative</h3>
        <p className="text-textSecondary mb-8 max-w-[280px] mx-auto">
          Please select which number you would like to send your booking details to via WhatsApp.
        </p>
        
        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto mb-8">
          <button
            onClick={() => window.open(`https://wa.me/919823959770?text=${whatsappMessage}`, '_blank')}
            className="w-full py-4 bg-[#25D366] text-white font-bold tracking-widest text-[11px] uppercase flex items-center justify-center gap-3 hover:bg-[#1ebe57] transition-colors rounded-lg shadow-md"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Send to +91 9823959770
          </button>
          <button
            onClick={() => window.open(`https://wa.me/919811612383?text=${whatsappMessage}`, '_blank')}
            className="w-full py-4 bg-[#25D366] text-white font-bold tracking-widest text-[11px] uppercase flex items-center justify-center gap-3 hover:bg-[#1ebe57] transition-colors rounded-lg shadow-md"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Send to +91 9811612383
          </button>
        </div>

        <button
          onClick={() => setIsSubmitted(false)}
          className="py-3 px-8 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors rounded-sm"
        >
          Back to Form
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

        {/* Days Field */}
        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg p-3 hover:border-accent/50 transition-colors">
          <Clock size={20} className="text-gray-400 absolute left-4" />
          <div className="pl-10 w-full flex justify-between items-center cursor-pointer">
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Number of Days</span>
              <input 
                type="number"
                min="1"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="e.g. 3"
                className="bg-transparent text-sm text-white focus:outline-none placeholder-gray-400 w-full"
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

        {/* Estimated Price Display */}
        {vehicle && days && (
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center mt-4">
            <span className="text-[10px] text-textSecondary uppercase tracking-widest block mb-1">Estimated Outstation Price</span>
            <span className="text-2xl font-bold text-accent font-sans">
              ₹ {(vehicle.includes('Innova') ? (parseInt(days) || 1) * 6405 : (parseInt(days) || 1) * 9713).toLocaleString('en-IN')}
            </span>
          </div>
        )}

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

import { Phone, Mail, MapPin, Globe, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-heading text-2xl font-bold tracking-wider text-white">
                URBAN <span className="text-accent">TAXI</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-textSecondary">
                Luxury Travel
              </span>
            </Link>
            <p className="text-textSecondary text-sm font-light leading-relaxed mb-6">
              Nagpur's premier luxury transportation service. Providing unparalleled comfort, safety, and elegance for your journeys across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-accent hover:text-primary transition-all duration-300">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-accent hover:text-primary transition-all duration-300">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-accent hover:text-primary transition-all duration-300">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading text-lg mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-4 text-sm text-textSecondary font-light">
              <li><a href="#fleet" className="hover:text-accent transition-colors">Our Fleet</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading text-lg mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4 text-sm text-textSecondary font-light">
              <li><a href="#" className="hover:text-accent transition-colors">Corporate Travel</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Wedding Transportation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Outstation Tours</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-6 text-sm text-textSecondary font-light">
              <li className="flex items-start space-x-4">
                <MapPin className="text-accent shrink-0" size={20} />
                <span>Level 4, IT Park Road,<br />Nagpur, Maharashtra 440022</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-accent shrink-0" size={20} />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-accent shrink-0" size={20} />
                <a href="mailto:booking@urbantaxi.com" className="hover:text-accent transition-colors">booking@urbantaxi.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-textSecondary/50 tracking-wider gap-4">
          <p>&copy; {new Date().getFullYear()} Urban Taxi. All rights reserved.</p>
          <p className="text-center md:ml-4">
            Developed and Maintained by <a href="https://bizleap.in/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors font-medium">BIZLEAP</a>
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

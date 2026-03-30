import React from 'react';
import { Compass, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Compass className="text-emerald-500 w-8 h-8" />
              <span className="text-2xl font-bold text-white tracking-tight">
                TRAVEL<span className="text-emerald-500">KIT</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium Elementor Template Kit for travel agencies and tour operators. Crafting unforgettable digital experiences for modern explorers.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/tours" className="hover:text-emerald-500 transition-colors">Featured Tours</Link></li>
              <li><Link to="/destinations" className="hover:text-emerald-500 transition-colors">Destinations</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Support</Link></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 shrink-0" />
                <span>123 Adventure Way, Wanderlust Plaza, Zurich, Switzerland</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span>+41 44 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span>hello@travelkit-elementor.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm mb-6">Subscribe for exclusive travel tips and early bird discounts.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-zinc-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
              />
              <button className="bg-emerald-500 text-white py-3 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
          <p>© 2024 TravelKit. All rights reserved.</p>
          <p>Created by Premium Templates Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
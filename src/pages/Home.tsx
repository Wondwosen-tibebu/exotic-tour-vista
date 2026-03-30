import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Star, Calendar, Users, Globe } from 'lucide-react';
import { IMAGES, TOURS, DESTINATIONS } from '../lib/constants';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Typical Elementor Widget: Hero Image with Gradient Overlay */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.home_hero} 
            alt="Hero" 
            className="w-full h-full object-cover scale-105" 
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-emerald-500 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6"
          >
            Explore the World with Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-[1.1]"
          >
            Adventure <br /> <span className="text-emerald-400">Awaits</span> You
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light"
          >
            Premium travel experiences tailored to your dreams. Discover hidden gems and luxury escapes across the globe.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/tours" className="w-full sm:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-600 transition-all rounded-full font-bold text-lg shadow-xl shadow-emerald-500/30 active:scale-95">
              Browse Tours
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all rounded-full font-bold text-lg active:scale-95">
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Icons Section - Elementor "Icon Box" Widget Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Globe, title: 'Global reach', desc: 'Over 50 countries and 500+ unique tour packages.' },
              { icon: Star, title: 'Luxury Stays', desc: 'Handpicked premium hotels and exclusive resorts.' },
              { icon: Users, title: 'Expert Guides', desc: 'Professional local guides with deep cultural knowledge.' },
              { icon: Calendar, title: 'Easy Booking', desc: 'Seamless reservation process with 24/7 support.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Elementor "Image + Text" Widget */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMAGES.about_hero} alt="About" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden lg:block">
                <div className="text-5xl font-black text-emerald-500 mb-1">15+</div>
                <div className="text-zinc-500 font-bold text-sm uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">About the Company</span>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">We Are Your Ultimate <br /> Travel Partner</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                Since 2008, we've been redefining what it means to travel. Our Elementor-powered platform provides you with the most curated experiences, ensuring every trip is a masterpiece of adventure and comfort.
              </p>
              <ul className="space-y-4 mb-10">
                {['Curated Destination Lists', 'Exclusive VIP Access', 'Personalized Itineraries'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-zinc-800">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                      <ArrowRight size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all">
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Grid - Elementor "Image Box" Widget */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Popular Places</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">Top Destinations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest) => (
              <motion.div 
                key={dest.id}
                whileHover={{ scale: 0.98 }}
                className="relative group h-[450px] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="text-emerald-400 font-bold text-sm mb-2">{dest.count}</div>
                  <h3 className="text-3xl font-black">{dest.name}</h3>
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    <span className="font-bold">Explore Now</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Elementor "Call to Action" Widget */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-[40px] overflow-hidden bg-emerald-600 p-12 md:p-24 text-center text-white">
            <div className="absolute inset-0 opacity-20">
              <img src={IMAGES.gallery_1} alt="CTA" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Start Your Journey?</h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Join thousands of happy travelers and book your dream vacation today. Special offers available for new customers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-white text-emerald-600 px-10 py-5 rounded-full font-black text-lg hover:bg-zinc-100 transition-all active:scale-95 w-full sm:w-auto">
                  Get Started
                </button>
                <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all active:scale-95 w-full sm:w-auto">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
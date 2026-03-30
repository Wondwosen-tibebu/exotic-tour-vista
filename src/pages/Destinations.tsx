import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES, DESTINATIONS } from '../lib/constants';
import { Search, MapPin, Compass, ArrowRight } from 'lucide-react';

const Destinations = () => {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.destinations_hero} alt="Destinations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-950/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-black mb-6">Explore World</h1>
          <div className="max-w-xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              className="w-full px-8 py-5 rounded-full bg-white text-zinc-900 font-medium shadow-2xl outline-none focus:ring-4 focus:ring-emerald-500/50 transition-all"
            />
            <button className="absolute right-3 top-2 bottom-2 px-8 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-all">
              <Search size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest, i) => (
              <motion.div 
                key={dest.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] rounded-[40px] overflow-hidden"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-emerald-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <Compass size={24} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{dest.name}</h3>
                  <div className="flex items-center justify-between text-white/80 font-bold">
                    <span>{dest.count}</span>
                    <div className="flex items-center gap-2 text-emerald-400 group-hover:gap-4 transition-all">
                      Browse All <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Additional items for variety */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
               {[
                 { name: 'Safari Dreams', image: IMAGES.gallery_3, count: '5 Tours' },
                 { name: 'Arctic Lights', image: IMAGES.gallery_2, count: '3 Tours' }
               ].map((item, i) => (
                <div key={i} className="group relative h-[350px] rounded-[40px] overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                  <div className="absolute inset-y-0 left-0 p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-black text-white mb-2">{item.name}</h3>
                    <p className="text-emerald-400 font-bold mb-6">{item.count}</p>
                    <button className="bg-white text-zinc-900 px-6 py-2 rounded-full font-bold text-sm w-fit hover:bg-emerald-500 hover:text-white transition-all">
                      View Destination
                    </button>
                  </div>
                </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
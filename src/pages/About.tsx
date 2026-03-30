import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../lib/constants';
import { CheckCircle2, Award, Heart, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.about_hero} alt="About Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-[1px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-black mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Creating meaningful connections between people and the planet through extraordinary travel.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">The TravelKit Story</span>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8 leading-tight">We Believe Travel <br /> Changes Lives</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                Founded by a group of passionate explorers, TravelKit started as a small blog and grew into a world-class travel agency. Our Elementor Template Kit is designed to help other agencies share their passion with the same high-end aesthetic we've built over a decade.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Award, title: 'Award Winning', desc: 'Voted #1 Travel Agency 2023' },
                  { icon: Heart, title: 'Eco Friendly', desc: '100% Carbon Neutral Tours' },
                  { icon: ShieldCheck, title: 'Secure Travel', desc: 'Full Insurance Coverage' },
                  { icon: CheckCircle2, title: 'Expert Local', desc: 'Native Speaking Guides' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-500">
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{stat.title}</h4>
                      <p className="text-zinc-500 text-sm">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={IMAGES.gallery_1} alt="Gallery" className="rounded-3xl h-64 w-full object-cover" />
                <img src={IMAGES.gallery_3} alt="Gallery" className="rounded-3xl h-80 w-full object-cover" />
              </div>
              <div className="space-y-4 pt-8">
                <img src={IMAGES.home_hero} alt="Gallery" className="rounded-3xl h-80 w-full object-cover" />
                <img src={IMAGES.gallery_2} alt="Gallery" className="rounded-3xl h-64 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Standard Elementor "Team" Widget */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-zinc-900 mb-4">Meet Our Experts</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Our team of travel specialists are here to make your journey perfect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Sarah Johnson', role: 'Adventure Specialist' },
              { name: 'Michael Chen', role: 'Luxury Concierge' },
              { name: 'Elena Rodriguez', role: 'Destination Expert' }
            ].map((member, i) => (
              <div key={i} className="group relative">
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden bg-zinc-200 mb-6">
                  {/* Placeholder for team members */}
                  <div className="w-full h-full bg-emerald-100 flex items-center justify-center text-emerald-500">
                    <Users size={64} className="opacity-20" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 group-hover:text-emerald-500 transition-colors">{member.name}</h3>
                <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
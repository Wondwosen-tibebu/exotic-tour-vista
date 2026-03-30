import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { IMAGES } from '../lib/constants';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your message has been sent successfully!');
  };

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.contact_hero} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Have questions about a tour? We're here to help you plan your perfect adventure.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-black text-zinc-900 mb-8">Get In Touch</h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: 'Our Office', content: '123 Adventure Way, Zurich, CH' },
                  { icon: Phone, title: 'Phone Number', content: '+41 44 123 4567' },
                  { icon: Mail, title: 'Email Address', content: 'hello@travelkit.com' },
                  { icon: Clock, title: 'Working Hours', content: 'Mon - Fri: 9:00 - 18:00' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{item.title}</h4>
                      <p className="text-zinc-500">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-2/3">
              <div className="bg-zinc-50 p-8 md:p-12 rounded-[40px] shadow-sm border border-zinc-100">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-zinc-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-zinc-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Subject</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Tour Inquiry" 
                      className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-zinc-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="How can we help you?" 
                      className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-zinc-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full bg-emerald-500 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 active:scale-[0.98]">
                      <Send size={20} />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
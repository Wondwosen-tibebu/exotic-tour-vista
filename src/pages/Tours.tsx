import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES, TOURS } from '../lib/constants';
import { MapPin, Calendar, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../components/ui/dialog';
import BookingForm from '../components/BookingForm';

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState<typeof TOURS[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookNow = (tour: typeof TOURS[0]) => {
    setSelectedTour(tour);
    setIsDialogOpen(true);
  };

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.tours_hero} alt="Tours" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-black mb-6">Our Tours</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
            Unforgettable journeys designed for the bold and the curious.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {TOURS.map((tour, i) => (
              <motion.div 
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[32px] overflow-hidden border border-zinc-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-zinc-900 font-black text-sm shadow-lg">
                    {tour.price}
                  </div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white font-bold text-sm bg-emerald-500 px-4 py-2 rounded-full shadow-lg">
                    <MapPin size={16} />
                    {tour.location}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-zinc-400 text-xs uppercase tracking-widest font-bold mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-emerald-500" /> {tour.duration}</span>
                    <span className="flex items-center gap-1.5"><Users size={14} className="text-emerald-500" /> 12 Guests</span>
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 mb-4 group-hover:text-emerald-500 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {tour.description}
                  </p>
                  
                  {/* Highlights section */}
                  <div className="mb-8">
                    <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-3">Highlights</h4>
                    <div className="space-y-2">
                      {['Guided Trekking', 'Premium Stay', 'Local Cuisine'].map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-zinc-600">
                          <CheckCircle2 size={14} className="text-emerald-500" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-zinc-50 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-emerald-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <button 
                      onClick={() => handleBookNow(tour)}
                      className="flex items-center gap-2 font-black text-emerald-500 hover:text-emerald-600 transition-colors bg-emerald-500/10 px-6 py-2.5 rounded-full"
                    >
                      Book Now <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-12">Trusted by Global Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            {['TripAdvisor', 'National Geographic', 'Lonely Planet', 'Airbnb', 'Booking.com'].map((brand, i) => (
              <span key={i} className="text-2xl font-black text-zinc-900 tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] rounded-[32px] p-0 overflow-hidden border-none shadow-2xl">
          <div className="relative h-48 w-full">
            {selectedTour && (
              <>
                <img src={selectedTour.image} alt={selectedTour.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                  <DialogTitle className="text-3xl font-black">Book {selectedTour.name}</DialogTitle>
                  <DialogDescription className="text-white/80">
                    Fill in the form below to request your booking. Our team will reach out to confirm your reservation.
                  </DialogDescription>
                </div>
              </>
            )}
          </div>
          <div className="p-8">
            {selectedTour && (
              <BookingForm 
                tour={{ id: selectedTour.id, name: selectedTour.name }} 
                onSuccess={() => setIsDialogOpen(false)} 
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tours;
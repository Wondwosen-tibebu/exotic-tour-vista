import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Layout, Check, ExternalLink, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Tours = lazy(() => import('./pages/Tours'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Contact = lazy(() => import('./pages/Contact'));

const KitPreviewHeader = () => {
  return (
    <div className="bg-[#1C1C1C] text-white py-3 px-6 flex items-center justify-between text-sm sticky top-0 z-[100] border-b border-white/10 hidden md:flex">
      <div className="flex items-center gap-4">
        <div className="bg-emerald-500 p-1.5 rounded-lg">
          <Layout size={16} className="text-white" />
        </div>
        <div>
          <span className="font-bold">TravelKit</span>
          <span className="text-white/60 ml-2">Premium Elementor Template Kit</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-emerald-400">
          <Check size={14} />
          <span>Fully Responsive</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400">
          <Check size={14} />
          <span>Elementor Pro Required</span>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors px-4 py-1.5 rounded-full flex items-center gap-2 font-medium">
          <Download size={14} />
          Download Kit
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <KitPreviewHeader />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="h-screen w-full flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;
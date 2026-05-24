import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/Hero'));
const Gallery = lazy(() => import('./components/Gallery'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="app"
      >
        <Navbar />
        <main>
          <Suspense fallback={<div style={{ height: '100vh' }} />}>
            <Hero />
            <Services />
            <Gallery />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
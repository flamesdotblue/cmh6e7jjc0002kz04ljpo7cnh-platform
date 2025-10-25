import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-fuchsia-400/30 selection:text-fuchsia-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} techw_annabe — Built with care and curiosity.</p>
      </footer>
    </div>
  );
}

// src/App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="space-bg min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <footer className="glass-dark text-center py-6 text-gray-300">
          <div className="container mx-auto">
            <p className="text-sm">
              © 2025 Priyang Desai. Built with React, Tailwind CSS & Framer Motion.
            </p>
            <p className="text-xs mt-2 text-gray-400">
              Exploring the digital universe, one pixel at a time.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AbstractBackground from './components/AbstractBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      <AbstractBackground />
      <Navbar />
      
      <main className="max-w-6xl mx-auto py-6 relative z-10">
        <Hero />
        <ExperienceAndEducation />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;


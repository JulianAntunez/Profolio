import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Decorative Plaque Circuits */}
      <div className="circuit-line top-40 left-0"></div>
      <div className="circuit-line top-[900px] right-0"></div>
      
      <main className="max-w-6xl mx-auto py-6">
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


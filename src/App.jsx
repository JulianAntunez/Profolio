import React, { useState, useEffect } from 'react';

// Tailwind components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AbstractBackground from './components/AbstractBackground';

// Bootstrap components
import BootstrapNavbar from './components/bootstrap/BootstrapNavbar';
import BootstrapHero from './components/bootstrap/BootstrapHero';
import BootstrapExperienceAndEducation from './components/bootstrap/BootstrapExperienceAndEducation';
import BootstrapProjects from './components/bootstrap/BootstrapProjects';
import BootstrapContact from './components/bootstrap/BootstrapContact';
import BootstrapFooter from './components/bootstrap/BootstrapFooter';

// Inline stylesheet imports (Vite ?inline feature)
import tailwindStyles from './index.css?inline';
import bootstrapStyles from './bootstrap.css?inline';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const [framework, setFramework] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedFramework = localStorage.getItem('framework');
      if (savedFramework) return savedFramework;
    }
    return 'tailwind';
  });

  // Handle dark/light theme classes on document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
      root.classList.remove('light');
    }
  }, [theme]);

  // Handle system preference changes
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        setTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Dynamically inject/swap framework stylesheets (Tailwind / Bootstrap) in the head
  useEffect(() => {
    let styleTag = document.getElementById('dynamic-framework-css');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'dynamic-framework-css';
      document.head.appendChild(styleTag);
    }

    if (framework === 'tailwind') {
      styleTag.textContent = tailwindStyles;
    } else {
      styleTag.textContent = bootstrapStyles;
    }
  }, [framework]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  const toggleFramework = () => {
    setFramework((prev) => {
      const next = prev === 'tailwind' ? 'bootstrap' : 'tailwind';
      localStorage.setItem('framework', next);
      return next;
    });
  };

  if (framework === 'bootstrap') {
    return (
      <div className="bg-body min-vh-100 position-relative pb-5">
        {/* Background Grid Decorative Effect */}
        <div className="position-absolute top-0 start-0 w-100 h-100 radial-bg grid-bg pointer-events-none z-0" style={{ opacity: 0.8 }} />
        
        <div className="position-relative z-1">
          <BootstrapNavbar 
            theme={theme} 
            toggleTheme={toggleTheme} 
            framework={framework} 
            toggleFramework={toggleFramework} 
          />
          
          <main className="container py-4">
            <BootstrapHero />
            <BootstrapExperienceAndEducation />
            <BootstrapProjects />
            <BootstrapContact />
          </main>
          
          <BootstrapFooter />
        </div>
      </div>
    );
  }

  // Default: Tailwind layout
  return (
    <div className="relative min-h-screen">
      <AbstractBackground />
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        framework={framework} 
        toggleFramework={toggleFramework} 
      />
      
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

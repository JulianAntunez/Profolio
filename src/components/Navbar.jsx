import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  const navItems = [
    { id: 'profile', label: 'Perfil' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full h-16 bg-background/95 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-6xl mx-auto px-6 h-full flex justify-between items-center">
        <a href="#profile" onClick={(e) => handleClick(e, 'profile')} className="flex items-center gap-3">
          <img src="/img/logo-negativo.png" alt="JyO Solutions Logo" className="h-8 w-auto object-contain" />
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`font-mono text-sm transition-all duration-200 pb-1 border-b-2 ${
                  activeSection === item.id 
                    ? 'text-primary border-primary' 
                    : 'text-on-surface-variant border-transparent hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-outline-variant p-6 flex flex-col gap-4 shadow-xl z-40">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block font-mono text-sm ${
                  activeSection === item.id ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

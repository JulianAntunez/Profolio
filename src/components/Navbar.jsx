import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme, framework, toggleFramework }) {
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
      const scrollPos = window.scrollY + 150;
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
        top: el.offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-4 z-50 max-w-6xl mx-auto px-4 md:px-6">
      <div className="w-full h-16 bg-surface/50 backdrop-blur-xl border border-outline-variant rounded-2xl px-6 flex justify-between items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transition-all">
        <a href="#profile" onClick={(e) => handleClick(e, 'profile')} className="flex items-center gap-3">
          <img src="/img/J&O Solutions - Isotipo 2.png" alt="JyO Solutions Logo" className="h-8 w-auto object-contain brightness-110 dark:brightness-110 light:brightness-100" />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`font-display text-sm font-medium transition-all duration-300 pb-1 relative block ${
                    activeSection === item.id 
                      ? 'text-on-surface' 
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {item.label}
                  {/* Glowing under-line indicator */}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Framework Switch Button */}
            <button
              onClick={toggleFramework}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-on-surface/[0.04] border border-outline-variant text-on-surface-variant hover:text-on-surface hover:bg-on-surface/[0.08] transition-all cursor-pointer font-mono text-xs"
              aria-label="Toggle Framework"
            >
              <span className="material-symbols-outlined text-[15px]">palette</span>
              <span>Bootstrap 5</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2.5 rounded-xl bg-on-surface/[0.04] border border-outline-variant text-on-surface-variant hover:text-on-surface hover:bg-on-surface/[0.08] transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-[18px]">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Framework Toggle Button Mobile */}
          <button
            onClick={toggleFramework}
            className="flex items-center justify-center px-2 py-2 rounded-lg bg-on-surface/[0.04] border border-outline-variant text-on-surface-variant hover:text-on-surface hover:bg-on-surface/[0.08] transition-all cursor-pointer font-mono text-[10px]"
            aria-label="Toggle Framework"
          >
            🎨 BS5
          </button>

          {/* Theme Toggle Button Mobile */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-lg bg-on-surface/[0.04] border border-outline-variant text-on-surface-variant hover:text-on-surface hover:bg-on-surface/[0.08] transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-violet-400 hover:text-cyan-400 transition-colors flex items-center justify-center p-2.5 rounded-lg bg-on-surface/[0.04] border border-outline-variant cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[18px]">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden absolute top-20 left-4 right-4 bg-surface/90 backdrop-blur-2xl border border-outline-variant p-6 flex flex-col gap-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.3)] z-40 transition-all">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block font-display text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                  activeSection === item.id 
                    ? 'text-on-surface bg-on-surface/[0.05] border-l-2 border-violet-500' 
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-on-surface/[0.05]'
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

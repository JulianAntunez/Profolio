import React, { useState, useEffect } from 'react';

export default function BootstrapNavbar({ theme, toggleTheme, framework, toggleFramework }) {
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
    <nav className="navbar navbar-expand-md sticky-top py-3 bootstrap-glass-card m-3 rounded-4 shadow-sm z-3">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#profile" onClick={(e) => handleClick(e, 'profile')}>
          <img 
            src="/img/J&O Solutions - Isotipo 2.png" 
            alt="JyO Solutions Logo" 
            style={{ height: '32px', objectFit: 'contain' }} 
            className="brightness-110" 
          />
        </a>

        {/* Mobile togglers */}
        <div className="d-flex align-items-center gap-2 d-md-none">
          <button 
            onClick={toggleFramework} 
            className="btn btn-sm btn-outline-secondary font-monospace"
            style={{ fontSize: '11px' }}
          >
            🎨 Tailwind
          </button>
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-dark d-flex align-items-center justify-content-center p-2 rounded-3 border-secondary-subtle"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button
            className="btn btn-sm btn-dark text-info p-2 rounded-3 border-secondary-subtle"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Collapsible menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show mt-3' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-md-0 gap-lg-4 gap-md-2 font-monospace">
            {navItems.map((item) => (
              <li className="nav-item position-relative" key={item.id}>
                <a
                  className={`nav-link px-3 py-2 rounded-3 transition-all ${
                    activeSection === item.id 
                      ? 'text-white fw-bold bg-dark bg-opacity-50' 
                      : 'text-secondary-custom'
                  }`}
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  style={{ fontSize: '14px' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions (Desktop only) */}
          <div className="d-none d-md-flex align-items-center gap-3">
            {/* Framework Selector */}
            <button 
              onClick={toggleFramework} 
              className="btn btn-sm btn-outline-info font-monospace d-flex align-items-center gap-1.5 px-3 py-2 rounded-3"
              style={{ fontSize: '12px' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>palette</span>
              <span>Tailwind CSS</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-sm btn-dark d-flex align-items-center justify-content-center p-2.5 rounded-3 border border-secondary-subtle"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

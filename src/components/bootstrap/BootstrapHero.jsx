import React from 'react';
import BootstrapTerminalSimulator from './BootstrapTerminalSimulator';

export default function BootstrapHero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="container py-5 my-5" id="profile">
      <div className="row align-items-center g-5">
        
        {/* Intro text */}
        <div className="col-lg-7 d-flex flex-col align-items-start text-start">
          
          {/* Glass Badge */}
          <div 
            className="d-flex align-items-center gap-2 mb-4 px-3 py-1.5 rounded-pill"
            style={{ 
              background: 'rgba(16, 185, 129, 0.1)', 
              border: '1px solid rgba(16, 185, 129, 0.2)' 
            }}
          >
            <span 
              className="rounded-circle bg-success" 
              style={{ 
                width: '8px', 
                height: '8px', 
                animation: 'pulse 1.5s infinite' 
              }}
            ></span>
            <span className="font-monospace fw-semibold text-success" style={{ fontSize: '11px', letterSpacing: '0.05em' }}>
              DISPONIBLE PARA NUEVOS PROYECTOS
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="fw-black display-4 mb-4 text-white font-display tracking-tight">
            Analista de Sistemas & <br />
            <span className="gradient-text-primary d-block mt-2">.NET Developer</span>
          </h1>
          
          {/* Intro paragraph */}
          <p className="text-secondary-custom mb-5 max-w-2xl font-body" style={{ fontSize: '17px', lineHeight: '1.65' }}>
            Especializado en el desarrollo de software empresarial con el ecosistema <strong className="text-info font-semibold">.NET</strong> y la gestión de infraestructura crítica en entornos de alta disponibilidad (Casino). Apasionado por optimizar procesos mediante automatizaciones y el diseño de herramientas de software robustas y personalizadas.
          </p>
          
          {/* Actions */}
          <div className="d-flex flex-wrap gap-3">
            <button
              onClick={() => handleScrollTo('projects')}
              className="btn btn-primary btn-glow px-4 py-3 rounded-3 fw-semibold d-flex align-items-center gap-2 cursor-pointer border-0"
              style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)' }}
            >
              Ver Proyectos
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </button>
            <button
              onClick={() => handleScrollTo('experience')}
              className="btn btn-dark text-white-50 px-4 py-3 rounded-3 fw-semibold border border-secondary-subtle hover:text-white transition-all cursor-pointer"
              style={{ background: 'rgba(255, 255, 255, 0.02)' }}
            >
              Trayectoria
            </button>
          </div>
        </div>

        {/* Terminal column */}
        <div className="col-lg-5 position-relative">
          {/* Subtle glow effect behind terminal */}
          <div 
            className="position-absolute start-50 top-50 translate-middle rounded-circle" 
            style={{ 
              width: '100%', 
              height: '100%', 
              background: 'rgba(139, 92, 246, 0.06)', 
              filter: 'blur(80px)', 
              pointerEvents: 'none', 
              zIndex: -1 
            }} 
          />
          <BootstrapTerminalSimulator />
        </div>
      </div>
    </section>
  );
}

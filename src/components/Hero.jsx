import React from 'react';
import TerminalSimulator from './TerminalSimulator';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="container mx-auto px-6 py-12 md:py-24" id="profile">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 flex flex-col items-start text-left">
          <div className="flex items-center gap-2 mb-4 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 status-dot-pulse"></span>
            <span className="font-mono text-xs text-emerald-400 font-medium tracking-wide">
              DISPONIBLE PARA NUEVOS PROYECTOS
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-on-surface">
            Analista de Sistemas & <br />
            <span className="text-primary">.NET Developer</span>
          </h1>
          
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-8">
            Analista de Sistemas con sólida formación técnica y experiencia práctica en gestión de infraestructura y desarrollo de aplicaciones. Especializado en el ecosistema .NET y soporte de infraestructuras críticas en entornos de alta disponibilidad (Casino). Enfocado en optimizar procesos mediante la automatización y el desarrollo de herramientas de software personalizadas.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScrollTo('projects')}
              className="bg-primary text-on-primary font-mono text-sm px-6 py-3 rounded-sm font-semibold hover:bg-primary/95 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(164,230,255,0.25)] hover:shadow-[0_0_25px_rgba(164,230,255,0.4)]"
            >
              Ver Proyectos
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <button
              onClick={() => handleScrollTo('experience')}
              className="border border-outline-variant font-mono text-sm px-6 py-3 rounded-sm text-on-surface hover:border-primary hover:text-primary transition-all bg-transparent"
            >
              Technical Stack
            </button>
          </div>
        </div>

        <div className="md:col-span-5 w-full">
          <TerminalSimulator />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import TerminalSimulator from './TerminalSimulator';

export default function Hero() {
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
    <section className="container mx-auto px-6 py-12 md:py-28 relative" id="profile">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Intro text */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Glass Badge */}
          <div className="flex items-center gap-2 mb-6 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot-pulse"></span>
            <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
              DISPONIBLE PARA NUEVOS PROYECTOS
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-none mb-6 text-on-surface tracking-tight">
            Analista de Sistemas & <br />
            <span className="gradient-text-primary block mt-2">.NET Developer</span>
          </h1>
          
          {/* Intro paragraph */}
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
            Especializado en el desarrollo de software empresarial con el ecosistema <strong className="text-primary font-semibold">.NET</strong> y la gestión de infraestructura crítica en entornos de alta disponibilidad (Casino). Apasionado por optimizar procesos mediante automatizaciones y el diseño de herramientas de software robustas y personalizadas.
          </p>
          
          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScrollTo('projects')}
              className="btn-glow font-display text-sm px-8 py-3.5 rounded-xl font-semibold hover:bg-primary/95 transition-all flex items-center gap-2 cursor-pointer"
            >
              Ver Proyectos
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <button
              onClick={() => handleScrollTo('experience')}
              className="border border-outline bg-on-surface/[0.02] backdrop-blur-md font-display text-sm px-8 py-3.5 rounded-xl text-on-surface-variant font-semibold hover:border-primary/35 hover:text-on-surface hover:bg-on-surface/[0.06] transition-all cursor-pointer"
            >
              Trayectoria
            </button>
          </div>
        </div>

        {/* Terminal or graphical elements */}
        <div className="lg:col-span-5 w-full relative">
          {/* Subtle glow effect behind terminal */}
          <div className="absolute inset-0 bg-violet-600/10 blur-[80px] rounded-full pointer-events-none -z-10" />
          <TerminalSimulator />
        </div>
      </div>
    </section>
  );
}

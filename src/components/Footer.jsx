import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/80 bg-slate-950/20 backdrop-blur-md py-8 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <p className="font-mono text-sm text-slate-300">JyO Solutions // Systems Analyst & .NET Developer</p>
          <p className="text-xs text-slate-500 mt-1">
            © 2026 JyO Solutions. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex gap-6 font-mono text-sm">
          <a href="https://linkedin.com/in/analyst-net" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors">LinkedIn</a>
          <a href="https://github.com/JulianAntunez" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="mailto:JyOSolutions@gmail.com.ar" className="text-slate-400 hover:text-violet-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

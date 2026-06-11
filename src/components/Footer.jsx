import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <p className="font-mono text-sm text-on-surface">JyO Solutions // Systems Analyst & .NET Developer</p>
          <p className="text-xs text-on-surface-variant mt-1">
            © 2026 JyO Solutions. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex gap-6 font-mono text-sm">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-all">LinkedIn</a>
          <a href="https://github.com/JulianAntunez" className="text-on-surface-variant hover:text-primary transition-all">GitHub</a>
          <a href="mailto:JyOSolutions@gmail.com.ar" className="text-on-surface-variant hover:text-primary transition-all">Email</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-all">CV</a>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';

export default function BootstrapFooter() {
  return (
    <footer 
      className="py-5 mt-5"
      style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
        background: 'rgba(15, 23, 42, 0.1)', 
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center text-md-start px-4">
        <div>
          <p className="font-monospace small text-light-emphasis mb-0">
            JyO Solutions // Systems Analyst & .NET Developer
          </p>
          <p className="text-secondary-custom mt-1 mb-0" style={{ fontSize: '12px' }}>
            © 2026 JyO Solutions. Todos los derechos reservados.
          </p>
        </div>
        <div className="d-flex gap-4 font-monospace small">
          <a 
            href="https://www.linkedin.com/in/juli%C3%A1n-ant%C3%BAnez-b3b57b223/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-secondary-custom text-decoration-none"
            style={{ transition: 'color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#a78bfa'}
            onMouseOut={(e) => e.currentTarget.style.color = ''}
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/JulianAntunez" 
            target="_blank" 
            rel="noreferrer" 
            className="text-secondary-custom text-decoration-none"
            style={{ transition: 'color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#22d3ee'}
            onMouseOut={(e) => e.currentTarget.style.color = ''}
          >
            GitHub
          </a>
          <a 
            href="mailto:JyOSolutions@gmail.com.ar" 
            className="text-secondary-custom text-decoration-none"
            style={{ transition: 'color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#a78bfa'}
            onMouseOut={(e) => e.currentTarget.style.color = ''}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';

const renderTechIcon = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes('net 8') || t.includes('net core') || t.includes('.net')) {
    return <i className="devicon-dotnetcore-plain colored text-xs shrink-0"></i>;
  }
  if (t.includes('c#')) {
    return <i className="devicon-csharp-plain colored text-xs shrink-0"></i>;
  }
  if (t.includes('sql server') || t.includes('server') || t.includes('database')) {
    return <i className="devicon-microsoftsqlserver-plain colored text-xs shrink-0"></i>;
  }
  if (t.includes('react') || t.includes('jsx')) {
    return <i className="devicon-react-original colored text-xs shrink-0"></i>;
  }
  if (t.includes('javascript') || t.includes('js')) {
    return <i className="devicon-javascript-plain colored text-xs shrink-0"></i>;
  }
  if (t.includes('html')) {
    return <i className="devicon-html5-plain colored text-xs shrink-0"></i>;
  }
  if (t.includes('css')) {
    return <i className="devicon-css3-plain colored text-xs shrink-0"></i>;
  }
  if (t.includes('php')) {
    return <i className="devicon-php-plain colored text-xs shrink-0"></i>;
  }
  if (t.includes('cisco') || t.includes('networking')) {
    return <i className="devicon-cisco-plain colored text-xs shrink-0"></i>;
  }
  if (t.includes('visual basic') || t.includes('vb')) {
    return <i className="devicon-windows8-original colored text-xs shrink-0"></i>;
  }
  
  if (t.includes('dapper')) {
    return <span className="material-symbols-outlined text-[10px] text-warning font-bold shrink-0">database</span>;
  }
  if (t.includes('entity framework') || t.includes('ef')) {
    return <span className="material-symbols-outlined text-[10px] text-info font-bold shrink-0">hub</span>;
  }
  if (t.includes('signalr')) {
    return <span className="material-symbols-outlined text-[10px] text-warning font-bold shrink-0">sensors</span>;
  }
  if (t.includes('api')) {
    return <span className="material-symbols-outlined text-[10px] text-success font-bold shrink-0">api</span>;
  }
  if (t.includes('windows forms')) {
    return <span className="material-symbols-outlined text-[10px] text-info font-bold shrink-0">desktop_windows</span>;
  }
  if (t.includes('openxml')) {
    return <span className="material-symbols-outlined text-[10px] text-success font-bold shrink-0">description</span>;
  }
  if (t.includes('pdf') || t.includes('questpdf')) {
    return <span className="material-symbols-outlined text-[10px] text-danger font-bold shrink-0">picture_as_pdf</span>;
  }
  if (t.includes('active directory') || t.includes('ad')) {
    return <span className="material-symbols-outlined text-[10px] text-primary font-bold shrink-0">admin_panel_settings</span>;
  }
  if (t.includes('cctv')) {
    return <span className="material-symbols-outlined text-[10px] text-danger font-bold shrink-0">videocam</span>;
  }
  if (t.includes('dvr') || t.includes('nvr') || t.includes('memory')) {
    return <span className="material-symbols-outlined text-[10px] text-warning font-bold shrink-0">memory</span>;
  }

  return <span className="material-symbols-outlined text-[10px] text-info font-bold shrink-0">tag</span>;
};

export default function BootstrapExperienceAndEducation() {
  return (
    <section className="container py-5 my-5 position-relative" id="experience">
      {/* Background glow for the section */}
      <div 
        className="position-absolute top-25 start-100 translate-middle-x rounded-circle" 
        style={{ width: '400px', height: '400px', background: 'rgba(6, 180, 212, 0.03)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: -1 }} 
      />
      <div 
        className="position-absolute bottom-25 start-0 translate-middle-x rounded-circle" 
        style={{ width: '400px', height: '400px', background: 'rgba(139, 92, 246, 0.03)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: -1 }} 
      />

      <div className="mb-5">
        <span className="font-monospace text-info small tracking-widest d-block mb-2">// TRAYECTORIA / DESARROLLO</span>
        <h2 className="fw-black display-6 text-white font-display">Infraestructura y Formación</h2>
      </div>

      <div className="row g-4">
        
        {/* Experience Box (Casino) */}
        <div className="col-lg-7">
          <div className="card bootstrap-glass-card p-4 h-100 d-flex flex-column justify-content-between border-0 shadow-sm">
            <div>
              <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap gap-2">
                <div>
                  <h3 className="fw-bold fs-4 text-white mb-2 font-display">
                    Casino - Infraestructura & Desarrollo
                  </h3>
                  <div className="font-monospace text-secondary-custom small d-flex align-items-center gap-1.5" style={{ fontSize: '12px' }}>
                    <span className="material-symbols-outlined text-info" style={{ fontSize: '15px' }}>calendar_today</span>
                    Trayectoria Profesional
                  </div>
                </div>
                <span 
                  className="font-monospace px-3 py-1 rounded-pill small border" 
                  style={{ 
                    fontSize: '10px', 
                    background: 'rgba(139, 92, 246, 0.1)', 
                    color: '#a78bfa', 
                    borderColor: 'rgba(139, 92, 246, 0.2)' 
                  }}
                >
                  LIVE_OPS
                </span>
              </div>

              {/* Timeline Items */}
              <div 
                className="position-relative ps-4 ms-2 d-flex flex-column gap-4" 
                style={{ borderLeft: '1px solid var(--outline-color)' }}
              >
                
                <div className="position-relative">
                  <div 
                    className="position-absolute rounded-circle bg-dark border border-info d-flex align-items-center justify-content-center font-monospace fw-bold" 
                    style={{ width: '24px', height: '24px', left: '-37px', top: '0', fontSize: '10px', color: '#06b6d4', boxShadow: '0 0 10px rgba(6, 180, 212, 0.2)' }}
                  >
                    01
                  </div>
                  <div>
                    <p className="text-secondary-custom mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      Administración integral de infraestructura crítica, incluyendo gestión de redes y despliegue de servidores.
                    </p>
                  </div>
                </div>

                <div className="position-relative">
                  <div 
                    className="position-absolute rounded-circle bg-dark border border-info d-flex align-items-center justify-content-center font-monospace fw-bold" 
                    style={{ width: '24px', height: '24px', left: '-37px', top: '0', fontSize: '10px', color: '#06b6d4', boxShadow: '0 0 10px rgba(6, 180, 212, 0.2)' }}
                  >
                    02
                  </div>
                  <div>
                    <p className="text-secondary-custom mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      Desarrollo de software interno utilizando el stack .NET, implementando conceptos avanzados de arquitectura y optimización de bases de datos.
                    </p>
                  </div>
                </div>

                <div className="position-relative">
                  <div 
                    className="position-absolute rounded-circle bg-dark border border-info d-flex align-items-center justify-content-center font-monospace fw-bold" 
                    style={{ width: '24px', height: '24px', left: '-37px', top: '0', fontSize: '10px', color: '#06b6d4', boxShadow: '0 0 10px rgba(6, 180, 212, 0.2)' }}
                  >
                    03
                  </div>
                  <div>
                    <p className="text-secondary-custom mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      Optimización sistemática de procesos operativos a través de automatización y refinamiento técnico.
                    </p>
                  </div>
                </div>

                <div className="position-relative">
                  <div 
                    className="position-absolute rounded-circle bg-dark border border-info d-flex align-items-center justify-content-center font-monospace fw-bold" 
                    style={{ width: '24px', height: '24px', left: '-37px', top: '0', fontSize: '10px', color: '#06b6d4', boxShadow: '0 0 10px rgba(6, 180, 212, 0.2)' }}
                  >
                    04
                  </div>
                  <div>
                    <p className="text-secondary-custom mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      Instalación y mantenimiento de sistemas de videovigilancia CCTV, configurando cámaras analógicas e IP, DVRs y NVRs.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Chips footer */}
            <div 
              className="d-flex flex-wrap gap-2 pt-4 mt-5"
              style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
            >
              {['.NET 8', 'C#', 'Active Directory', 'SQL Server', 'Cisco Networking', 'CCTV (IP/Analógico)', 'DVR & NVR'].map((tech) => (
                <span 
                  key={tech} 
                  className="chip d-inline-flex align-items-center gap-1.5"
                  style={{ textDecoration: 'none' }}
                >
                  {renderTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education Box */}
        <div className="col-lg-5">
          <div className="card bootstrap-glass-card p-4 h-100 d-flex flex-column justify-content-between border-0 shadow-sm">
            <div>
              <div className="mb-4">
                <h3 className="fw-bold fs-5 text-white mb-1 font-display">Técnico Superior Analista de Sistemas</h3>
                <p className="font-monospace text-info mb-3" style={{ fontSize: '12px' }}>Instituto Argentino de Estudios Superiores (I.A.E.S.)</p>
                <span 
                  className="font-monospace px-2.5 py-0.5 rounded-pill small border" 
                  style={{ 
                    fontSize: '9px', 
                    background: 'rgba(6, 180, 212, 0.1)', 
                    color: '#22d3ee', 
                    borderColor: 'rgba(6, 180, 212, 0.2)' 
                  }}
                >
                  COMPLETO
                </span>
              </div>
              
              <div className="pt-4 mb-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h3 className="fw-bold fs-5 text-white mb-1 font-display">Ciencia de Datos e IA</h3>
                <p className="font-monospace text-info mb-3" style={{ fontSize: '12px' }}>Formación Académica en Progreso</p>
                <span 
                  className="font-monospace px-2.5 py-0.5 rounded-pill small border" 
                  style={{ 
                    fontSize: '9px', 
                    background: 'rgba(6, 180, 212, 0.2)', 
                    color: '#67e8f9', 
                    borderColor: 'rgba(6, 180, 212, 0.3)' 
                  }}
                >
                  1º AÑO EN CURSO
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities Mini Cards */}
        <div className="col-sm-6 col-lg-3">
          <div className="card bootstrap-glass-card p-3 border-0 h-100 d-flex flex-row align-items-center gap-3">
            <div 
              className="rounded-3 d-flex align-items-center justify-content-center shadow-sm"
              style={{ 
                width: '48px', 
                height: '48px', 
                background: 'rgba(139, 92, 246, 0.1)', 
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#a78bfa'
              }}
            >
              <i className="devicon-dotnetcore-plain colored fs-4"></i>
            </div>
            <div>
              <div className="font-monospace text-info" style={{ fontSize: '10px' }}>STACK</div>
              <div className="fw-bold text-white font-display mt-0.5" style={{ fontSize: '13px' }}>.NET (C# / ASP.NET)</div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card bootstrap-glass-card p-3 border-0 h-100 d-flex flex-row align-items-center gap-3">
            <div 
              className="rounded-3 d-flex align-items-center justify-content-center shadow-sm"
              style={{ 
                width: '48px', 
                height: '48px', 
                background: 'rgba(6, 180, 212, 0.1)', 
                border: '1px solid rgba(6, 180, 212, 0.2)',
                color: '#22d3ee'
              }}
            >
              <i className="devicon-cisco-plain colored fs-4"></i>
            </div>
            <div>
              <div className="font-monospace text-info" style={{ fontSize: '10px' }}>REDES</div>
              <div className="fw-bold text-white font-display mt-0.5" style={{ fontSize: '13px' }}>Cisco & Redes Críticas</div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card bootstrap-glass-card p-3 border-0 h-100 d-flex flex-row align-items-center gap-3">
            <div 
              className="rounded-3 d-flex align-items-center justify-content-center shadow-sm"
              style={{ 
                width: '48px', 
                height: '48px', 
                background: 'rgba(139, 92, 246, 0.1)', 
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#a78bfa'
              }}
            >
              <i className="devicon-microsoftsqlserver-plain colored fs-4"></i>
            </div>
            <div>
              <div className="font-monospace text-info" style={{ fontSize: '10px' }}>DATOS</div>
              <div className="fw-bold text-white font-display mt-0.5" style={{ fontSize: '13px' }}>BBDD Relacionales</div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card bootstrap-glass-card p-3 border-0 h-100 d-flex flex-row align-items-center gap-3">
            <div 
              className="rounded-3 d-flex align-items-center justify-content-center shadow-sm"
              style={{ 
                width: '48px', 
                height: '48px', 
                background: 'rgba(6, 180, 212, 0.1)', 
                border: '1px solid rgba(6, 180, 212, 0.2)',
                color: '#22d3ee'
              }}
            >
              <span className="material-symbols-outlined fs-4 text-info font-semibold">g_translate</span>
            </div>
            <div>
              <div className="font-monospace text-info" style={{ fontSize: '10px' }}>INGLÉS</div>
              <div className="fw-bold text-white font-display mt-0.5" style={{ fontSize: '13px' }}>Lectura Avanzada (ADV)</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

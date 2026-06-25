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

export default function BootstrapProjects() {
  const projectsData = [
    {
      title: 'Sistema de Inventario de Hardware',
      desc: 'Aplicación .NET empresarial diseñada para el control total del ciclo de vida de la infraestructura crítica. Permite el seguimiento desde la adquisición hasta la disposición final, con trazabilidad completa de cambios de componentes y asignaciones de activos.',
      tag: '# INFRAESTRUCTURA / INVENTARIO',
      status: 'ACTIVE',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjFhWXRN45TcIBxBDtwd_pIAtmWRvsQUyX1p2E8rVDWAgmoJPzYROf-rjp6ZrkZUvKHORx6kpg0iVVQRk-GVnSba4bAvsOKORpdD5M8VvmCGpgGW4uifN4WtWGgUYgIYEHBnaQFrwaNBVWldivc714WxlCWscE2I0jv95MNm4eECwmFyY_gtJMjGOMCcm9-YVBJfEYuJfSk3R5EOHca8ppmVyuDS9qpL4WoH67M0yuL80oH3oLsHX0Lhv3F57jzO7IQdCEVMafjXM',
      tech: ['.NET 8', 'SQL Server', 'Dapper', 'Entity Framework'],
      bootstrapCols: 'col-lg-8'
    },
    {
      title: 'Monitor de Servicios Críticos',
      desc: 'Dashboard en tiempo real para el monitoreo de alertas de servicios esenciales del casino, garantizando una disponibilidad del 99.9%.',
      tag: '# MONITORING',
      status: 'LIVE',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKtuCYRpbcu1BrwKjf9GuxVXJ8crjCKEOmPTYC-nS5v6L8tg-8rQsPKncQBUDzyBG2fIq6a_kgTrSMy6DvejlU0vk1o59YregYMDIvGW5KgYooWuru1imvcbfioHpc86PXUE55hmjn8rwb1qLO9uhEPM6ZRDu_48_pivR9R6xw_ofHAmRl38lETNX9LJRGN2SvgqGKQuExyqVO09vg4w2pONvL5plviKrcvpwYIerAfrafdzUucKG5-b8c--NXhL0Xf6TTWuoB8oM',
      tech: ['.NET Core', 'SignalR', 'API Integration'],
      bootstrapCols: 'col-lg-4'
    },
    {
      title: 'Sistema Torneo de Bingo',
      desc: 'Aplicación de escritorio operativa y en producción dentro del casino para la administración, sorteo y control en tiempo real de torneos de bingo.',
      tag: '# CASINO_OPERATIONS / VB',
      status: 'LIVE',
      img: '/img/bingo_dashboard.png',
      tech: ['Visual Basic', 'Windows Forms', 'SQL Server'],
      bootstrapCols: 'col-lg-6'
    },
    {
      title: 'Automatizador de Reportes',
      desc: 'Herramienta de extracción masiva de datos y generación dinámica de informes técnicos en formatos Excel y PDF enriquecidos.',
      tag: '# AUTOMATION',
      status: 'STABLE',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTV-xU7MdRhaIBG6HylL-VlPl8AMlCrSZHPAF60JDrGtzP4UD-vNh5ihXb3ZoFK7SI3rO-_MsSFQqNKNL43dyC31xaqKaRfwCaAyByKm2bY5BNgwGH_7BnIkge5URXy9OBj27cp_-ysYtFvwOwmIggxcwfTutcYgubTh62l719T1MeiwY9XzOeM5UkHHRLHc11kpZ8gqHD55wlNMz4z4aaqoc6p1CkM3XxR7hEE2NkheNkeNscKiI9RHIAOQJ6mjJYIMIGyfkqSBM',
      tech: ['OpenXML', 'QuestPDF', 'Dapper'],
      bootstrapCols: 'col-lg-6'
    },
    {
      title: 'Despliegues en Antigravity',
      desc: 'Desarrollo de módulos e interfaces de aplicaciones dinámicas utilizando arquitecturas modernas asistidas por IA, con integración de tecnologías web clave.',
      tag: '# AI_ASSISTED_DEV',
      status: 'ACTIVE',
      img: '/img/antigravity_dev.png',
      tech: ['HTML5', 'PHP', 'JSX', 'Antigravity API'],
      bootstrapCols: 'col-lg-6'
    }
  ];

  return (
    <section className="container py-5 my-5 position-relative" id="projects">
      {/* Subtle glowing blob background decoration */}
      <div 
        className="position-absolute top-50 start-25 translate-middle rounded-circle" 
        style={{ width: '350px', height: '350px', background: 'rgba(139, 92, 246, 0.03)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: -1 }} 
      />

      <div className="mb-5">
        <span className="font-monospace text-info small tracking-widest d-block mb-2">// PORTFOLIO / SISTEMAS</span>
        <h2 className="fw-black display-6 text-white font-display">Proyectos Críticos</h2>
      </div>

      <div className="row g-4">
        {projectsData.map((project, idx) => (
          <div key={idx} className={`col-12 ${project.bootstrapCols}`}>
            <div className="card bootstrap-glass-card border-0 h-100 overflow-hidden d-flex flex-column shadow-sm">
              
              {/* Visual Cover */}
              <div className="position-relative" style={{ height: '210px', overflow: 'hidden' }}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-100 h-100 object-cover"
                  style={{ opacity: 0.65, transition: 'transform 0.5s ease-in-out' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
                <div 
                  className="position-absolute inset-0" 
                  style={{ background: 'linear-gradient(to top, rgba(3, 7, 18, 0.95) 0%, rgba(3, 7, 18, 0.2) 80%, transparent 100%)' }}
                />
                
                {/* Overlay Status Badge */}
                <div className="position-absolute top-0 end-0 m-3">
                  {project.status === 'LIVE' ? (
                    <span 
                      className="badge font-monospace px-3 py-1.5 rounded-pill d-inline-flex align-items-center gap-1.5 border"
                      style={{ 
                        background: 'rgba(16, 185, 129, 0.1)', 
                        color: '#34d399', 
                        borderColor: 'rgba(16, 185, 129, 0.2)' 
                      }}
                    >
                      <span 
                        className="rounded-circle bg-success" 
                        style={{ 
                          width: '6px', 
                          height: '6px', 
                          animation: 'pulse 1.5s infinite' 
                        }}
                      ></span>
                      {project.status}
                    </span>
                  ) : (
                    <span 
                      className="badge font-monospace px-3 py-1.5 rounded-pill border"
                      style={{ 
                        background: 'rgba(139, 92, 246, 0.1)', 
                        color: '#a78bfa', 
                        borderColor: 'rgba(139, 92, 246, 0.2)' 
                      }}
                    >
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Info details */}
              <div className="card-body p-4 d-flex flex-column flex-grow-1">
                <span className="font-monospace text-info tracking-wider mb-2 d-block" style={{ fontSize: '10px' }}>
                  {project.tag}
                </span>

                <h3 className="card-title fw-bold text-white mb-3 font-display fs-5">
                  {project.title}
                </h3>
                
                <p className="card-text text-secondary-custom small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                  {project.desc}
                </p>
                
                <div 
                  className="d-flex flex-wrap gap-2 pt-3 mt-auto"
                  style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
                >
                  {project.tech.map((t, index) => (
                    <span 
                      key={index} 
                      className="chip d-inline-flex align-items-center gap-1.5"
                    >
                      {renderTechIcon(t)}
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Stats Bento Box */}
        <div className="col-12 col-lg-6">
          <div className="card bootstrap-glass-card border-0 h-100 p-4 d-flex flex-column justify-content-center shadow-sm">
            <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center gap-4 text-center py-3">
              <div>
                <div className="fw-black display-6 gradient-text-primary">15+</div>
                <div className="font-monospace text-secondary-custom mt-2 uppercase" style={{ fontSize: '9px', letterSpacing: '0.15em' }}>Sistemas Desplegados</div>
              </div>
              
              <div className="d-none d-sm-block border-start border-light border-opacity-10" style={{ height: '48px' }} />
              
              <div>
                <div className="fw-black display-6 gradient-text-primary">4K+</div>
                <div className="font-monospace text-secondary-custom mt-2 uppercase" style={{ fontSize: '9px', letterSpacing: '0.15em' }}>Activos Gestionados</div>
              </div>
              
              <div className="d-none d-sm-block border-start border-light border-opacity-10" style={{ height: '48px' }} />
              
              <div>
                <div className="fw-black display-6 gradient-text-primary">99.9%</div>
                <div className="font-monospace text-secondary-custom mt-2 uppercase" style={{ fontSize: '9px', letterSpacing: '0.15em' }}>Uptime en Servicios</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

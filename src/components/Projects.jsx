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
  
  // Custom styled Material Symbols
  if (t.includes('dapper')) {
    return <span className="material-symbols-outlined text-[10px] text-amber-500 font-bold shrink-0">database</span>;
  }
  if (t.includes('entity framework') || t.includes('ef')) {
    return <span className="material-symbols-outlined text-[10px] text-sky-400 font-bold shrink-0">hub</span>;
  }
  if (t.includes('signalr')) {
    return <span className="material-symbols-outlined text-[10px] text-orange-500 font-bold shrink-0">sensors</span>;
  }
  if (t.includes('api')) {
    return <span className="material-symbols-outlined text-[10px] text-emerald-400 font-bold shrink-0">api</span>;
  }
  if (t.includes('windows forms')) {
    return <span className="material-symbols-outlined text-[10px] text-cyan-400 font-bold shrink-0">desktop_windows</span>;
  }
  if (t.includes('openxml')) {
    return <span className="material-symbols-outlined text-[10px] text-emerald-500 font-bold shrink-0">description</span>;
  }
  if (t.includes('pdf') || t.includes('questpdf')) {
    return <span className="material-symbols-outlined text-[10px] text-rose-500 font-bold shrink-0">picture_as_pdf</span>;
  }
  if (t.includes('active directory') || t.includes('ad')) {
    return <span className="material-symbols-outlined text-[10px] text-blue-400 font-bold shrink-0">admin_panel_settings</span>;
  }
  if (t.includes('cctv')) {
    return <span className="material-symbols-outlined text-[10px] text-red-400 font-bold shrink-0">videocam</span>;
  }
  if (t.includes('dvr') || t.includes('nvr') || t.includes('memory')) {
    return <span className="material-symbols-outlined text-[10px] text-amber-400 font-bold shrink-0">memory</span>;
  }

  return <span className="material-symbols-outlined text-[10px] text-cyan-400 font-bold shrink-0">tag</span>;
};

export default function Projects() {
  const projectsData = [
    {
      title: 'Sistema de Inventario de Hardware',
      desc: 'Aplicación .NET empresarial diseñada para el control total del ciclo de vida de la infraestructura crítica. Permite el seguimiento desde la adquisición hasta la disposición final, con trazabilidad completa de cambios de componentes y asignaciones de activos.',
      tag: '# INFRAESTRUCTURA / INVENTARIO',
      status: 'ACTIVE',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjFhWXRN45TcIBxBDtwd_pIAtmWRvsQUyX1p2E8rVDWAgmoJPzYROf-rjp6ZrkZUvKHORx6kpg0iVVQRk-GVnSba4bAvsOKORpdD5M8VvmCGpgGW4uifN4WtWGgUYgIYEHBnaQFrwaNBVWldivc714WxlCWscE2I0jv95MNm4eECwmFyY_gtJMjGOMCcm9-YVBJfEYuJfSk3R5EOHca8ppmVyuDS9qpL4WoH67M0yuL80oH3oLsHX0Lhv3F57jzO7IQdCEVMafjXM',
      tech: ['.NET 8', 'SQL Server', 'Dapper', 'Entity Framework'],
      cols: 'lg:col-span-8'
    },
    {
      title: 'Monitor de Servicios Críticos',
      desc: 'Dashboard en tiempo real para el monitoreo de alertas de servicios esenciales del casino, garantizando una disponibilidad del 99.9%.',
      tag: '# MONITORING',
      status: 'LIVE',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKtuCYRpbcu1BrwKjf9GuxVXJ8crjCKEOmPTYC-nS5v6L8tg-8rQsPKncQBUDzyBG2fIq6a_kgTrSMy6DvejlU0vk1o59YregYMDIvGW5KgYooWuru1imvcbfioHpc86PXUE55hmjn8rwb1qLO9uhEPM6ZRDu_48_pivR9R6xw_ofHAmRl38lETNX9LJRGN2SvgqGKQuExyqVO09vg4w2pONvL5plviKrcvpwYIerAfrafdzUucKG5-b8c--NXhL0Xf6TTWuoB8oM',
      tech: ['.NET Core', 'SignalR', 'API Integration'],
      cols: 'lg:col-span-4'
    },
    {
      title: 'Sistema Torneo de Bingo',
      desc: 'Aplicación de escritorio operativa y en producción dentro del casino para la administración, sorteo y control en tiempo real de torneos de bingo.',
      tag: '# CASINO_OPERATIONS / VB',
      status: 'LIVE',
      img: '/img/bingo_dashboard.png',
      tech: ['Visual Basic', 'Windows Forms', 'SQL Server'],
      cols: 'lg:col-span-6'
    },
    {
      title: 'Automatizador de Reportes',
      desc: 'Herramienta de extracción masiva de datos y generación dinámica de informes técnicos en formatos Excel y PDF enriquecidos.',
      tag: '# AUTOMATION',
      status: 'STABLE',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTV-xU7MdRhaIBG6HylL-VlPl8AMlCrSZHPAF60JDrGtzP4UD-vNh5ihXb3ZoFK7SI3rO-_MsSFQqNKNL43dyC31xaqKaRfwCaAyByKm2bY5BNgwGH_7BnIkge5URXy9OBj27cp_-ysYtFvwOwmIggxcwfTutcYgubTh62l719T1MeiwY9XzOeM5UkHHRLHc11kpZ8gqHD55wlNMz4z4aaqoc6p1CkM3XxR7hEE2NkheNkeNscKiI9RHIAOQJ6mjJYIMIGyfkqSBM',
      tech: ['OpenXML', 'QuestPDF', 'Dapper'],
      cols: 'lg:col-span-6'
    },
    {
      title: 'Despliegues en Antigravity',
      desc: 'Desarrollo de módulos e interfaces de aplicaciones dinámicas utilizando arquitecturas modernas asistidas por IA, con integración de tecnologías web clave.',
      tag: '# AI_ASSISTED_DEV',
      status: 'ACTIVE',
      img: '/img/antigravity_dev.png',
      tech: ['HTML5', 'PHP', 'JSX', 'Antigravity API'],
      cols: 'lg:col-span-6'
    }
  ];

  return (
    <section className="container mx-auto px-6 py-16 relative" id="projects">
      {/* Subtle glowing blob background decoration */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="mb-12 flex justify-between items-end">
        <div>
          <span className="font-mono text-sm text-cyan-400 tracking-widest block mb-2">// PORTFOLIO / SISTEMAS</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">Proyectos Críticos</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {projectsData.map((project, idx) => (
          <div key={idx} className={`glass-card flex flex-col group overflow-hidden ${project.cols}`}>
            
            {/* Visual Cover */}
            <div className="h-52 overflow-hidden relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              {/* Overlay Glass Badge for Status */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                {project.status === 'LIVE' ? (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-dot-pulse"></span>
                    {project.status}
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {project.status}
                  </span>
                )}
              </div>
            </div>
            
            {/* Info details */}
            <div className="p-6 flex flex-col flex-grow relative">
              <span className="font-mono text-[10px] text-cyan-400 tracking-wider mb-2 block">{project.tag}</span>

              <h3 className="font-display text-xl font-bold text-on-surface mb-3 group-hover:text-violet-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-outline/30">
                {project.tech.map((t, index) => (
                  <span key={index} className="chip flex items-center gap-1.5 hover:scale-105 transition-all">
                    {renderTechIcon(t)}
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Stats Bento Box */}
        <div className="glass-card p-8 lg:col-span-6 flex flex-col justify-center items-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/5 via-transparent to-cyan-500/5 pointer-events-none" />
          
          <div className="w-full flex flex-col sm:flex-row justify-around items-center gap-8 text-center relative z-10">
            <div className="group-hover:scale-105 transition-transform duration-300">
              <div className="font-display text-4xl lg:text-5xl font-extrabold gradient-text-primary">15+</div>
              <div className="font-mono text-[9px] tracking-widest text-on-surface-variant mt-2 uppercase">Sistemas Desplegados</div>
            </div>
            <div className="hidden sm:block h-12 border-l border-outline/30" />
            
            <div className="group-hover:scale-105 transition-transform duration-300">
              <div className="font-display text-4xl lg:text-5xl font-extrabold gradient-text-primary">4K+</div>
              <div className="font-mono text-[9px] tracking-widest text-on-surface-variant mt-2 uppercase">Activos Gestionados</div>
            </div>
            <div className="hidden sm:block h-12 border-l border-outline/30" />
            
            <div className="group-hover:scale-105 transition-transform duration-300">
              <div className="font-display text-4xl lg:text-5xl font-extrabold gradient-text-primary">99.9%</div>
              <div className="font-mono text-[9px] tracking-widest text-on-surface-variant mt-2 uppercase">Uptime en Servicios</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

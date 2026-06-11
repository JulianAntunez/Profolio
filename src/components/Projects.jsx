import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      title: 'Sistema de Inventario de Hardware',
      desc: 'Aplicación .NET empresarial diseñada para el control total del ciclo de vida de la infraestructura crítica. Permite el seguimiento desde la adquisición hasta la disposición final, con trazabilidad completa de cambios de componentes y asignaciones de activos.',
      tag: '# INFRAESTRUCTURA / INVENTARIO',
      status: 'ACTIVE',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjFhWXRN45TcIBxBDtwd_pIAtmWRvsQUyX1p2E8rVDWAgmoJPzYROf-rjp6ZrkZUvKHORx6kpg0iVVQRk-GVnSba4bAvsOKORpdD5M8VvmCGpgGW4uifN4WtWGgUYgIYEHBnaQFrwaNBVWldivc714WxlCWscE2I0jv95MNm4eECwmFyY_gtJMjGOMCcm9-YVBJfEYuJfSk3R5EOHca8ppmVyuDS9qpL4WoH67M0yuL80oH3oLsHX0Lhv3F57jzO7IQdCEVMafjXM',
      tech: ['.NET 8', 'SQL Server', 'Dapper', 'Entity Framework'],
      cols: 'md:col-span-8'
    },
    {
      title: 'Monitor de Servicios Críticos',
      desc: 'Dashboard en tiempo real para el monitoreo de alertas de servicios esenciales del casino, garantizando una disponibilidad del 99.9%.',
      tag: '# MONITORING',
      status: 'LIVE',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKtuCYRpbcu1BrwKjf9GuxVXJ8crjCKEOmPTYC-nS5v6L8tg-8rQsPKncQBUDzyBG2fIq6a_kgTrSMy6DvejlU0vk1o59YregYMDIvGW5KgYooWuru1imvcbfioHpc86PXUE55hmjn8rwb1qLO9uhEPM6ZRDu_48_pivR9R6xw_ofHAmRl38lETNX9LJRGN2SvgqGKQuExyqVO09vg4w2pONvL5plviKrcvpwYIerAfrafdzUucKG5-b8c--NXhL0Xf6TTWuoB8oM',
      tech: ['.NET Core', 'SignalR', 'API Integration'],
      cols: 'md:col-span-4'
    },
    {
      title: 'Automatizador de Reportes',
      desc: 'Herramienta de extracción masiva de datos y generación dinámica de informes técnicos en formatos Excel y PDF enriquecidos.',
      tag: '# AUTOMATION',
      status: 'STABLE',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTV-xU7MdRhaIBG6HylL-VlPl8AMlCrSZHPAF60JDrGtzP4UD-vNh5ihXb3ZoFK7SI3rO-_MsSFQqNKNL43dyC31xaqKaRfwCaAyByKm2bY5BNgwGH_7BnIkge5URXy9OBj27cp_-ysYtFvwOwmIggxcwfTutcYgubTh62l719T1MeiwY9XzOeM5UkHHRLHc11kpZ8gqHD55wlNMz4z4aaqoc6p1CkM3XxR7hEE2NkheNkeNscKiI9RHIAOQJ6mjJYIMIGyfkqSBM',
      tech: ['OpenXML', 'QuestPDF', 'Dapper'],
      cols: 'md:col-span-6'
    }
  ];

  return (
    <section className="container mx-auto px-6 py-16" id="projects">
      <div className="mb-12">
        <span className="font-mono text-sm text-primary tracking-widest block mb-2">// PORTFOLIO / SYSTEMS_SHOWCASE</span>
        <h2 className="font-display text-3xl font-bold">Proyectos Críticos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        {projectsData.map((project, idx) => (
          <div key={idx} className={`technical-card flex flex-col group overflow-hidden ${project.cols}`}>
            <div className="h-48 overflow-hidden relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs text-primary">{project.tag}</span>
                <div className="flex items-center gap-1.5">
                  {project.status === 'LIVE' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-dot-pulse"></span>}
                  <span className="chip bg-surface-container-high">{project.status}</span>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-body-md text-on-surface-variant mb-6 flex-grow">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant/30">
                {project.tech.map((t, index) => (
                  <span key={index} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Stats Card */}
        <div className="technical-card p-8 md:col-span-6 flex flex-col justify-center items-center">
          <div className="w-full flex flex-wrap justify-around items-center gap-6 text-center">
            <div>
              <div className="font-display text-4xl font-extrabold text-primary">15+</div>
              <div className="font-mono text-[10px] text-on-surface-variant mt-2">SISTEMAS DESPLEGADOS</div>
            </div>
            <div className="hidden md:block h-12 border-l border-outline-variant"></div>
            <div>
              <div className="font-display text-4xl font-extrabold text-primary">4K+</div>
              <div className="font-mono text-[10px] text-on-surface-variant mt-2">ACTIVOS GESTIONADOS</div>
            </div>
            <div className="hidden md:block h-12 border-l border-outline-variant"></div>
            <div>
              <div className="font-display text-4xl font-extrabold text-primary">99.9%</div>
              <div className="font-mono text-[10px] text-on-surface-variant mt-2">UPTIME EN SERVICIOS</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

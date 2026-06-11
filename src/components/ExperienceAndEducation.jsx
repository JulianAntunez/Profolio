import React from 'react';

export default function ExperienceAndEducation() {
  const skillsList = [
    { title: '.NET 8', desc: 'Desarrollo web y backend escalable con C# y ASP.NET Core.' },
    { title: 'Bases de Datos', desc: 'Diseño, optimización y consultas eficientes con SQL Server.' },
    { title: 'Infraestructura', desc: 'Administración de servidores críticos, Active Directory y redes Cisco.' },
    { title: 'Automatización', desc: 'Escribir scripts y automatizar tareas operativas recurrentes.' }
  ];

  return (
    <section className="container mx-auto px-6 py-16" id="experience">
      <div className="mb-12">
        <span className="font-mono text-sm text-primary tracking-widest block mb-2">// SYSTEM_LOGS / CAREER_PATH</span>
        <h2 className="font-display text-3xl font-bold">Infraestructura y Formación</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Experience Box (Casino) */}
        <div className="technical-card p-6 md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-primary mb-1">
                  Casino - Infraestructura & Desarrollo
                </h3>
                <div className="font-mono text-xs text-on-surface-variant flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs">calendar_today</span>
                  Trayectoria Profesional
                </div>
              </div>
              <span className="chip bg-surface-container-highest">LIVE_OPS</span>
            </div>

            <ul className="space-y-4 mb-6">
              <li className="flex gap-4">
                <span className="text-primary font-mono font-bold">01</span>
                <span className="text-body-md text-on-surface-variant">
                  Administración integral de infraestructura crítica, incluyendo gestión de redes y despliegue de servidores.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-mono font-bold">02</span>
                <span className="text-body-md text-on-surface-variant">
                  Desarrollo de software interno utilizando el stack .NET, implementando conceptos avanzados de arquitectura y optimización de bases de datos.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-mono font-bold">03</span>
                <span className="text-body-md text-on-surface-variant">
                  Optimización sistemática de procesos operativos a través de automatización y refinamiento técnico.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant/30">
            <span className="chip">.NET 8</span>
            <span className="chip">C#</span>
            <span className="chip">Active Directory</span>
            <span className="chip">SQL Server</span>
            <span className="chip">Cisco Networking</span>
          </div>
        </div>

        {/* Education Box */}
        <div className="technical-card p-6 md:col-span-5 border-l-4 border-l-primary flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl font-bold mb-1">Técnico Superior Analista de Sistemas</h3>
            <p className="font-mono text-xs text-primary mb-6">Instituto Argentino de Estudios Superiores (I.A.E.S.)</p>
            
            <div className="flex justify-between items-center pb-4 border-b border-outline-variant/30 mb-6">
              <span className="text-body-md text-on-surface-variant">Promedio General (GPA)</span>
              <span className="font-display text-3xl font-extrabold text-primary">7.75</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-container-low border border-outline-variant p-3 rounded-sm text-center">
                <div className="font-mono text-[10px] text-primary mb-1">DESARROLLO</div>
                <div className="font-display text-xl font-bold">10</div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant p-3 rounded-sm text-center">
                <div className="font-mono text-[10px] text-primary mb-1">PROGRAMACIÓN</div>
                <div className="font-display text-xl font-bold">10</div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant p-3 rounded-sm text-center">
                <div className="font-mono text-[10px] text-primary mb-1">ANÁLISIS</div>
                <div className="font-display text-xl font-bold">10</div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant p-3 rounded-sm text-center">
                <div className="font-mono text-[10px] text-primary mb-1">PRÁCTICA PROF.</div>
                <div className="font-display text-xl font-bold">10</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities Mini Bento Cards */}
        <div className="technical-card p-4 md:col-span-3 flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-sm text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">data_object</span>
          </div>
          <div>
            <div className="font-mono text-[10px] text-primary">STACK</div>
            <div className="text-body-md font-semibold text-on-surface">.NET (C# / ASP.NET)</div>
          </div>
        </div>

        <div className="technical-card p-4 md:col-span-3 flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-sm text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">hub</span>
          </div>
          <div>
            <div className="font-mono text-[10px] text-primary">REDES</div>
            <div className="text-body-md font-semibold text-on-surface">Cisco & Redes Críticas</div>
          </div>
        </div>

        <div className="technical-card p-4 md:col-span-3 flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-sm text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">database</span>
          </div>
          <div>
            <div className="font-mono text-[10px] text-primary">DATOS</div>
            <div className="text-body-md font-semibold text-on-surface">BBDD Relacionales</div>
          </div>
        </div>

        <div className="technical-card p-4 md:col-span-3 flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-sm text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">verified_user</span>
          </div>
          <div>
            <div className="font-mono text-[10px] text-primary">INGLÉS</div>
            <div className="text-body-md font-semibold text-on-surface">Lectura Avanzada (ADV)</div>
          </div>
        </div>

      </div>
    </section>
  );
}

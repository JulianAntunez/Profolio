import React from 'react';

export default function ExperienceAndEducation() {
  return (
    <section className="container mx-auto px-6 py-16 relative" id="experience">
      {/* Background glow for the section */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-violet-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="mb-12">
        <span className="font-mono text-sm text-cyan-400 tracking-widest block mb-2">// TRAYECTORIA / DESARROLLO</span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white">Infraestructura y Formación</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Experience Box (Casino) */}
        <div className="glass-card p-8 lg:col-span-7 flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle hover gradient trace */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  Casino - Infraestructura & Desarrollo
                </h3>
                <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-violet-400">calendar_today</span>
                  Trayectoria Profesional
                </div>
              </div>
              <span className="font-mono text-[10px] tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20 px-3 py-1 rounded-full uppercase">
                LIVE_OPS
              </span>
            </div>

            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-800">
              
              <div className="flex gap-4 relative">
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-violet-500/40 flex items-center justify-center text-[10px] font-mono text-violet-400 font-bold z-10 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                  01
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Administración integral de infraestructura crítica, incluyendo gestión de redes y despliegue de servidores.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-violet-500/40 flex items-center justify-center text-[10px] font-mono text-violet-400 font-bold z-10 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                  02
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Desarrollo de software interno utilizando el stack .NET, implementando conceptos avanzados de arquitectura y optimización de bases de datos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-violet-500/40 flex items-center justify-center text-[10px] font-mono text-violet-400 font-bold z-10 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                  03
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Optimización sistemática de procesos operativos a través de automatización y refinamiento técnico.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-violet-500/40 flex items-center justify-center text-[10px] font-mono text-violet-400 font-bold z-10 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                  04
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Instalación y mantenimiento de sistemas de videovigilancia CCTV, configurando cámaras analógicas e IP, DVRs y NVRs.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-6 mt-8 border-t border-slate-800/80">
            <span className="chip">.NET 8</span>
            <span className="chip">C#</span>
            <span className="chip">Active Directory</span>
            <span className="chip">SQL Server</span>
            <span className="chip">Cisco Networking</span>
            <span className="chip">CCTV (IP/Analógico)</span>
            <span className="chip">DVR & NVR</span>
          </div>
        </div>

        {/* Education Box */}
        <div className="glass-card p-8 lg:col-span-5 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-600/5 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div>
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Técnico Superior Analista de Sistemas</h3>
              <p className="font-mono text-xs text-cyan-400 mb-3">Instituto Argentino de Estudios Superiores (I.A.E.S.)</p>
              <span className="font-mono text-[9px] tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-0.5 rounded-full uppercase">
                COMPLETO
              </span>
            </div>
            
            <div className="pt-6 border-t border-slate-800/80 mb-6">
              <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Ciencia de Datos e IA</h3>
              <p className="font-mono text-xs text-cyan-400 mb-3">Formación Académica en Progreso</p>
              <span className="font-mono text-[9px] tracking-widest bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 px-2.5 py-0.5 rounded-full uppercase">
                1º AÑO EN CURSO
              </span>
            </div>

          </div>
        </div>

        {/* Core Capabilities Mini Bento Cards */}
        <div className="glass-card p-5 lg:col-span-3 flex items-center gap-4 hover:border-violet-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <span className="material-symbols-outlined text-2xl">data_object</span>
          </div>
          <div>
            <div className="font-mono text-[10px] text-violet-400">STACK</div>
            <div className="text-sm font-bold text-white font-display mt-0.5">.NET (C# / ASP.NET)</div>
          </div>
        </div>

        <div className="glass-card p-5 lg:col-span-3 flex items-center gap-4 hover:border-cyan-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,180,212,0.15)]">
            <span className="material-symbols-outlined text-2xl">hub</span>
          </div>
          <div>
            <div className="font-mono text-[10px] text-cyan-400">REDES</div>
            <div className="text-sm font-bold text-white font-display mt-0.5">Cisco & Redes Críticas</div>
          </div>
        </div>

        <div className="glass-card p-5 lg:col-span-3 flex items-center gap-4 hover:border-violet-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <span className="material-symbols-outlined text-2xl">database</span>
          </div>
          <div>
            <div className="font-mono text-[10px] text-violet-400">DATOS</div>
            <div className="text-sm font-bold text-white font-display mt-0.5">BBDD Relacionales</div>
          </div>
        </div>

        <div className="glass-card p-5 lg:col-span-3 flex items-center gap-4 hover:border-cyan-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,180,212,0.15)]">
            <span className="material-symbols-outlined text-2xl">verified_user</span>
          </div>
          <div>
            <div className="font-mono text-[10px] text-cyan-400">INGLÉS</div>
            <div className="text-sm font-bold text-white font-display mt-0.5">Lectura Avanzada (ADV)</div>
          </div>
        </div>

      </div>
    </section>
  );
}

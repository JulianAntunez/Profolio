import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMsg, setStatusMsg] = useState('');
  const [statusColor, setStatusColor] = useState('text-cyan-400');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusColor('text-cyan-400 animate-pulse');
    setStatusMsg('TRANSMITIENDO MENSAJE...');

    setTimeout(() => {
      setStatusColor('text-emerald-400');
      setStatusMsg('MENSAJE RECIBIDO CON ÉXITO.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="container mx-auto px-6 py-16 relative" id="contact">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="mb-12">
        <span className="font-mono text-sm text-cyan-400 tracking-widest block mb-2">// CONTACTO / TRANSMISION</span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">Establecer Comunicación</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Info Column */}
        <div className="glass-card p-8 lg:col-span-5 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="font-display text-2xl font-bold text-on-surface mb-4">JyO Solutions</h3>
            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
              Para consultas sobre proyectos de desarrollo de software, automatización o auditorías de infraestructura crítica, puedes utilizar el formulario de transmisión o contactarme directamente a través de estos canales.
            </p>
            
            <div className="flex flex-col gap-5">
              <a 
                href="mailto:JyOSolutions@gmail.com.ar" 
                className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 group-hover/item:bg-rose-500/20 group-hover/item:border-rose-500/40 transition-all shadow-[0_0_10px_rgba(244,63,94,0.1)]">
                  <span className="material-symbols-outlined text-lg text-rose-500 font-semibold">mail</span>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-on-surface-variant/60">CORREO ELECTRÓNICO</div>
                  <span className="text-sm font-semibold text-on-surface-variant group-hover/item:text-on-surface transition-colors">JyOSolutions@gmail.com.ar</span>
                </div>
              </a>

              <a 
                href="https://github.com/JulianAntunez" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-300 flex items-center justify-center shrink-0 group-hover/item:bg-slate-500/20 group-hover/item:border-slate-400 transition-all shadow-[0_0_10px_rgba(148,163,184,0.1)]">
                  <i className="devicon-github-original colored text-lg"></i>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-on-surface-variant/60">GITHUB PERFIL</div>
                  <span className="text-sm font-semibold text-on-surface-variant group-hover/item:text-on-surface transition-colors">github.com/JulianAntunez</span>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/juli%C3%A1n-ant%C3%BAnez-b3b57b223/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600/20 group-hover/item:border-blue-500 transition-all shadow-[0_0_10px_rgba(37,99,235,0.1)]">
                  <i className="devicon-linkedin-plain colored text-lg"></i>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-on-surface-variant/60">LINKEDIN RED</div>
                  <span className="text-sm font-semibold text-on-surface-variant group-hover/item:text-on-surface transition-colors">linkedin.com/in/julián-antúnez-b3b57b223</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="glass-card p-8 lg:col-span-7 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-600/5 to-transparent pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-[10px] tracking-wider text-cyan-400 font-semibold uppercase">REMITENTE (NOMBRE)</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
                className="bg-on-surface/[0.03] border border-outline text-on-surface rounded-xl focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all outline-none p-3.5 text-sm placeholder-on-surface-variant/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-[10px] tracking-wider text-cyan-400 font-semibold uppercase">CANAL DE RESPUESTA (EMAIL)</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="nombre@dominio.com"
                className="bg-on-surface/[0.03] border border-outline text-on-surface rounded-xl focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all outline-none p-3.5 text-sm placeholder-on-surface-variant/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[10px] tracking-wider text-cyan-400 font-semibold uppercase">MENSAJE / CONSULTA TÉCNICA</label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe los requerimientos o consulta de tu proyecto..."
                className="bg-on-surface/[0.03] border border-outline text-on-surface rounded-xl focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all outline-none p-3.5 min-h-[130px] resize-y text-sm placeholder-on-surface-variant/40"
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <button
                type="submit"
                className="btn-glow font-display text-sm px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">send</span>
                Enviar Mensaje
              </button>
              {statusMsg && <span className={`font-mono text-xs font-semibold tracking-wider ${statusColor}`}>{statusMsg}</span>}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMsg, setStatusMsg] = useState('');
  const [statusColor, setStatusColor] = useState('text-primary');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusColor('text-primary');
    setStatusMsg('TRANSMITTING MESSAGE DATA...');

    setTimeout(() => {
      setStatusColor('text-emerald-400');
      setStatusMsg('MESSAGE RECEIVED SUCCESSFULLY. (SIMULATOR)');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="container mx-auto px-6 py-16" id="contact">
      <div className="mb-12">
        <span className="font-mono text-sm text-primary tracking-widest block mb-2">// INPUT_CHANNEL / TRANSMIT_SIGNAL</span>
        <h2 className="font-display text-3xl font-bold">Establecer Comunicación</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Info Column */}
        <div className="technical-card p-6 md:col-span-5 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold text-primary mb-4">Información de JyO Solutions</h3>
            <p className="text-body-md text-on-surface-variant mb-8">
              Para consultas de proyectos de software o auditorías de infraestructura a través de JyO Solutions, puedes usar el formulario de transmisión o los siguientes canales.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="font-mono text-sm text-on-surface-variant">JyOSolutions@gmail.com.ar</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">link</span>
                <span className="font-mono text-sm text-on-surface-variant">github.com/JulianAntunez</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">group</span>
                <span className="font-mono text-sm text-on-surface-variant">linkedin.com/in/analyst-net</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="technical-card p-6 md:col-span-7">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-xs text-primary">REMITENTE (NOMBRE)</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
                className="bg-surface-container-low border border-outline-variant text-on-surface font-body p-3 rounded-sm outline-none focus:border-primary transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-xs text-primary">CANAL DE RESPUESTA (EMAIL)</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="nombre@dominio.com"
                className="bg-surface-container-low border border-outline-variant text-on-surface font-body p-3 rounded-sm outline-none focus:border-primary transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-xs text-primary">TRANSMISIÓN (MENSAJE)</label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe el mensaje o requerimientos técnicos de tu consulta..."
                className="bg-surface-container-low border border-outline-variant text-on-surface font-body p-3 rounded-sm outline-none focus:border-primary transition-all min-h-[120px] resize-y text-sm"
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <button
                type="submit"
                className="bg-primary text-on-primary font-mono text-sm px-6 py-3 rounded-sm font-semibold hover:bg-primary/95 transition-all flex items-center gap-2 shadow-[0_0_12px_rgba(164,230,255,0.2)]"
              >
                <span className="material-symbols-outlined text-lg">send</span>
                ENVIAR SEÑAL
              </button>
              {statusMsg && <span className={`font-mono text-xs ${statusColor}`}>{statusMsg}</span>}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}

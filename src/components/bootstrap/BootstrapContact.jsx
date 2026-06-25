import React, { useState } from 'react';

export default function BootstrapContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMsg, setStatusMsg] = useState('');
  const [statusColor, setStatusColor] = useState('text-info');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusColor('text-info placeholder-glow');
    setStatusMsg('TRANSMITIENDO MENSAJE...');

    setTimeout(() => {
      setStatusColor('text-success');
      setStatusMsg('MENSAJE RECIBIDO CON ÉXITO.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="container py-5 my-5 position-relative" id="contact">
      {/* Decorative Glow */}
      <div 
        className="position-absolute bottom-0 start-50 translate-middle-x rounded-circle" 
        style={{ width: '300px', height: '300px', background: 'rgba(6, 180, 212, 0.03)', filter: 'blur(90px)', pointerEvents: 'none', zIndex: -1 }} 
      />

      <div className="mb-5">
        <span className="font-monospace text-info small tracking-widest d-block mb-2">// CONTACTO / TRANSMISION</span>
        <h2 className="fw-black display-6 text-white font-display">Establecer Comunicación</h2>
      </div>

      <div className="row g-4">
        
        {/* Info Column */}
        <div className="col-lg-5">
          <div className="card bootstrap-glass-card p-4 h-100 border-0 shadow-sm d-flex flex-column justify-content-between">
            <div>
              <h3 className="fw-bold fs-4 text-white mb-3 font-display">JyO Solutions</h3>
              <p className="text-secondary-custom small mb-4" style={{ lineHeight: '1.6' }}>
                Para consultas sobre proyectos de desarrollo de software, automatización o auditorías de infraestructura crítica, puedes utilizar el formulario de transmisión o contactarme directamente a través de estos canales.
              </p>
              
              <div className="d-flex flex-column gap-3">
                <a 
                  href="mailto:JyOSolutions@gmail.com.ar" 
                  className="d-flex align-items-center gap-3 text-decoration-none group"
                  style={{ transition: 'transform 0.2s ease-in-out' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0px)'}
                >
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center shadow-sm"
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      background: 'rgba(244, 63, 94, 0.1)', 
                      border: '1px solid rgba(244, 63, 94, 0.2)',
                      color: '#f43f5e'
                    }}
                  >
                    <span className="material-symbols-outlined fs-5 font-semibold">mail</span>
                  </div>
                  <div>
                    <div className="font-monospace text-secondary-custom" style={{ fontSize: '9px' }}>CORREO ELECTRÓNICO</div>
                    <span className="text-white-50 fw-semibold" style={{ fontSize: '13.5px' }}>JyOSolutions@gmail.com.ar</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/JulianAntunez" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="d-flex align-items-center gap-3 text-decoration-none group"
                  style={{ transition: 'transform 0.2s ease-in-out' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0px)'}
                >
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center shadow-sm"
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      background: 'rgba(248, 250, 252, 0.05)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#e2e8f0'
                    }}
                  >
                    <i className="devicon-github-original colored fs-5"></i>
                  </div>
                  <div>
                    <div className="font-monospace text-secondary-custom" style={{ fontSize: '9px' }}>GITHUB PERFIL</div>
                    <span className="text-white-50 fw-semibold" style={{ fontSize: '13.5px' }}>github.com/JulianAntunez</span>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/juli%C3%A1n-ant%C3%BAnez-b3b57b223/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="d-flex align-items-center gap-3 text-decoration-none group"
                  style={{ transition: 'transform 0.2s ease-in-out' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0px)'}
                >
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center shadow-sm"
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      background: 'rgba(37, 99, 235, 0.1)', 
                      border: '1px solid rgba(37, 99, 235, 0.2)',
                      color: '#60a5fa'
                    }}
                  >
                    <i className="devicon-linkedin-plain colored fs-5"></i>
                  </div>
                  <div>
                    <div className="font-monospace text-secondary-custom" style={{ fontSize: '9px' }}>LINKEDIN RED</div>
                    <span className="text-white-50 fw-semibold" style={{ fontSize: '13.5px' }}>linkedin.com/in/julián-antúnez-b3b57b223</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="col-lg-7">
          <div className="card bootstrap-glass-card p-4 border-0 shadow-sm">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-2">
                <label htmlFor="name" className="font-monospace text-info small tracking-wider fw-bold uppercase" style={{ fontSize: '10px' }}>
                  REMITENTE (NOMBRE)
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre completo"
                  className="form-control bg-dark bg-opacity-25 border-custom text-white p-3 small placeholder-secondary-custom"
                  style={{ outline: 'none', boxShadow: 'none' }}
                />
              </div>

              <div className="d-flex flex-column gap-2">
                <label htmlFor="email" className="font-monospace text-info small tracking-wider fw-bold uppercase" style={{ fontSize: '10px' }}>
                  CANAL DE RESPUESTA (EMAIL)
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nombre@dominio.com"
                  className="form-control bg-dark bg-opacity-25 border-custom text-white p-3 small placeholder-secondary-custom"
                  style={{ outline: 'none', boxShadow: 'none' }}
                />
              </div>

              <div className="d-flex flex-column gap-2">
                <label htmlFor="message" className="font-monospace text-info small tracking-wider fw-bold uppercase" style={{ fontSize: '10px' }}>
                  MENSAJE / CONSULTA TÉCNICA
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe los requerimientos o consulta de tu proyecto..."
                  className="form-control bg-dark bg-opacity-25 border-custom text-white p-3 small placeholder-secondary-custom"
                  style={{ minHeight: '130px', resize: 'vertical', outline: 'none', boxShadow: 'none' }}
                />
              </div>

              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-glow px-4 py-3 rounded-3 fw-semibold d-flex align-items-center gap-2 border-0 cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                  Enviar Mensaje
                </button>
                {statusMsg && (
                  <span className={`font-monospace small fw-bold tracking-wider ${statusColor}`}>
                    {statusMsg}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

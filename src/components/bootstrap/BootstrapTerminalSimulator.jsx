import React, { useState, useEffect, useRef } from 'react';

export default function BootstrapTerminalSimulator() {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const outputRef = useRef(null);

  useEffect(() => {
    setHistory([
      { text: 'SYSTEM STATUS: ONLINE', type: 'info' },
      { text: 'ENVIRONMENT INITIALIZED SUCCESSFULLY.', type: 'info' },
      { text: "Escribe 'help' para listar los comandos disponibles.", type: 'output' },
      { text: '', type: 'output' }
    ]);
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const processCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { text: `guest@jyosolutions:~$ ${cmd}`, type: 'prompt' }];

    switch (trimmed) {
      case 'help':
        newHistory.push(
          { text: 'Comandos disponibles:', type: 'info' },
          { text: '  about    - Perfil profesional del desarrollador', type: 'output' },
          { text: '  skills   - Tecnologías y herramientas dominadas', type: 'output' },
          { text: '  projects - Mapeo de sistemas críticos desarrollados', type: 'output' },
          { text: '  contact  - Canales de contacto directos', type: 'output' },
          { text: '  clear    - Limpiar consola', type: 'output' }
        );
        break;
      case 'about':
        newHistory.push(
          { text: 'Analista de Sistemas & Developer especializado en:', type: 'info' },
          { text: '  * Infraestructura crítica y operaciones de alta disponibilidad (Casino).', type: 'output' },
          { text: '  * Desarrollo de software a medida con .NET 8 (C#) y SQL Server.', type: 'output' },
          { text: '  * Automatizaciones eficientes y creación de herramientas web.', type: 'output' },
          { text: '  * Estudios actuales: 1º Año en Ciencia de Datos e Inteligencia Artificial.', type: 'output' }
        );
        break;
      case 'skills':
        newHistory.push(
          { text: 'Stack técnico cargado:', type: 'info' },
          { text: '  Lenguajes: C#, SQL, Visual Basic, PHP, JavaScript (JSX), HTML/CSS', type: 'output' },
          { text: '  Frameworks: .NET 8, ASP.NET Core, EF Core, React (JSX)', type: 'output' },
          { text: '  Infraestructura: AD, Redes Cisco, CCTV (DVR, NVR, IP & Analógico)', type: 'output' },
          { text: '  Especializaciones: Automatización de procesos, IA aplicada & Análisis de datos', type: 'output' }
        );
        break;
      case 'projects':
        newHistory.push(
          { text: 'Principales despliegues en producción:', type: 'info' },
          { text: '  1. Sistema Torneo de Bingo (Visual Basic - Operativo en Casino)', type: 'output' },
          { text: '  2. Sistema de Inventario de Hardware (.NET 8 & SQL Server)', type: 'output' },
          { text: '  3. Monitor de Servicios Críticos (.NET Core & SignalR)', type: 'output' },
          { text: '  4. Automatizador de Reportes (QuestPDF & Dapper)', type: 'output' }
        );
        break;
      case 'contact':
        newHistory.push(
          { text: 'Canales oficiales:', type: 'info' },
          { text: '  Email: JyOSolutions@gmail.com.ar', type: 'output' },
          { text: '  GitHub: github.com/JulianAntunez', type: 'output' },
          { text: '  LinkedIn: linkedin.com/in/julián-antúnez-b3b57b223', type: 'output' }
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        newHistory.push({ text: `Comando no reconocido: '${trimmed}'. Escribe 'help' para ver las opciones.`, type: 'error' });
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <div className="card bootstrap-glass-card shadow-lg border-0 overflow-hidden font-monospace">
      {/* Terminal Title Bar */}
      <div 
        className="px-4 py-3 d-flex justify-content-between align-items-center"
        style={{ background: 'rgba(15, 23, 42, 0.4)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
      >
        <div className="d-flex gap-2">
          <span className="rounded-circle bg-danger" style={{ width: '12px', height: '12px', opacity: 0.8 }}></span>
          <span className="rounded-circle bg-warning" style={{ width: '12px', height: '12px', opacity: 0.8 }}></span>
          <span className="rounded-circle bg-success" style={{ width: '12px', height: '12px', opacity: 0.8 }}></span>
        </div>
        <div className="text-secondary small tracking-wider" style={{ fontSize: '11px' }}>
          console.sh // julian@jyosolutions
        </div>
      </div>
      
      {/* Output screen */}
      <div 
        ref={outputRef} 
        className="p-4 overflow-y-auto d-flex flex-column gap-2" 
        style={{ height: '260px', background: 'rgba(3, 7, 18, 0.2)' }}
      >
        {history.map((line, idx) => (
          <div
            key={idx}
            className={
              line.type === 'prompt'
                ? 'text-info fw-bold'
                : line.type === 'error'
                ? 'text-danger fw-bold'
                : line.type === 'info'
                ? 'text-primary-emphasis fw-semibold'
                : 'text-light-emphasis'
            }
            style={{ fontSize: '13px' }}
          >
            {line.text}
          </div>
        ))}
      </div>
      
      {/* Input container */}
      <div 
        className="px-4 py-3 d-flex align-items-center gap-2"
        style={{ background: 'rgba(3, 7, 18, 0.4)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
      >
        <span className="text-info fw-bold">&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-0 text-light w-100 font-monospace"
          style={{ outline: 'none', boxShadow: 'none', fontSize: '13px' }}
          placeholder="Escribe 'help' y presiona Enter..."
          autoComplete="off"
        />
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';

export default function TerminalSimulator() {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const outputRef = useRef(null);

  useEffect(() => {
    // Initial welcome logs
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
          { text: '  LinkedIn: linkedin.com/in/analyst-net', type: 'output' }
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
    <div className="w-full bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden font-mono text-sm shadow-[0_24px_50px_-15px_rgba(0,0,0,0.7)]">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900/30 px-5 py-3 flex justify-between items-center border-b border-white/5">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.3)]"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.3)]"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.3)]"></span>
        </div>
        <div className="text-xs text-slate-400 font-mono tracking-wider">console.sh // julian@jyosolutions</div>
      </div>
      
      {/* Output screen */}
      <div ref={outputRef} className="p-6 h-64 overflow-y-auto flex flex-col gap-2.5 scrollbar-thin">
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`${
              line.type === 'prompt'
                ? 'text-cyan-400 font-medium'
                : line.type === 'error'
                ? 'text-rose-400 font-medium'
                : line.type === 'info'
                ? 'text-violet-400 font-semibold'
                : 'text-slate-300'
            }`}
          >
            {line.text}
          </div>
        ))}
      </div>
      
      {/* Input container */}
      <div className="bg-slate-950/60 px-6 py-3.5 border-t border-white/5 flex items-center gap-2">
        <span className="text-cyan-400 font-bold shadow-[0_0_8px_rgba(6,180,212,0.3)]">&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-slate-100 w-full font-mono text-sm placeholder-slate-600 focus:ring-0"
          placeholder="Escribe 'help' y presiona Enter..."
          autoComplete="off"
        />
      </div>
    </div>
  );
}

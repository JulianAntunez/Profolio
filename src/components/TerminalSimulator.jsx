import React, { useState, useEffect, useRef } from 'react';

export default function TerminalSimulator() {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const outputRef = useRef(null);

  useEffect(() => {
    // Initial welcome logs
    setHistory([
      { text: 'SYSTEM STATUS: ONLINE', type: 'info' },
      { text: 'INITIALIZING ANALYST INTERACTION ENVIRONMENT...', type: 'info' },
      { text: "Type 'help' for a list of available system commands.", type: 'info' },
      { text: '', type: 'info' }
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

    const newHistory = [...history, { text: `visitor@systems-analyst:~$ ${cmd}`, type: 'prompt' }];

    switch (trimmed) {
      case 'help':
        newHistory.push(
          { text: 'Available commands:', type: 'output' },
          { text: '  about    - Load professional profile details', type: 'output' },
          { text: '  skills   - List technical stack capabilities', type: 'output' },
          { text: '  projects - Display information about critical systems', type: 'output' },
          { text: '  clear    - Clear terminal screen', type: 'output' },
          { text: '  contact  - Show terminal-based contact details', type: 'output' }
        );
        break;
      case 'about':
        newHistory.push(
          { text: 'Systems Analyst & .NET Developer specializing in:', type: 'output' },
          { text: '  * High-availability operations & critical infrastructure.', type: 'output' },
          { text: '  * Internal custom tools & backend automation.', type: 'output' },
          { text: '  * Clean, robust code architectures in C# / .NET 8.', type: 'output' }
        );
        break;
      case 'skills':
        newHistory.push(
          { text: 'Core stack loaded:', type: 'output' },
          { text: '  Languages: C#, SQL, PowerShell, Bash', type: 'output' },
          { text: '  Frameworks: .NET 8, ASP.NET Core, EF Core, Dapper', type: 'output' },
          { text: '  Infrastructure: Windows Server, Active Directory, Cisco Networking, Azure', type: 'output' }
        );
        break;
      case 'projects':
        newHistory.push(
          { text: 'Displaying top deployments:', type: 'output' },
          { text: '  1. Casino Monitoring Cluster (24/7 Redundancy)', type: 'output' },
          { text: '  2. Hardware Inventory System (.NET 8 & SQL Server)', type: 'output' },
          { text: '  3. Report Automator (Dapper & QuestPDF)', type: 'output' }
        );
        break;
      case 'contact':
        newHistory.push(
          { text: 'Contact Channels:', type: 'output' },
          { text: '  Email: JyOSolutions@gmail.com.ar', type: 'output' },
          { text: '  GitHub: github.com/JulianAntunez', type: 'output' },
          { text: '  LinkedIn: linkedin.com/in/analyst-net', type: 'output' }
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        newHistory.push({ text: `Command not found: '${trimmed}'. Type 'help' for options.`, type: 'error' });
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
    <div className="w-full bg-surface-container-lowest border border-outline-variant rounded-md overflow-hidden font-mono text-sm shadow-2xl">
      <div className="bg-surface-container-high px-4 py-2 flex justify-between items-center border-b border-outline-variant">
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        </div>
        <div className="text-xs text-on-surface-variant font-mono">console.sh // active_session</div>
      </div>
      <div ref={outputRef} className="p-4 h-64 overflow-y-auto flex flex-col gap-2">
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`${
              line.type === 'prompt'
                ? 'text-primary'
                : line.type === 'error'
                ? 'text-red-400'
                : 'text-on-surface'
            }`}
          >
            {line.text}
          </div>
        ))}
      </div>
      <div className="bg-surface-container-low px-4 py-2 border-t border-outline-variant flex items-center gap-2">
        <span className="text-primary font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-on-surface w-full font-mono text-sm"
          placeholder="Escribe 'help' y presiona Enter..."
          autoComplete="off"
        />
      </div>
    </div>
  );
}

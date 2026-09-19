'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function AlexCoreWidget() {
  const [expandido, setExpandido] = useState(false);
  const [comando, setComando] = useState('');
  const [historial, setHistorial] = useState<Array<{ rol: 'user' | 'ia'; texto: string }>>([
    { rol: 'ia', texto: 'Alex Core IA v2.0 lista. ¿En qué puedo asistirte, Alexander?' }
  ]);

  // Estado para la posición flotante movible (X, Y)
  const [posicion, setPosicion] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [arrastrando, setArrastrando] = useState(false);
  const offsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const fueArrastradoRef = useRef(false);

  // Posicionar el botón por defecto en la esquina inferior derecha al cargar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosicion({
        x: window.innerWidth - 80,
        y: window.innerHeight - 80,
      });
    }
  }, []);

  // Controladores del evento de arrastre (Mouse / Touch)
  const iniciarArrastre = (e: React.MouseEvent | React.TouchEvent) => {
    setArrastrando(true);
    fueArrastradoRef.current = false;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    offsetRef.current = {
      x: clientX - posicion.x,
      y: clientY - posicion.y,
    };
  };

  useEffect(() => {
    const mover = (e: MouseEvent | TouchEvent) => {
      if (!arrastrando) return;
      
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const nuevaX = clientX - offsetRef.current.x;
      const nuevaY = clientY - offsetRef.current.y;

      // Limitar el movimiento dentro de los bordes visibles de la pantalla
      const xLimitada = Math.max(10, Math.min(window.innerWidth - 70, nuevaX));
      const yLimitada = Math.max(10, Math.min(window.innerHeight - 70, nuevaY));

      setPosicion({ x: xLimitada, y: yLimitada });
      fueArrastradoRef.current = true;
    };

    const detenerArrastre = () => {
      setArrastrando(false);
    };

    if (arrastrando) {
      window.addEventListener('mousemove', mover);
      window.addEventListener('mouseup', detenerArrastre);
      window.addEventListener('touchmove', mover);
      window.addEventListener('touchend', detenerArrastre);
    }

    return () => {
      window.removeEventListener('mousemove', mover);
      window.removeEventListener('mouseup', detenerArrastre);
      window.removeEventListener('touchmove', mover);
      window.removeEventListener('touchend', detenerArrastre);
    };
  }, [arrastrando]);

  const handleClickBoton = () => {
    // Si solo fue un clic sin arrastrar, expandir/colapsar el widget
    if (!fueArrastradoRef.current) {
      setExpandido(!expandido);
    }
  };

  const enviarInstruccion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comando.trim()) return;

    setHistorial((prev) => [
      ...prev,
      { rol: 'user', texto: comando },
      { rol: 'ia', texto: `Ejecutando orden en planta: "${comando}". Modificación aplicada con éxito.` },
    ]);
    setComando('');
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: `${posicion.x}px`,
        top: `${posicion.y}px`,
        zIndex: 9999,
      }}
      className="font-sans select-none"
    >
      {/* BOTÓN FLOTANTE ULTRACOMPACTO Y ARRASTRABLE */}
      {!expandido ? (
        <button
          onMouseDown={iniciarArrastre}
          onTouchStart={iniciarArrastre}
          onClick={handleClickBoton}
          className={`w-12 h-12 rounded-full bg-slate-950 border-2 border-amber-400 text-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(250,204,21,0.4)] hover:scale-110 transition-transform duration-200 cursor-grab active:cursor-grabbing group relative ${
            arrastrando ? 'cursor-grabbing scale-105' : ''
          }`}
          title="Arrastra para mover • Clic para interactuar con Alex Core IA"
        >
          <span className="text-xl">🤖</span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-950" />
        </button>
      ) : (
        /* WIDGET EXPANDIDO */
        <div className="w-80 sm:w-96 bg-slate-950/95 border border-amber-400/50 rounded-3xl p-4 shadow-[0_0_50px_rgba(250,204,21,0.3)] backdrop-blur-2xl space-y-3 animate-in fade-in zoom-in-95 duration-200">
          
          <div
            onMouseDown={iniciarArrastre}
            onTouchStart={iniciarArrastre}
            className="flex justify-between items-center border-b border-slate-800 pb-2.5 cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">⚡</span>
              <div>
                <h3 className="font-black text-amber-400 text-xs tracking-wider uppercase">
                  ALEX CORE IA
                </h3>
                <p className="text-[9px] text-slate-400 font-mono">
                  Mando Super Usuario (Arrastra desde la barra)
                </p>
              </div>
            </div>
            <button
              onClick={() => setExpandido(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 transition font-mono text-xs"
            >
              ✕
            </button>
          </div>

          <div className="h-44 overflow-y-auto space-y-2 p-2.5 bg-slate-900/60 rounded-2xl border border-slate-800 font-mono text-[11px]">
            {historial.map((item, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl ${
                  item.rol === 'user'
                    ? 'bg-amber-400/10 border border-amber-400/30 text-amber-300 ml-4'
                    : 'bg-slate-950 border border-slate-800 text-slate-200 mr-4'
                }`}
              >
                <span className="block text-[8px] opacity-60 font-bold mb-0.5">
                  {item.rol === 'user' ? 'ALEXANDER >' : 'IA ALEX CORE >'}
                </span>
                {item.texto}
              </div>
            ))}
          </div>

          <form onSubmit={enviarInstruccion} className="flex gap-2">
            <input
              type="text"
              value={comando}
              onChange={(e) => setComando(e.target.value)}
              placeholder="Escribe tu instrucción..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none font-mono"
            />
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-3.5 py-2 rounded-xl text-xs uppercase transition shadow-md shadow-amber-400/20"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
'use client';

import React, { useState } from 'react';

export default function IaAssistant() {
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleEnviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setMensaje('');
    }, 800);
  };

  return (
    <div className="bg-slate-900 text-white p-5 rounded-2xl border border-amber-500/30 shadow-xl space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <span className="text-xl">🤖</span>
        <div>
          <h3 className="font-bold text-amber-500 text-sm">Asistente IA - Alex Bakery</h3>
          <p className="text-[11px] text-slate-400">Control por comandos y asistencia operativa</p>
        </div>
      </div>

      <form onSubmit={handleEnviar} className="flex gap-2">
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe un comando o consulta a la IA..."
          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
        />
        <button
          type="submit"
          disabled={cargando}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition"
        >
          {cargando ? 'Procesando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}
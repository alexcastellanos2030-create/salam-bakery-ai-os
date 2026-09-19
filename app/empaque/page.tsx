'use client';

import React, { useState } from 'react';
import ConsolidadoEmpaqueModal from './ConsolidadoEmpaqueModal';

export default function EmpaquePage() {
  const [mostrarConsolidado, setMostrarConsolidado] = useState(false);

  return (
    <div className="space-y-6 text-xs text-slate-300 font-sans">
      <header className="border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-black text-white">📦 Módulo de Empaque & Despacho</h1>
          <p className="text-slate-400 text-xs">Alex Bakery AI-OS — Control Consolidado de Envasado</p>
        </div>

        <button
          onClick={() => setMostrarConsolidado(true)}
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs uppercase transition shadow-md shadow-amber-400/20 flex items-center gap-2"
        >
          <span>📋</span>
          <span>Ver Consolidado de Empaque (PDF)</span>
        </button>
      </header>

      {/* MODAL CONSOLIDADO DE EMPAQUE */}
      {mostrarConsolidado && (
        <ConsolidadoEmpaqueModal onClose={() => setMostrarConsolidado(false)} />
      )}
    </div>
  );
}
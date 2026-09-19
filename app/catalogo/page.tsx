'use client';

import React, { useState } from 'react';
import EtiquetaZebraModal from '@/components/EtiquetaZebraModal';

export default function CatalogoPage() {
  const [mostrarEtiqueta, setMostrarEtiqueta] = useState(false);

  return (
    <div className="space-y-6 text-xs text-slate-300 font-sans">
      <header className="border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-black text-white">🏷️ Catálogo de Ventas & Fichas Técnicas</h1>
          <p className="text-slate-400 text-xs">Alex Bakery AI-OS — Especificaciones de Productos e Impresión Zebra</p>
        </div>

        <button
          onClick={() => setMostrarEtiqueta(true)}
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs uppercase transition shadow-md shadow-amber-400/20"
        >
          🖨️ Ver Etiqueta Zebra (B-3)
        </button>
      </header>

      {/* MODAL DE IMPRESIÓN */}
      {mostrarEtiqueta && (
        <EtiquetaZebraModal onClose={() => setMostrarEtiqueta(false)} />
      )}
    </div>
  );
}
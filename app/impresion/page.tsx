'use client';

import { useState } from 'react';

export default function ModuloImpresionConsolidadosPage() {
  const [filtroModo, setFiltroModo] = useState<'HOY' | 'RANGO' | 'MES' | 'AÑO'>('RANGO');
  const [fechaDesde, setFechaDesde] = useState('2026-09-01');
  const [fechaHasta, setFechaHasta] = useState('2026-09-19');
  const [mesSeleccionado, setMesSeleccionado] = useState('2026-09');
  const [anioSeleccionado, setAnioSeleccionado] = useState('2026');

  return (
    <div className="space-y-6 text-xs text-slate-300">
      <header className="flex justify-between items-center border-b border-slate-800 pb-4 print:hidden">
        <div>
          <h1 className="text-2xl font-black text-yellow-400">🖨️ Submódulo de Impresión de Consolidados</h1>
          <p className="text-slate-400">Generador de reportes consolidados por período y rango de fechas</p>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs transition"
        >
          🖨️ Imprimir Consolidados
        </button>
      </header>

      {/* SELECTOR DE FECHAS EDITABLE Y RANGO DESDE / HASTA */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4 print:hidden">
        <h2 className="font-bold text-yellow-400 uppercase tracking-wider text-xs">
          📅 Selector de Período y Rango Personalizado
        </h2>

        <div className="flex flex-wrap gap-2">
          {(['HOY', 'RANGO', 'MES', 'AÑO'] as const).map((modo) => (
            <button
              key={modo}
              onClick={() => setFiltroModo(modo)}
              className={`px-4 py-2 rounded-lg font-bold border transition ${
                filtroModo === modo
                  ? 'bg-yellow-400 text-slate-950 border-yellow-400'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {modo === 'HOY' ? 'Hoy' : modo === 'RANGO' ? 'Rango Desde / Hasta' : modo === 'MES' ? 'Mes (Almanaque)' : 'Año'}
            </button>
          ))}
        </div>

        {/* INPUTS EDITABLES SEGÚN EL MODO SELECCIONADO */}
        {filtroModo === 'RANGO' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-lg border border-slate-800">
            <div>
              <label className="block text-slate-400 mb-1 font-bold">Fecha Desde:</label>
              <input
                type="date"
                value={fechaDesde}
                onChange={(e) => setFechaDesde(e.target.value)}
                className="w-full bg-slate-900 text-white border border-slate-800 rounded p-2 focus:border-yellow-400 font-mono"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1 font-bold">Fecha Hasta:</label>
              <input
                type="date"
                value={fechaHasta}
                onChange={(e) => setFechaHasta(e.target.value)}
                className="w-full bg-slate-900 text-white border border-slate-800 rounded p-2 focus:border-yellow-400 font-mono"
              />
            </div>
          </div>
        )}

        {filtroModo === 'MES' && (
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 max-w-xs">
            <label className="block text-slate-400 mb-1 font-bold">Seleccionar Mes del Almanaque:</label>
            <input
              type="month"
              value={mesSeleccionado}
              onChange={(e) => setMesSeleccionado(e.target.value)}
              className="w-full bg-slate-900 text-white border border-slate-800 rounded p-2 focus:border-yellow-400 font-mono"
            />
          </div>
        )}

        {filtroModo === 'AÑO' && (
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 max-w-xs">
            <label className="block text-slate-400 mb-1 font-bold">Ingresar Año:</label>
            <input
              type="number"
              value={anioSeleccionado}
              onChange={(e) => setAnioSeleccionado(e.target.value)}
              className="w-full bg-slate-900 text-white border border-slate-800 rounded p-2 focus:border-yellow-400 font-mono"
            />
          </div>
        )}
      </div>

      {/* CONSOLIDADOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 print:bg-white print:text-black">
          <h3 className="font-bold text-yellow-400 border-b border-slate-800 pb-2 print:text-black">
            📊 Total Productos a Fabricar
          </h3>
          <div className="flex justify-between py-1">
            <span>Pan Canilla / Francés</span>
            <span className="font-bold text-yellow-400 print:text-black">1,200 Unid.</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 print:bg-white print:text-black">
          <h3 className="font-bold text-yellow-400 border-b border-slate-800 pb-2 print:text-black">
            🥣 Consolidado por Batida
          </h3>
          <div className="flex justify-between py-1">
            <span>Batida #1 - Canilla</span>
            <span className="font-bold font-mono">3 Sacos (135 kg)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
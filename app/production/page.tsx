'use client';

import React, { useState } from 'react';

export default function PlantaPage() {
  const [submodulo, setSubmodulo] = useState<
    'PLANIFICACION' | 'REPORTE' | 'ESTADO' | 'HISTORIAL' | 'RECETAS' | 'CIERRES'
  >('RECETAS');

  const [recetaSeleccionada, setRecetaSeleccionada] = useState<string | null>('2.0 BRIOCHE');

  const recetas = [
    { nombre: '2.0 BRIOCHE', amasadora: '16 BKU', masaBase: '20 kg', rendimiento: '40.88 kg' },
    { nombre: 'BRIOCHE', amasadora: '8 BKU', masaBase: '20 kg', rendimiento: '41.25 kg' },
    { nombre: 'BUNS SOFT', amasadora: '12 BKU', masaBase: '20 kg', rendimiento: '42.82 kg' },
    { nombre: 'BUNS SOFT SALADO', amasadora: '10 BKU', masaBase: '20 kg', rendimiento: '40.50 kg' },
    { nombre: 'CIABATTA', amasadora: '15 BKU', masaBase: '25 kg', rendimiento: '41.70 kg' },
  ];

  return (
    <div className="space-y-6 text-xs text-slate-300 font-sans relative">
      {/* CABECERA CON SUBMÓDULOS DEL VIDEO */}
      <header className="border-b border-slate-800 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl font-black text-white">🥣 Planta de Producción y Amasado</h1>
          <p className="text-slate-400 text-xs">Alex Bakery AI-OS — Monitoreo Industrial en Tiempo Real</p>
        </div>

        {/* NAVEGACIÓN ENTRE SUBMÓDULOS (PESTAÑAS DEL VIDEO) */}
        <div className="flex flex-wrap gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 font-bold text-[11px]">
          {[
            { id: 'PLANIFICACION', label: 'Planificación' },
            { id: 'REPORTE', label: 'Reporte Diario' },
            { id: 'ESTADO', label: 'Estado en Planta' },
            { id: 'HISTORIAL', label: 'Historial de Lotes' },
            { id: 'RECETAS', label: 'Recetas' },
            { id: 'CIERRES', label: 'Cierres de Turno' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSubmodulo(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg transition ${
                submodulo === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* CONTENIDO DEL SUBMÓDULO SELECCIONADO */}
      {submodulo === 'RECETAS' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* TABLA PRINCIPAL DE RECETAS */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <h2 className="font-bold text-amber-400 text-sm">Recetario Maestro de Panadería</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-[11px]">
                <thead className="border-b border-slate-800 text-slate-500 uppercase">
                  <tr>
                    <th className="py-2">Nombre de la Receta</th>
                    <th>N° Amasadora</th>
                    <th>Masa Base</th>
                    <th>Rendimiento</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {recetas.map((r) => (
                    <tr key={r.nombre} className="hover:bg-slate-850 transition">
                      <td className="py-3 font-bold text-white">{r.nombre}</td>
                      <td className="text-amber-400">{r.amasadora}</td>
                      <td>{r.masaBase}</td>
                      <td>{r.rendimiento}</td>
                      <td>
                        <button
                          onClick={() => setRecetaSeleccionada(r.nombre)}
                          className="px-2.5 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-300 rounded-lg hover:bg-amber-400 hover:text-slate-950 font-bold transition text-[10px]"
                        >
                          Ver Detalle
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PANEL LATERAL EMERGENTE DE DETALLE (DRAWER DEL VIDEO) */}
          {recetaSeleccionada && (
            <div className="lg:col-span-4 bg-slate-900/90 border border-amber-400/30 rounded-2xl p-5 space-y-4 relative">
              <button
                onClick={() => setRecetaSeleccionada(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-white font-mono text-xs"
              >
                ✕
              </button>

              <div className="space-y-1">
                <span className="text-[10px] bg-amber-400/10 text-amber-400 font-mono px-2 py-0.5 rounded border border-amber-400/30">
                  VISTA SOLO LECTURA
                </span>
                <h3 className="text-lg font-black text-white">{recetaSeleccionada}</h3>
                <p className="text-slate-400 text-[11px]">Producto Final Panadería</p>
              </div>

              <div className="space-y-3 font-mono text-[11px] border-t border-slate-800 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Masa Base:</span>
                  <span className="text-white font-bold">20 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Rendimiento Base:</span>
                  <span className="text-amber-400 font-bold">40.88 kg</span>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-800 pt-3">
                <h4 className="font-bold text-amber-400 text-xs">Ingredientes Dosificados:</h4>
                <ul className="space-y-1.5 font-mono text-[10px] text-slate-300">
                  <li className="flex justify-between p-2 bg-slate-950 rounded-lg">
                    <span>HARINA FORTALECIDA BOLDO:</span>
                    <span className="font-bold text-amber-400">100% (20 kg)</span>
                  </li>
                  <li className="flex justify-between p-2 bg-slate-950 rounded-lg">
                    <span>AZÚCAR FINO:</span>
                    <span className="font-bold text-amber-400">12% (2.4 kg)</span>
                  </li>
                  <li className="flex justify-between p-2 bg-slate-950 rounded-lg">
                    <span>MANTEQUILLA:</span>
                    <span className="font-bold text-amber-400">15% (3.0 kg)</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
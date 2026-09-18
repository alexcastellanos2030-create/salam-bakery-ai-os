'use client';
import React, { useState } from 'react';
import { OpcionSimulacion } from '@/types';

export default function IaAssistant({ onApplyOption }: { onApplyOption: (opcion: OpcionSimulacion) => void }) {
  const [prompt, setPrompt] = useState('');
  const [cargando, setCargando] = useState(false);
  const [opciones, setOpciones] = useState<OpcionSimulacion[] | null>(null);

  const handleAnalizar = () => {
    if (!prompt.trim()) return;
    setCargando(true);
    setTimeout(() => {
      setOpciones([
        { id: 'v1', nombre: 'Versión 1: Conservadora', estrategia: 'Ajuste Estándar', riesgoPorcentaje: 5, beneficioPorcentaje: 90, detalle: 'Extiende turno de horneado 15 min sin riesgo de merma.' },
        { id: 'v2', nombre: 'Versión 2: Agresiva / Exprés', estrategia: 'Reasignación Lote Spress', riesgoPorcentaje: 22, beneficioPorcentaje: 95, detalle: 'Prioriza pedido VIP en Fermentadora 1 e incrementa velocidad.' },
        { id: 'v3', nombre: 'Versión 3: Balanceada', estrategia: 'Balance de Carga', riesgoPorcentaje: 3, beneficioPorcentaje: 97, detalle: 'Reorganiza cola de hornos y optimiza materia prima.' }
      ]);
      setCargando(false);
    }, 800);
  };

  return (
    <div className="bg-slate-900 text-white p-5 rounded-2xl border border-amber-500/30 shadow-xl my-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🤖</span>
        <h2 className="font-bold text-lg text-amber-400">Copiloto IA - Alex AI-OS (Admin Único)</h2>
      </div>
      <div className="flex gap-2 mb-4">
        <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Escribe o dicta una orden a la IA..." className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-amber-500" />
        <button onClick={handleAnalizar} className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2 rounded-xl text-sm transition-all">{cargando ? 'Analizando...' : 'Evaluar IA'}</button>
      </div>
      {opciones && (
        <div className="mt-4 space-y-3">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Evaluación Tripartita de Impacto (Riesgo vs Beneficio)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {opciones.map((opc) => (
              <div key={opc.id} className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col justify-between">
                <div><h4 className="font-bold text-amber-300 text-sm">{opc.nombre}</h4><p className="text-xs text-slate-300 mt-1">{opc.detalle}</p></div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1"><span className="text-red-400">Riesgo: {opc.riesgoPorcentaje}%</span><span className="text-green-400">Beneficio: {opc.beneficioPorcentaje}%</span></div>
                  <button onClick={() => onApplyOption(opc)} className="w-full mt-2 bg-slate-700 hover:bg-amber-500 hover:text-slate-950 text-white font-semibold py-1.5 rounded-lg text-xs transition-colors">Ejecutar esta Versión</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

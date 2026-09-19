'use client';

import { useState } from 'react';

export default function FichaRecetaPage() {
  const [receta] = useState({
    nombre: 'Fórmula Maestro - Pan Canilla',
    codigo: 'REC-CAN-100',
    baseHarinaKg: 100,
    ingredientes: [
      { nombre: 'Harina de Trigo Especial', porcentaje: 100, pesoKg: 100 },
      { nombre: 'Agua Potable', porcentaje: 60, pesoKg: 60 },
      { nombre: 'Levadura Fresca', porcentaje: 2.5, pesoKg: 2.5 },
      { nombre: 'Sal Refinada', porcentaje: 1.8, pesoKg: 1.8 },
      { nombre: 'Azúcar', porcentaje: 2.0, pesoKg: 2.0 },
      { nombre: 'Manteca Vegetal', porcentaje: 3.0, pesoKg: 3.0 },
      { nombre: 'Mejorador de Masa', porcentaje: 0.8, pesoKg: 0.8 },
    ],
    instrucciones: [
      'Pesar todos los insumos de acuerdo al porcentaje panadero asignado.',
      'Mezclar harina, mejorador, azúcar y sal en seco durante 2 minutos.',
      'Agregar el agua fría gradualmente y amasar a velocidad lenta por 5 minutos.',
      'Incorporar la levadura y la manteca; amasar a velocidad rápida hasta lograr punto de nieve/telaraña.',
      'Reposar la masa durante 10 minutos antes del divisorio y boleado.'
    ]
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 text-xs text-slate-300">
      <header className="border-b border-slate-800 pb-4 flex justify-between items-center print:hidden">
        <div>
          <span className="text-amber-500 font-mono font-bold">{receta.codigo}</span>
          <h1 className="text-2xl font-black text-white mt-1">📖 Submódulo: Ficha de Receta Estándar</h1>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded text-xs transition"
        >
          🖨️ Imprimir Receta
        </button>
      </header>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-6 print:bg-white print:text-black print:border-black">
        <h2 className="text-lg font-bold text-amber-500 border-b border-slate-800 pb-2 print:text-black">{receta.nombre}</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-bold print:border-black print:text-black">
                <th className="py-2">Ingrediente</th>
                <th className="py-2 text-center">% Panadero</th>
                <th className="py-2 text-right">Peso Base (100kg Harina)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 print:divide-gray-300">
              {receta.ingredientes.map((i, idx) => (
                <tr key={idx}>
                  <td className="py-2 text-white font-semibold print:text-black">{i.nombre}</td>
                  <td className="py-2 text-center text-amber-400 font-mono print:text-black">{i.porcentaje}%</td>
                  <td className="py-2 text-right text-emerald-400 font-mono font-bold print:text-black">{i.pesoKg} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-800 pt-4 print:border-black">
          <h3 className="font-bold text-amber-400 mb-2 print:text-black">Procedimiento de Mezcla y Amasado</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 print:text-black">
            {receta.instrucciones.map((paso, idx) => (
              <li key={idx}>{paso}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
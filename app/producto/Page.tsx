'use client';

import { useState } from 'react';

export default function EtiquetaProductoPage() {
  const [producto] = useState('Pan Canilla Tradicional');
  const [tipoProducto] = useState('Panadería Seca / Fresca');
  const [unidadesPorEmpaque, setUnidadesPorEmpaque] = useState(10);
  const [ingredientes] = useState([
    'Harina de Trigo Especial',
    'Agua Potable',
    'Levadura Fresca',
    'Sal Refinada',
    'Azúcar Rubia',
    'Manteca Vegetal',
    'Mejorador de Masa',
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 text-xs">
      <header className="border-b border-slate-800 pb-4 flex justify-between items-center print:hidden">
        <div>
          <h1 className="text-2xl font-black text-amber-500">🏷️ Submódulo: Generador de Etiquetas</h1>
          <p className="text-slate-400">Configuración e Impresión de Etiquetas por Empaque</p>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded text-xs"
        >
          🖨️ Imprimir Etiqueta
        </button>
      </header>

      {/* Parámetros en Pantalla */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3 text-slate-300 print:hidden">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-400 mb-1">Unidades por Empaque / Bolsa:</label>
            <input
              type="number"
              value={unidadesPorEmpaque}
              onChange={(e) => setUnidadesPorEmpaque(Number(e.target.value))}
              className="bg-slate-950 border border-slate-800 rounded p-2 text-white w-full"
            />
          </div>
          <div>
            <label className="block text-slate-400 mb-1">Tipo de Producto:</label>
            <input
              type="text"
              readOnly
              value={tipoProducto}
              className="bg-slate-950 border border-slate-800 rounded p-2 text-slate-400 w-full"
            />
          </div>
        </div>
      </div>

      {/* DISEÑO DE LA ETIQUETA (Formato Térmico / Impresión) */}
      <div className="border-2 border-black p-4 max-w-sm mx-auto bg-white text-black space-y-2 rounded shadow-md font-sans">
        <div className="text-center border-b border-black pb-2">
          <h2 className="text-lg font-black uppercase">ALEX BAKERY AI-OS</h2>
          <p className="text-[10px] font-bold">{tipoProducto}</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold">{producto}</h3>
          <div className="my-1 bg-black text-white py-1 px-2 font-mono font-bold text-sm rounded">
            CONTENIDO: {unidadesPorEmpaque} UNIDADES
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold">INGREDIENTES:</p>
          <p className="text-[9px] leading-tight text-gray-800">
            {ingredientes.join(', ')}. Contiene Gluten.
          </p>
        </div>

        <div className="border-t border-black pt-2 text-[9px] flex justify-between">
          <span>Elaborado: {new Date().toLocaleDateString()}</span>
          <span>Vence: 7 Días</span>
        </div>
      </div>
    </div>
  );
}
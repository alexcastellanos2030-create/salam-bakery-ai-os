'use client';

import React from 'react';

interface EtiquetaProps {
  producto?: {
    categoria: string;
    nombre: string;
    energia100g: string;
    porcion: string;
    proteinas: string;
    grasasTotales: string;
    carbohidratos: string;
    azucaresTotales: string;
    sodio: string;
    ingredientes: string;
    alergenceos: string;
    dimensiones: string;
  };
  onClose?: () => void;
}

export default function EtiquetaZebraModal({
  producto = {
    categoria: 'INTEGRAL',
    nombre: 'B-3 INTEGRAL SESAMO BLANCO',
    energia100g: '273 kcal',
    porcion: '50 g',
    proteinas: '0.98 g',
    grasasTotales: '2.58 g',
    carbohidratos: '11.87 g',
    azucaresTotales: '7.64 g',
    sodio: '407 mg',
    ingredientes: 'Harina Integral de Trigo, Agua, Sésamo Blanco, Manteca Vegetal Interesterificada, Sal, Levadura Seca, Instantánea, Colorante #150, Acondicionador de Masa, Conservante (Propionato de Calcio).',
    alergenceos: 'Contiene gluten. Puede contener trazas de productos lácteos, huevo y soya.',
    dimensiones: '70mm x 100mm (vertical, Zebra/TSC)'
  },
  onClose
}: EtiquetaProps) {

  const imprimirEtiqueta = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 select-none">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl">
        
        {/* CABECERA MODAL */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div>
            <h3 className="font-black text-amber-400 text-sm tracking-wider uppercase">
              🖨️ Generador de Etiqueta Térmica Zebra
            </h3>
            <p className="text-[10px] font-mono text-slate-400">
              Formato optimizado {producto.dimensiones}
            </p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-white font-mono text-xs p-1"
            >
              ✕
            </button>
          )}
        </div>

        {/* CONTENEDOR DE ETIQUETA VISUAL (IMPRIME SOLO ESTE CUADRO EN ZEBRA) */}
        <div className="flex justify-center">
          <div className="w-[280px] bg-white text-black p-4 font-sans rounded-lg shadow-md border border-slate-300 print:shadow-none print:border-none print:w-full print:p-0">
            
            {/* TITULO DE PRODUCTO */}
            <div className="text-center border-b border-black pb-1 mb-2">
              <span className="block text-[10px] font-bold tracking-widest uppercase text-slate-700">
                {producto.categoria}
              </span>
              <h2 className="text-sm font-black uppercase leading-tight tracking-tight">
                {producto.nombre}
              </h2>
            </div>

            {/* INFORMACIÓN NUTRIONAL */}
            <div className="border border-black p-1.5 mb-2 text-[9px]">
              <h3 className="font-black text-center border-b border-black pb-0.5 mb-1 uppercase tracking-wider">
                INFORMACIÓN NUTRIONAL
              </h3>

              <div className="grid grid-cols-3 font-bold border-b border-slate-400 pb-0.5 text-[8px] text-slate-700">
                <span>Parámetro</span>
                <span className="text-center">100g</span>
                <span className="text-right">Porción</span>
              </div>

              <div className="space-y-0.5 py-1 text-[8.5px] border-b border-black">
                <div className="flex justify-between">
                  <span>Energía (kcal)</span>
                  <span className="font-bold">{producto.energia100g}</span>
                </div>
                <div className="flex justify-between">
                  <span>Proteínas (g)</span>
                  <span>{producto.proteinas}</span>
                </div>
                <div className="flex justify-between">
                  <span>Grasas Totales (g)</span>
                  <span>{producto.grasasTotales}</span>
                </div>
                <div className="flex justify-between">
                  <span>H. de C. Disp. (g)</span>
                  <span>{producto.carbohidratos}</span>
                </div>
                <div className="flex justify-between">
                  <span>Azúcares Totales (g)</span>
                  <span>{producto.azucaresTotales}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sodio (mg)</span>
                  <span className="font-bold">{producto.sodio}</span>
                </div>
              </div>
            </div>

            {/* INGREDIENTES Y ALÉRGENOS */}
            <div className="text-[7.5px] leading-tight space-y-1 mb-2">
              <p>
                <strong>Ingredientes:</strong> {producto.ingredientes}
              </p>
              <p className="font-bold text-slate-800">
                <strong>Alérgenos:</strong> {producto.alergenceos}
              </p>
            </div>

            {/* PIE DE ETIQUETA Y CÓDIGO QR */}
            <div className="flex justify-between items-end border-t border-black pt-1.5">
              <div className="text-[7px] space-y-0.5">
                <p className="font-black">ALEX BAKERY AI-OS</p>
                <p>Planta Producción - Lote #2026-B3</p>
                <p>Elaborado bajo norma sanitaria vigente.</p>
              </div>

              {/* SIMULADOR CÓDIGO QR ZEBRA */}
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded p-0.5">
                <div className="w-full h-full bg-white flex items-center justify-center font-mono font-bold text-[6px] text-center leading-none">
                  [ QR ]
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTONES DE ACCIÓN */}
        <div className="flex gap-2 border-t border-slate-800 pt-3">
          <button
            onClick={imprimirEtiqueta}
            className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-2.5 rounded-xl text-xs uppercase transition shadow-md shadow-amber-400/20"
          >
            🖨️ Mandar a Impresora Zebra
          </button>
        </div>

      </div>
    </div>
  );
}
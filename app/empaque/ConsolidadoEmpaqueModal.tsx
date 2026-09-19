'use client';

import React, { useState } from 'react';

interface ConsolidadoProps {
  onClose?: () => void;
}

export default function ConsolidadoEmpaqueModal({ onClose }: ConsolidadoProps) {
  const [filtroCliente, setFiltroCliente] = useState('');

  const resumenGeneral = {
    fechaOperativa: '2026-09-15',
    generado: '14-09-2026, 03:40 p. m.',
    usuario: 'Alex Castellanos',
    snapshot: 'pcs-22e677bf4130d57f',
    clientesSucursales: 28,
    pedidosIncluidos: 34,
    lineasConsideradas: 93,
    unidadesTotales: 4501,
  };

  const listaConsolidada = [
    {
      empresa: 'LAGARDERE TRAVEL RETAIL FOODSERVICES CHILE SPA',
      sucursal: 'LAGARDERE BODEGA',
      pedidos: 3,
      unidades: 23,
      observaciones: 'EMPAQUE + LOGISTICA + PRODUCCION PEDIDO 386437. ENTREGA ANTES DE LAS 13 HRS',
      productos: [
        { nombre: 'PIZZANDWICH', cantidad: 20, produccion: 20, bodega: 0, origen: 'Producción' },
        { nombre: 'FOCACCIA 2 PLANCHAS', cantidad: 3, produccion: 3, bodega: 0, origen: 'Producción' },
      ],
    },
    {
      empresa: 'NEZAR LAMA SPA',
      sucursal: 'SAHTEIN',
      pedidos: 1,
      unidades: 1030,
      observaciones: '',
      productos: [
        { nombre: 'MINI PITA BLANCO', cantidad: 600, produccion: 600, bodega: 0, origen: 'Producción' },
        { nombre: 'PITA 65 BLANCO ENVASE', cantidad: 240, produccion: 240, bodega: 0, origen: 'Producción' },
        { nombre: 'MINI PITA INTEGRAL', cantidad: 150, produccion: 150, bodega: 0, origen: 'Producción' },
        { nombre: 'PITA 65 INTEGRAL ENVASE', cantidad: 40, produccion: 40, bodega: 0, origen: 'Producción' },
      ],
    },
    {
      empresa: 'Beer Garden Bellavista SpA',
      sucursal: 'KROSS ITALIA',
      pedidos: 1,
      unidades: 140,
      observaciones: '',
      productos: [
        { nombre: 'BUN BRIOCHE 10 CM PINT', cantidad: 90, produccion: 90, bodega: 0, origen: 'Producción' },
        { nombre: 'TORTILLA 18', cantidad: 50, produccion: 50, bodega: 0, origen: 'Producción' },
      ],
    },
    {
      empresa: 'Beer Garden Bellavista SpA',
      sucursal: 'KROSS MALL SPORT',
      pedidos: 1,
      unidades: 50,
      observaciones: '',
      productos: [
        { nombre: 'BUN BRIOCHE 10 CM PINT', cantidad: 30, produccion: 30, bodega: 0, origen: 'Producción' },
        { nombre: 'CROISSANT GRANDE', cantidad: 20, produccion: 0, bodega: 20, origen: 'Bodega' },
      ],
    },
    {
      empresa: 'SEBASTIAN OFICINA',
      sucursal: 'filippo RENCA FABRICA',
      pedidos: 1,
      unidades: 20,
      observaciones: 'PRODUCCION PEDIDO 488233. CIABATTA FILIPPO YA CONVERSADA. Baguette en horno piso y bandejas onduladas, es delgado.',
      productos: [
        { nombre: 'BAGUETTE COCIDO 23 CM', cantidad: 10, produccion: 10, bodega: 0, origen: 'Producción' },
        { nombre: 'CIABATTA F', cantidad: 10, produccion: 10, bodega: 0, origen: 'Producción' },
      ],
    },
    {
      empresa: 'SEBASTIAN OFICINA',
      sucursal: 'WHYNDHAM',
      pedidos: 2,
      unidades: 142,
      observaciones: '',
      productos: [
        { nombre: 'B-7 INTEGRAL', cantidad: 15, produccion: 15, bodega: 0, origen: 'Producción' },
        { nombre: 'BRIOCHE LACTICO 10 CM SOLO PINTURA', cantidad: 15, produccion: 15, bodega: 0, origen: 'Producción' },
        { nombre: 'MINI B-7 BET LACTICO SESAMOS', cantidad: 15, produccion: 15, bodega: 0, origen: 'Producción' },
        { nombre: 'CROISSANT GRANDE', cantidad: 10, produccion: 0, bodega: 10, origen: 'Bodega' },
        { nombre: 'BAGUETTE COCIDO 23 CM', cantidad: 3, produccion: 3, bodega: 0, origen: 'Producción' },
      ],
    },
  ];

  const clientesFiltrados = listaConsolidada.filter(
    (item) =>
      item.empresa.toLowerCase().includes(filtroCliente.toLowerCase()) ||
      item.sucursal.toLowerCase().includes(filtroCliente.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 select-none font-sans text-xs text-slate-200">
      <div className="bg-slate-900 border border-amber-400/40 rounded-3xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl scrollbar-thin">
        
        {/* CABECERA GENERAL DEL CONSOLIDADO */}
        <div className="flex justify-between items-start border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] text-amber-400 font-mono font-bold uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Consolidado Oficial de Empaque
            </div>
            <h2 className="text-xl font-black text-white uppercase tracking-wider">
              📦 Despacho & Empaque General
            </h2>
            <p className="text-slate-400 text-[11px] font-mono">
              Fecha Operativa: <strong className="text-amber-400">{resumenGeneral.fechaOperativa}</strong> • Snapshot: {resumenGeneral.snapshot}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-3.5 py-2 rounded-xl text-xs uppercase transition shadow-md shadow-amber-400/20"
            >
              🖨️ Imprimir PDF
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white font-mono text-sm p-1.5 rounded-lg hover:bg-slate-800"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* MÉTRICAS TÁCTICAS DEL CONSOLIDADO */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-center space-y-0.5">
            <span className="text-slate-500 text-[10px] uppercase block">Clientes / Sucursales</span>
            <span className="text-xl font-black text-white">{resumenGeneral.clientesSucursales}</span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-center space-y-0.5">
            <span className="text-slate-500 text-[10px] uppercase block">Pedidos Incluidos</span>
            <span className="text-xl font-black text-amber-400">{resumenGeneral.pedidosIncluidos}</span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-center space-y-0.5">
            <span className="text-slate-500 text-[10px] uppercase block">Líneas de Producción</span>
            <span className="text-xl font-black text-white">{resumenGeneral.lineasConsideradas}</span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-2xl border border-amber-400/30 text-center space-y-0.5">
            <span className="text-slate-500 text-[10px] uppercase block">Unidades Totales</span>
            <span className="text-xl font-black text-amber-400">{resumenGeneral.unidadesTotales.toLocaleString()}</span>
          </div>
        </div>

        {/* BUSCADOR RÁPIDO DE CLIENTES */}
        <div className="flex justify-between items-center gap-4 bg-slate-950 p-2.5 rounded-2xl border border-slate-800">
          <input
            type="text"
            placeholder="Buscar por cliente o sucursal (ej. Nezar Lama, Kross, Wyndham)..."
            value={filtroCliente}
            onChange={(e) => setFiltroCliente(e.target.value)}
            className="w-full bg-transparent px-3 py-1.5 text-xs text-white focus:outline-none font-mono"
          />
          <span className="text-[10px] font-mono text-slate-500 px-3">
            {clientesFiltrados.length} Registros
          </span>
        </div>

        {/* TABLA DETALLADA DE CLIENTES Y PRODUCTOS */}
        <div className="space-y-4">
          {clientesFiltrados.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-md hover:border-amber-400/30 transition"
            >
              {/* ENCABEZADO DE CLIENTE */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-slate-800/80 pb-2.5 gap-2">
                <div>
                  <h3 className="font-bold text-white text-sm uppercase">{item.empresa}</h3>
                  <p className="text-[11px] font-mono text-amber-400 font-bold">{item.sucursal}</p>
                </div>

                <div className="flex items-center gap-2 font-mono text-[10px]">
                  <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg text-slate-300">
                    {item.pedidos} Pedido(s)
                  </span>
                  <span className="bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded-lg text-amber-400 font-bold">
                    {item.unidades} Unidades
                  </span>
                </div>
              </div>

              {/* OBSERVACIONES OPERATIVAS */}
              {item.observaciones && (
                <div className="p-2.5 bg-amber-400/10 border border-amber-400/30 rounded-xl text-[10px] font-mono text-amber-300">
                  ⚠️ <strong>OBSERVACIÓN OPERATIVA:</strong> {item.observaciones}
                </div>
              )}

              {/* PRODUCTOS */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-[11px]">
                  <thead className="text-slate-500 border-b border-slate-800/60 uppercase text-[9px]">
                    <tr>
                      <th className="py-1.5">Producto</th>
                      <th className="text-center">Cantidad</th>
                      <th className="text-center">Producción</th>
                      <th className="text-center">Bodega</th>
                      <th className="text-right">Origen</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {item.productos.map((p, pIdx) => (
                      <tr key={pIdx} className="hover:bg-slate-900/50">
                        <td className="py-2 text-white font-bold">{p.nombre}</td>
                        <td className="text-center font-bold text-amber-400">{p.cantidad}</td>
                        <td className="text-center text-slate-300">{p.produccion}</td>
                        <td className="text-center text-slate-400">{p.bodega}</td>
                        <td className="text-right">
                          <span
                            className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                              p.origen === 'Producción'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                : p.origen === 'Bodega'
                                ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                                : 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                            }`}
                          >
                            {p.origen}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
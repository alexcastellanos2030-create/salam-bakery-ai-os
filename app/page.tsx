'use client';
import React, { useState } from 'react';
import IaAssistant from '@/components/IaAssistant';
import { Pedido, OpcionSimulacion } from '@/types';

export default function DashboardAlex() {
  const [pedidos, setPedidos] = useState<Pedido[]>([
    { id: 'PED-001', producto: 'Baguette Tradicional', cantidad: 100, prioridad: 'Spress', estado: 'Batido', alertaAtraso: false },
    { id: 'PED-002', producto: 'Pan de Molde Masa Madre', cantidad: 50, prioridad: 'Hacer de Nuevo', estado: 'Pesaje', alertaAtraso: true },
    { id: 'PED-003', producto: 'Ciabatta Artesanal', cantidad: 80, prioridad: 'Normal', estado: 'Fermentacion', alertaAtraso: false },
  ]);
  const [versionAplicada, setVersionAplicada] = useState<string>('Ninguna');

  const handleApplyOption = (opcion: OpcionSimulacion) => {
    setVersionAplicada(opcion.nombre);
    setPedidos((prev) => prev.map((p) => (p.prioridad === 'Spress' ? { ...p, estado: 'Fermentacion' } : p)));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-slate-800 gap-4">
        <div>
          <h1 className="text-2xl font-black text-amber-400">SALAM BAKERY AI-OS</h1>
          <p className="text-xs text-slate-400">Administrador Único: <span className="text-slate-200 font-bold">Alexander Segundo Castellanos Perozo</span></p>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-xs">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-slate-300">Sincronización Vercel: <b className="text-green-400">Activa</b></span>
        </div>
      </header>
      <IaAssistant onApplyOption={handleApplyOption} />
      {versionAplicada !== 'Ninguna' && (
        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-xl text-xs mb-6">⚡ Última Optimización Aplicada: <b>{versionAplicada}</b></div>
      )}
      <section className="mt-6">
        <h2 className="text-lg font-bold text-slate-200 mb-4">Lotes en Planta y Monitoreo en Tiempo Real</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pedidos.map((ped) => (
            <div key={ped.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono font-bold text-amber-400">{ped.id}</span>
                <span className={ped.prioridad === 'Spress' ? 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30' : 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300'}>{ped.prioridad}</span>
              </div>
              <h3 className="font-bold text-sm text-slate-100">{ped.producto}</h3>
              <p className="text-xs text-slate-400 mt-1">Cantidad: {ped.cantidad} unidades</p>
              <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-400">Etapa:</span>
                <span className="text-xs text-amber-300 font-semibold">{ped.estado}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import IaAssistant from '@/components/IaAssistant';

export default function DashboardAlex() {
  return (
    <div className="space-y-6 text-xs text-slate-300">
      <header className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-black text-yellow-400">📊 Dashboard Principal</h1>
        <p className="text-slate-400">Alex Bakery AI-OS — Sistema Operativo de Control Integral</p>
      </header>

      {/* Componente Asistente de IA con la ruta correcta */}
      <IaAssistant />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
          <span className="text-amber-400 text-lg">🥣</span>
          <h3 className="font-bold text-white">Producción Hoy</h3>
          <p className="text-xl font-black text-yellow-400">1,200 Unidades</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
          <span className="text-amber-400 text-lg">📦</span>
          <h3 className="font-bold text-white">Harina Utilizada</h3>
          <p className="text-xl font-black text-yellow-400">3 Sacos (135 kg)</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
          <span className="text-amber-400 text-lg">🛡️</span>
          <h3 className="font-bold text-white">Estado del Sistema</h3>
          <p className="text-xl font-black text-emerald-400">Operativo (Admin)</p>
        </div>
      </div>
    </div>
  );
}
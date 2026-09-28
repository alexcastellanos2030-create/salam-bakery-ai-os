'use client';

import React, { useState } from 'react';

export default function SuperUserLogin() {
  const [masterKey, setMasterKey] = useState('');

  const handleSuperUserLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ingresando con Clave Maestra...');
  };

  return (
    <section className="bg-[#1A1D24] border border-[#D97706] rounded-2xl p-4 shadow-xl flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-[#2A2E39]">
          <span className="bg-[#D97706] text-black font-black text-[10px] px-2 py-0.5 rounded-lg">1</span>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#FBBF24]">
              Super Usuario
            </h3>
            <p className="text-[7px] text-[#9CA3AF]">ACCESO ADMINISTRATIVO GLOBAL</p>
          </div>
        </div>

        <form onSubmit={handleSuperUserLogin} className="space-y-2.5 text-[10px]">
          <div>
            <label className="text-[8px] font-bold uppercase block mb-1 text-[#9CA3AF]">
              Clave Maestra
            </label>
            <input 
              type="password" 
              value={masterKey}
              onChange={(e) => setMasterKey(e.target.value)}
              placeholder="••••••••••••••••"
              className="w-full bg-[#12141A] border border-[#2A2E39] rounded-xl p-2 text-[10px] font-mono text-[#FBBF24] focus:outline-none focus:border-[#D97706]" 
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#D97706] hover:bg-amber-600 text-black font-black py-2.5 px-3 rounded-xl text-[10px] transition-colors shadow cursor-pointer"
          >
            INGRESAR COMO SUPER USUARIO
          </button>
        </form>
      </div>

      <div className="mt-4 bg-[#12141A] p-2.5 rounded-xl border border-[#2A2E39] text-[8px] text-[#9CA3AF]">
        <p className="font-bold text-[#FBBF24] mb-0.5">ESTADO ROOT</p>
        <p>Control total sobre parámetros de producción y registros del sistema.</p>
      </div>
    </section>
  );
}
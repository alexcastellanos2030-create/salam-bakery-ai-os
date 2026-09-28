'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RegisterEmployeePage() {
  const [newEmpName, setNewEmpName] = useState('Carlos Mendoza Silva');
  const [newEmpDoc, setNewEmpDoc] = useState('18459203');
  const [newEmpEmail, setNewEmpEmail] = useState('carlos.mendoza@bakery-ops.cl');
  const [newEmpPass, setNewEmpPass] = useState('PassSecure#2026');
  const [newEmpPhone, setNewEmpPhone] = useState('+56 9 8765 4321');
  const [empAddress, setEmpAddress] = useState('Av. Los Pinos #456, Depto 204');
  const [familyContactName, setFamilyContactName] = useState('María Silva (Madre)');
  const [familyContactPhone, setFamilyContactPhone] = useState('+56 9 9876 5432');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registrando nuevo empleado...');
  };

  return (
    <div className="min-h-screen w-full bg-[#12141A] text-white p-4 flex flex-col justify-between font-sans">
      
      {/* CABECERA */}
      <header className="flex items-center justify-between mb-4 pb-3 border-b border-[#2A2E39] px-2">
        <div className="flex items-center gap-3">
          <div className="bg-[#D97706] text-black font-black px-3 py-1.5 rounded-xl text-xs tracking-wider shadow">
            AB
          </div>
          <div>
            <h1 className="text-base font-black tracking-tight text-[#FBBF24]">
              ALEX BAKERY AI-OS
            </h1>
            <p className="text-[8px] font-bold tracking-widest uppercase text-[#D97706]">
              SUB-PÁGINA: 4. REGISTRO DE NUEVO EMPLEADO
            </p>
          </div>
        </div>
        <Link 
          href="/"
          className="bg-[#1A1D24] border border-[#2A2E39] hover:border-[#D97706] text-[#FBBF24] px-3 py-1.5 rounded-xl text-[9px] font-bold transition-colors shadow"
        >
          ⬅ VOLVER AL LOGIN
        </Link>
      </header>

      {/* CONTENEDOR PRINCIPAL */}
      <main className="max-w-xl mx-auto w-full my-auto">
        <form onSubmit={handleRegister} className="bg-[#F59E0B] text-black border border-[#D97706] rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-black/10">
              <span className="bg-black text-[#FBBF24] font-black text-[10px] px-2 py-0.5 rounded-lg">4</span>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-black">
                  Registro de Nuevo Empleado
                </h3>
                <p className="text-[7px] text-black/70 font-semibold">PASO OBLIGATORIO POR POLÍTICA DE EMPRESA</p>
              </div>
            </div>

            <p className="text-[8px] text-black/80 font-medium mb-3 bg-black/5 p-2 rounded-xl">
              Para otorgar el acceso al sistema, debe completar este registro obligatorio con datos verificables.
            </p>

            <div className="space-y-2.5 text-[10px]">
              <div>
                <label className="text-[8px] font-extrabold uppercase block mb-1 text-black/80">Nombre Completo:</label>
                <input 
                  type="text" 
                  value={newEmpName}
                  onChange={(e) => setNewEmpName(e.target.value)}
                  className="w-full bg-white/90 border border-black/20 rounded-xl p-2 text-[10px] font-medium text-black focus:outline-none focus:border-black" 
                />
              </div>

              <div>
                <label className="text-[8px] font-extrabold uppercase block mb-1 text-black/80">Nro. de Identidad / Cédula:</label>
                <input 
                  type="text" 
                  value={newEmpDoc}
                  onChange={(e) => setNewEmpDoc(e.target.value)}
                  className="w-full bg-white/90 border border-black/20 rounded-xl p-2 text-[10px] font-medium text-black focus:outline-none focus:border-black" 
                />
              </div>

              <div>
                <label className="text-[8px] font-extrabold uppercase block mb-1 text-black/80">Dirección de Habitación:</label>
                <input 
                  type="text" 
                  value={empAddress}
                  onChange={(e) => setEmpAddress(e.target.value)}
                  className="w-full bg-white/90 border border-black/20 rounded-xl p-2 text-[10px] font-medium text-black focus:outline-none focus:border-black" 
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[8px] font-extrabold uppercase block mb-1 text-black/80">Correo (Verificado):</label>
                  <input 
                    type="text" 
                    value={newEmpEmail}
                    onChange={(e) => setNewEmpEmail(e.target.value)}
                    className="w-full bg-white/90 border border-black/20 rounded-xl p-2 text-[9px] font-medium text-black focus:outline-none focus:border-black" 
                  />
                </div>
                <div>
                  <label className="text-[8px] font-extrabold uppercase block mb-1 text-black/80">Clave de Acceso Correo:</label>
                  <input 
                    type="text" 
                    value={newEmpPass}
                    onChange={(e) => setNewEmpPass(e.target.value)}
                    className="w-full bg-white/90 border border-black/20 rounded-xl p-2 text-[9px] font-mono text-black focus:outline-none focus:border-black" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[8px] font-extrabold uppercase block mb-1 text-black/80">Nro. de Móvil del Empleado:</label>
                  <input 
                    type="text" 
                    value={newEmpPhone}
                    onChange={(e) => setNewEmpPhone(e.target.value)}
                    className="w-full bg-white/90 border border-black/20 rounded-xl p-2 text-[10px] font-medium text-black focus:outline-none focus:border-black" 
                  />
                </div>
                <div>
                  <label className="text-[8px] font-extrabold uppercase block mb-1 text-black/80">Móvil del Familiar:</label>
                  <input 
                    type="text" 
                    value={familyContactPhone}
                    onChange={(e) => setFamilyContactPhone(e.target.value)}
                    className="w-full bg-white/90 border border-black/20 rounded-xl p-2 text-[10px] font-medium text-black focus:outline-none focus:border-black" 
                  />
                </div>
              </div>

              <div>
                <label className="text-[8px] font-extrabold uppercase block mb-1 text-black/80">Nombre de un Familiar (Contacto de Emergencia):</label>
                <input 
                  type="text" 
                  value={familyContactName}
                  onChange={(e) => setFamilyContactName(e.target.value)}
                  className="w-full bg-white/90 border border-black/20 rounded-xl p-2 text-[10px] font-medium text-black focus:outline-none focus:border-black" 
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button type="button" className="bg-black/15 hover:bg-black/25 text-black font-bold py-4 px-2 rounded-xl text-[9px] transition-colors cursor-pointer border border-black/20">
                  1. Capturar Huella 👆
                </button>
                <button type="button" className="bg-black/15 hover:bg-black/25 text-black font-bold py-4 px-2 rounded-xl text-[9px] transition-colors cursor-pointer border border-black/20">
                  2. Imagen Facial 👤
                </button>
              </div>

              <div>
                <button type="button" className="w-full bg-black/20 hover:bg-black/30 text-black font-bold py-2.5 px-3 rounded-xl text-[9px] transition-colors cursor-pointer border border-black/30 tracking-wider">
                  💬 REGISTRO MSJ (NOTIFICACIÓN SMS / WHATSAPP)
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button type="submit" className="w-full bg-black hover:bg-zinc-900 text-[#FBBF24] font-black py-2.5 px-3 rounded-xl text-[10px] transition-colors shadow cursor-pointer">
              REGISTRAR DATOS
            </button>
          </div>
        </form>
      </main>

      {/* PIE DE PÁGINA */}
      <footer className="text-center text-[8px] font-bold uppercase tracking-widest mt-4 pt-2 border-t border-[#2A2E39] text-[#9CA3AF]">
        SISTEMA AUTO-DEFENSIVO ZERO TRUST • ALEX BAKERY AI-OS v2.0
      </footer>

    </div>
  );
}
'use client';

import React, { useState } from 'react';

export default function AlexLoginPortal() {
  // Estados para Registro de Empleado (Columna 2)
  const [newEmpName, setNewEmpName] = useState('Juan Carlos Pérez');
  const [newEmpDoc, setNewEmpDoc] = useState('12345678');
  const [newEmpEmail, setNewEmpEmail] = useState('usuario@email.com');
  const [newEmpPass, setNewEmpPass] = useState('');
  const [newEmpPhone, setNewEmpPhone] = useState('+56 9 1234 5678');

  // Estados para Inicio de Sesión (Columna 3)
  const [loginName, setLoginName] = useState('D. Alexander Castellanos');
  const [loginDoc, setLoginDoc] = useState('');
  const [loginEmail, setLoginEmail] = useState('alexcastellanos2030@gmail.com');
  const [loginPass, setLoginPass] = useState('');
  const [selectedAuth, setSelectedAuth] = useState('clave');

  return (
    <div className="min-h-screen w-full bg-[#12141A] text-white p-4 flex flex-col justify-between font-sans overflow-x-auto">
      
      {/* CABECERA PRINCIPAL */}
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
              PORTAL UNIFICADO DE AUTENTICACIÓN &amp; REGISTRO
            </p>
          </div>
        </div>
        <div className="text-[8px] font-bold tracking-wider text-[#9CA3AF] bg-[#1A1D24] px-3 py-1.5 rounded-xl border border-[#2A2E39]">
          ⚡ ESTADO ZERO TRUST: <span className="text-[#22C55E]">ACTIVO</span>
        </div>
      </header>

      {/* CONTENEDOR DE LAS 3 COLUMNAS */}
      <main className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-start px-1 my-auto">
        
        {/* COLUMNA 1: NORMAS DE SEGURIDAD & USO */}
        <section className="bg-[#1A1D24] border border-[#2A2E39] rounded-2xl p-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-[#2A2E39]">
              <span className="bg-[#D97706] text-black font-black text-[10px] px-2 py-0.5 rounded-lg">1</span>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#FBBF24]">
                  1. Normas de Seguridad &amp; Uso
                </h3>
                <p className="text-[7px] text-[#9CA3AF]">POLÍTICA ZERO TRUST V2.0</p>
              </div>
            </div>

            <div className="space-y-2.5 text-[9px] text-[#D1D5DB] leading-relaxed">
              <div className="bg-[#12141A] p-2 rounded-xl border border-[#2A2E39]">
                <p className="font-bold text-[#FBBF24] mb-0.5">POLÍTICA ZERO TRUST V2.0</p>
                <p className="text-[8px] text-[#9CA3AF]">Ningún usuario, dispositivo o aplicación es confiable por defecto. Todo acceso requiere validación previa.</p>
              </div>

              <div>
                <p className="font-bold text-[#FBBF24] mb-1">REGLAMENTO DE MANIPULACIÓN DEL SISTEMA:</p>
                <ol className="list-decimal list-inside space-y-1 text-[8px] text-[#9CA3AF]">
                  <li><strong className="text-[#D1D5DB]">Identificación Obligatoria:</strong> Está estrictamente prohibido utilizar cuentas de terceros o credenciales compartidas.</li>
                  <li><strong className="text-[#D1D5DB]">Registro de Telemetría:</strong> El sistema registra automáticamente la hora de inicio, dirección IP, dispositivo y tiempo total de permanencia.</li>
                  <li><strong className="text-[#D1D5DB]">Protección Biométrica:</strong> El registro dactilar y facial es requerido de forma obligatoria por la política interna de la empresa.</li>
                  <li><strong className="text-[#D1D5DB]">Cierre de Sesión:</strong> Toda sesión inactiva por más de 15 minutos será terminada automáticamente por el guardián AI.</li>
                  <li><strong className="text-[#D1D5DB]">Sanciones:</strong> Intentos de vulnerar el sistema resultarán en la congelación inmediata del perfil y reporte a Administración.</li>
                </ol>
              </div>

              <div className="bg-[#12141A] p-2 rounded-xl border border-[#2A2E39] text-[8px]">
                <p className="font-bold text-[#FBBF24] mb-0.5">AVISO LEGAL ALEX BAKERY</p>
                <p className="text-[#9CA3AF]">Los datos recolectados están protegidos por leyes de privacidad laboral y se usan únicamente para control de acceso e incidencias.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-[#2A2E39]">
            <p className="text-[8px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-1.5">CONTROLES DE SEGURIDAD (MICRO-BOTONES):</p>
            <div className="grid grid-cols-4 gap-1">
              <button className="bg-[#12141A] border border-[#2A2E39] hover:border-[#D97706] rounded-lg py-1.5 text-[8px] text-[#9CA3AF] font-medium transition-colors cursor-pointer">Auditoría</button>
              <button className="bg-[#12141A] border border-[#2A2E39] hover:border-[#D97706] rounded-lg py-1.5 text-[8px] text-[#9CA3AF] font-medium transition-colors cursor-pointer">Kill-Switch</button>
              <button className="bg-[#12141A] border border-[#2A2E39] hover:border-[#D97706] rounded-lg py-1.5 text-[8px] text-[#9CA3AF] font-medium transition-colors cursor-pointer">Permisos</button>
              <button className="bg-[#12141A] border border-[#2A2E39] hover:border-[#D97706] rounded-lg py-1.5 text-[8px] text-[#9CA3AF] font-medium transition-colors cursor-pointer">Políticas</button>
            </div>
          </div>
        </section>

        {/* COLUMNA 2: REGISTRO DE NUEVO EMPLEADO */}
        <section className="bg-[#F59E0B] text-black border border-[#D97706] rounded-2xl p-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-black/10">
              <span className="bg-black text-[#FBBF24] font-black text-[10px] px-2 py-0.5 rounded-lg">2</span>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-black">
                  2. Registro de Nuevo Empleado
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
                    type="password" 
                    value={newEmpPass}
                    onChange={(e) => setNewEmpPass(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white/90 border border-black/20 rounded-xl p-2 text-[9px] font-mono text-black focus:outline-none focus:border-black" 
                  />
                </div>
              </div>

              <div>
                <label className="text-[8px] font-extrabold uppercase block mb-1 text-black/80">Nro. de Móvil:</label>
                <input 
                  type="text" 
                  value={newEmpPhone}
                  onChange={(e) => setNewEmpPhone(e.target.value)}
                  className="w-full bg-white/90 border border-black/20 rounded-xl p-2 text-[10px] font-medium text-black focus:outline-none focus:border-black" 
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button type="button" className="bg-black/15 hover:bg-black/25 text-black font-bold py-2 px-2 rounded-xl text-[8px] transition-colors cursor-pointer border border-black/20">
                  1. Capturar Huella
                </button>
                <button type="button" className="bg-black/15 hover:bg-black/25 text-black font-bold py-2 px-2 rounded-xl text-[8px] transition-colors cursor-pointer border border-black/20">
                  2. Imagen Facial
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="w-full bg-black hover:bg-zinc-900 text-[#FBBF24] font-black py-2.5 px-3 rounded-xl text-[10px] transition-colors shadow cursor-pointer">
              5. REGISTRAR DATOS
            </button>
          </div>
        </section>

        {/* COLUMNA 3: INICIO DE SESIÓN */}
        <section className="bg-[#1A1D24] border border-[#2A2E39] rounded-2xl p-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-[#2A2E39]">
              <span className="bg-[#D97706] text-black font-black text-[10px] px-2 py-0.5 rounded-lg">3</span>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#FBBF24]">
                  3. Inicio de Sesión
                </h3>
                <p className="text-[7px] text-[#9CA3AF]">INGRESO DIARIO AL SISTEMA</p>
              </div>
            </div>

            <div className="space-y-2.5 text-[10px]">
              <div>
                <label className="text-[8px] font-bold uppercase block mb-1 text-[#9CA3AF]">Nombre y Apellido</label>
                <input 
                  type="text" 
                  value={loginName}
                  onChange={(e) => setLoginName(e.target.value)}
                  className="w-full bg-[#12141A] border border-[#2A2E39] rounded-xl p-2 text-[10px] font-medium text-[#D1D5DB] focus:outline-none focus:border-[#D97706]" 
                />
              </div>

              <div>
                <label className="text-[8px] font-bold uppercase block mb-1 text-[#9CA3AF]">Nro. de Documento</label>
                <input 
                  type="text" 
                  value={loginDoc}
                  onChange={(e) => setLoginDoc(e.target.value)}
                  placeholder="Nro. de identificación"
                  className="w-full bg-[#12141A] border border-[#2A2E39] rounded-xl p-2 text-[10px] font-medium text-[#D1D5DB] focus:outline-none focus:border-[#D97706]" 
                />
              </div>

              <div>
                <label className="text-[8px] font-bold uppercase block mb-1 text-[#9CA3AF]">Correo Electrónico</label>
                <input 
                  type="text" 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full bg-[#12141A] border border-[#2A2E39] rounded-xl p-2 text-[10px] font-medium text-[#D1D5DB] focus:outline-none focus:border-[#D97706]" 
                />
              </div>

              <div>
                <label className="text-[8px] font-bold uppercase block mb-1 text-[#9CA3AF]">Clave de Acceso</label>
                <input 
                  type="password" 
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#12141A] border border-[#2A2E39] rounded-xl p-2 text-[10px] font-mono text-[#FBBF24] focus:outline-none focus:border-[#D97706]" 
                />
              </div>

              <div>
                <label className="text-[8px] font-bold uppercase block mb-1 text-[#9CA3AF]">Método de Autenticación Preferido:</label>
                <div className="grid grid-cols-4 gap-1.5 text-center">
                  <button 
                    type="button"
                    onClick={() => setSelectedAuth('clave')}
                    className={`bg-[#12141A] border rounded-xl p-2 text-[8px] transition-colors cursor-pointer ${selectedAuth === 'clave' ? 'border-[#D97706] text-[#FBBF24]' : 'border-[#2A2E39] text-[#9CA3AF]'}`}
                  >
                    🔑<br/>Clave
                  </button>
                  <button 
                    type="button"
                    onClick={() => setSelectedAuth('sms')}
                    className={`bg-[#12141A] border rounded-xl p-2 text-[8px] transition-colors cursor-pointer ${selectedAuth === 'sms' ? 'border-[#D97706] text-[#FBBF24]' : 'border-[#2A2E39] text-[#9CA3AF]'}`}
                  >
                    💬<br/>SMS
                  </button>
                  <button 
                    type="button"
                    onClick={() => setSelectedAuth('facial')}
                    className={`bg-[#12141A] border rounded-xl p-2 text-[8px] transition-colors cursor-pointer ${selectedAuth === 'facial' ? 'border-[#D97706] text-[#FBBF24]' : 'border-[#2A2E39] text-[#9CA3AF]'}`}
                  >
                    👤<br/>Facial
                  </button>
                  <button 
                    type="button"
                    onClick={() => setSelectedAuth('huella')}
                    className={`bg-[#12141A] border rounded-xl p-2 text-[8px] transition-colors cursor-pointer ${selectedAuth === 'huella' ? 'border-[#D97706] text-[#FBBF24]' : 'border-[#2A2E39] text-[#9CA3AF]'}`}
                  >
                    👆<br/>Huella
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="w-full bg-[#FACC15] hover:bg-amber-400 text-[#111318] font-black py-2.5 px-3 rounded-xl text-[10px] transition-colors shadow cursor-pointer mb-2.5">
              INICIAR SESIÓN EN EL SISTEMA
            </button>
            <div className="bg-[#12141A] p-2.5 rounded-xl border border-[#2A2E39] text-[8px] text-[#9CA3AF] flex justify-between">
              <span>🖥️ Windows PC | IP: 418</span>
              <span>⏱️ Tiempo: 00:00:00</span>
            </div>
          </div>
        </section>

      </main>

      {/* PIE DE PÁGINA */}
      <footer className="text-center text-[8px] font-bold uppercase tracking-widest mt-4 pt-2 border-t border-[#2A2E39] text-[#9CA3AF]">
        SISTEMA AUTO-DEFENSIVO ZERO TRUST • ALEX BAKERY AI-OS v2.0
      </footer>

    </div>
  );
}
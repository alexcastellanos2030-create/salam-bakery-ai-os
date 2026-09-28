'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // <--- Importante para la conexión de páginas
import SuperUserLogin from './components/SuperUserLogin';

export default function AlexLoginPortal() {
  // Estados para Inicio de Sesión (Columna 3)
  const [loginName, setLoginName] = useState('Roberto Sánchez Gómez');
  const [loginDoc, setLoginDoc] = useState('16234890');
  const [loginEmail, setLoginEmail] = useState('roberto.sanchez@bakery-ops.cl');
  const [loginPass, setLoginPass] = useState('AdminPass*99');
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
              PORTAL UNIFICADO DE AUTENTICACIÓN
            </p>
          </div>
        </div>
        <div className="text-[8px] font-bold tracking-wider text-[#9CA3AF] bg-[#1A1D24] px-3 py-1.5 rounded-xl border border-[#2A2E39]">
          ⚡ ESTADO ZERO TRUST: <span className="text-[#22C55E]">ACTIVO</span>
        </div>
      </header>

      {/* CONTENEDOR GENERAL DE 3 COLUMNAS */}
      <main className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch px-1 my-auto max-w-7xl mx-auto">
        
        {/* COLUMNA 1: SUPER USUARIO (IZQUIERDA) */}
        <div className="flex flex-col h-full">
          <SuperUserLogin />
        </div>

        {/* COLUMNA 2: NORMAS DE SEGURIDAD & USO (CENTRO) */}
        <section className="bg-[#1A1D24] border border-[#2A2E39] rounded-2xl p-4 shadow-xl flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-[#2A2E39]">
              <span className="bg-[#D97706] text-black font-black text-[10px] px-2 py-0.5 rounded-lg">2</span>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#FBBF24]">
                  Normas de Seguridad &amp; Uso
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
                <p className="font-bold text-[#FBBF24] mb-1">REGLAMENTO DE MANIPULACIÓN:</p>
                <ol className="list-decimal list-inside space-y-1 text-[8px] text-[#9CA3AF]">
                  <li><strong className="text-[#D1D5DB]">Identificación:</strong> Prohibido usar cuentas ajenas o credenciales compartidas.</li>
                  <li><strong className="text-[#D1D5DB]">Telemetría:</strong> Se registra hora, IP, dispositivo y tiempo de permanencia.</li>
                  <li><strong className="text-[#D1D5DB]">Biometría:</strong> Registro facial/dactilar obligatorio por normativa interna.</li>
                  <li><strong className="text-[#D1D5DB]">Inactividad:</strong> Sesiones inactivas &gt;15 min se cierran automáticamente.</li>
                  <li><strong className="text-[#D1D5DB]">Sanciones:</strong> Intentos de vulnerar el sistema congelan el perfil.</li>
                </ol>
              </div>

              <div className="bg-[#12141A] p-2 rounded-xl border border-[#2A2E39] text-[8px]">
                <p className="font-bold text-[#FBBF24] mb-0.5">AVISO LEGAL</p>
                <p className="text-[#9CA3AF]">Datos protegidos por leyes de privacidad laboral para control de acceso.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-[#2A2E39]">
            <p className="text-[8px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-1.5">CONTROLES:</p>
            <div className="grid grid-cols-4 gap-1">
              <button className="bg-[#12141A] border border-[#2A2E39] hover:border-[#D97706] rounded-lg py-1.5 text-[8px] text-[#9CA3AF] font-medium transition-colors cursor-pointer">Auditoría</button>
              <button className="bg-[#12141A] border border-[#2A2E39] hover:border-[#D97706] rounded-lg py-1.5 text-[8px] text-[#9CA3AF] font-medium transition-colors cursor-pointer">Kill-Switch</button>
              <button className="bg-[#12141A] border border-[#2A2E39] hover:border-[#D97706] rounded-lg py-1.5 text-[8px] text-[#9CA3AF] font-medium transition-colors cursor-pointer">Permisos</button>
              <button className="bg-[#12141A] border border-[#2A2E39] hover:border-[#D97706] rounded-lg py-1.5 text-[8px] text-[#9CA3AF] font-medium transition-colors cursor-pointer">Políticas</button>
            </div>
          </div>
        </section>

        {/* COLUMNA 3: INICIO DE SESIÓN & BOTÓN CONECTADO A SUB-PÁGINA */}
        <section className="bg-[#1A1D24] border border-[#2A2E39] rounded-2xl p-4 shadow-xl flex flex-col justify-between h-full">
          <div>
            {/* CABECERA Y BOTÓN DE REGISTRO CONECTADO */}
            <div className="flex flex-col gap-2 mb-3 pb-2.5 border-b border-[#2A2E39]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-[#D97706] text-black font-black text-[10px] px-2 py-0.5 rounded-lg">3</span>
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#FBBF24]">
                      Inicio de Sesión
                    </h3>
                    <p className="text-[7px] text-[#9CA3AF]">INGRESO DIARIO AL SISTEMA</p>
                  </div>
                </div>
              </div>
              
              {/* BOTÓN 4 CONECTADO A LA SUB-PÁGINA /register */}
              <Link 
                href="/register"
                className="w-full bg-[#D97706] hover:bg-amber-600 text-black font-bold py-2 px-3 rounded-xl text-[9px] uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 border border-[#FBBF24] animate-pulse cursor-pointer text-center"
              >
                <span>🚀</span> 4. REGISTRAR EMPLEADO <span>🚀</span>
              </Link>
            </div>

            <div className="space-y-2 text-[10px]">
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
                  type="text" 
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  className="w-full bg-[#12141A] border border-[#2A2E39] rounded-xl p-2 text-[10px] font-mono text-[#FBBF24] focus:outline-none focus:border-[#D97706]" 
                />
              </div>

              <div>
                <label className="text-[8px] font-bold uppercase block mb-1 text-[#9CA3AF]">Método de Autenticación:</label>
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
            <button className="w-full bg-[#FACC15] hover:bg-amber-400 text-[#111318] font-black py-2.5 px-3 rounded-xl text-[10px] transition-colors shadow cursor-pointer mb-2">
              INICIAR SESIÓN EN EL SISTEMA
            </button>
            <div className="bg-[#12141A] p-2 rounded-xl border border-[#2A2E39] text-[8px] text-[#9CA3AF] flex justify-between">
              <span>🖥️ Windows PC</span>
              <span>⏱️ 00:00:00</span>
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
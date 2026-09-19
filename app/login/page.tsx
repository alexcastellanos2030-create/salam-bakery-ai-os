'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PortalEntradaIA() {
  const [esNuevoUsuario, setEsNuevoUsuario] = useState(false);
  const [tipoDocumento, setTipoDocumento] = useState<'RUT' | 'DNI' | 'CEDULA_E' | 'PASAPORTE'>('RUT');
  const [metodoAutenticacion, setMetodoAutenticacion] = useState<'CLAVE' | 'HUELLA' | 'FACIAL' | 'OTP'>('CLAVE');
  
  const [correoIngresado, setCorreoIngresado] = useState('');
  const [docIngresado, setDocIngresado] = useState('');
  
  const [huellaRegistrada, setHuellaRegistrada] = useState(false);
  const [facialRegistrado, setFacialRegistrado] = useState(false);
  const [telefonoMovil, setTelefonoMovil] = useState('');
  const [progresoFichaHR, setProgresoFichaHR] = useState<number | null>(null);
  const [errorAutorizacion, setErrorAutorizacion] = useState(false);

  const guiaDocumento = {
    RUT: { ejemplo: '12.345.678-K' },
    DNI: { ejemplo: '87.654.321' },
    CEDULA_E: { ejemplo: 'E-843.219' },
    PASAPORTE: { ejemplo: 'PA-9938210' },
  };

  const verificarAutorizacionHR = (documento: string) => {
    setDocIngresado(documento);
    if (documento.length >= 6) {
      const ultimoDigito = parseInt(documento.slice(-1)) || 0;
      const porcentaje = ultimoDigito % 2 === 0 ? 75 : 30;
      setProgresoFichaHR(porcentaje);
      setErrorAutorizacion(porcentaje < 50);
    } else {
      setProgresoFichaHR(null);
      setErrorAutorizacion(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-950 flex flex-col justify-between p-6 relative overflow-hidden font-sans select-none">
      {/* FONDO IA FUTURISTA PANORÁMICO */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950/90 to-slate-950 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* ENCABEZADO SUPERIOR HORIZONTAL */}
      <header className="relative z-10 flex justify-between items-center border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center font-black text-amber-400 text-xl shadow-[0_0_20px_rgba(250,204,21,0.2)]">
            AB
          </div>
          <div>
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 tracking-wider uppercase">
              ALEX BAKERY AI-OS
            </h1>
            <p className="text-slate-400 text-xs">
              Portal de Autenticación Multimodal e Inteligencia Artificial
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-amber-400/30 text-xs text-amber-400 font-mono font-bold tracking-widest uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          ESTADO: ZERO TRUST ACTIVO
        </div>
      </header>

      {/* PANEL CENTRAL DIVIDIDO EN 2 COLUMNAS HORIZONTALES */}
      <main className="relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl w-full mx-auto">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN Y ESTADO DE SEGURIDAD */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-md bg-amber-400/10 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider border border-amber-400/20">
              Acceso Restringido a Planta
            </span>
            <h2 className="text-3xl font-black text-white leading-tight">
              Identificación Biométrica de Personal
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              El ingreso requiere verificación previa de la Ficha Laboral otorgada por la Administración. Todos los accesos son monitoreados y registrados en tiempo real.
            </p>
          </div>

          {/* SELECTOR DE PESTAÑAS (MODO HORIZONTAL) */}
          <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setEsNuevoUsuario(false)}
              className={`py-3 rounded-xl transition ${
                !esNuevoUsuario
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🔑 Ingreso Empleado
            </button>
            <button
              onClick={() => setEsNuevoUsuario(true)}
              className={`py-3 rounded-xl transition ${
                esNuevoUsuario
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📝 Primer Registro (1ª Vez)
            </button>
          </div>

          {/* CAJA INFORMATIVA DE CONTROL */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <span>🛡️</span>
              <span>Protección Autónoma Activa</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              Intentos no autorizados resultarán en la revocación instantánea del acceso y el bloqueo preventivo del dispositivo a nivel de red.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO DE ACCESO Y REGISTRO (ANCHO EXTENDIDO) */}
        <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-2xl border border-amber-400/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(250,204,21,0.1)]">
          
          {esNuevoUsuario ? (
            /* REGISTRO PRIMERA VEZ (FORMULARIO HORIZONTAL Y ANCHO) */
            <form className="space-y-4 text-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="p-3 bg-amber-400/10 border border-amber-400/30 rounded-xl text-[11px] text-amber-300 font-medium">
                🔒 <strong>Validación de Personal:</strong> Ingrese su documento para verificar el estado de su Ficha de Datos Personales ($\ge 50\%$).
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Tipo de Documento:</label>
                  <select
                    value={tipoDocumento}
                    onChange={(e) => setTipoDocumento(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="RUT">RUT (Chile)</option>
                    <option value="DNI">DNI (Nacional)</option>
                    <option value="CEDULA_E">Cédula Extranjería</option>
                    <option value="PASAPORTE">Pasaporte</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-bold">N° de Documento:</label>
                  <input
                    type="text"
                    placeholder={guiaDocumento[tipoDocumento].ejemplo}
                    onChange={(e) => verificarAutorizacionHR(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-400 focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* BARRA DE PROGRESO DE FICHA DE PERSONAL */}
              {progresoFichaHR !== null && (
                <div className={`p-3 rounded-xl border ${errorAutorizacion ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'}`}>
                  <div className="flex justify-between items-center font-bold text-[11px]">
                    <span>{errorAutorizacion ? '⛔ Registro Incompleto' : '✅ Autorizado por Administrador'}</span>
                    <span>Avance Ficha HR: {progresoFichaHR}% / 50% Mínimo</span>
                  </div>
                </div>
              )}

              {progresoFichaHR !== null && !errorAutorizacion && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 mb-1 font-bold">Nombre Completo:</label>
                      <input
                        type="text"
                        placeholder="Ej. Alexander Castellanos"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1 font-bold">Correo Electrónico:</label>
                      <input
                        type="email"
                        placeholder="ejemplo@alexbakery.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 mb-1 font-bold">Móvil (Código SMS):</label>
                      <input
                        type="tel"
                        value={telefonoMovil}
                        onChange={(e) => setTelefonoMovil(e.target.value)}
                        placeholder="+56 9 1234 5678"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-400 focus:outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1 font-bold">Clave de Acceso:</label>
                      <input
                        type="password"
                        placeholder="••••••••••••"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* CAPTURA BIOMÉTRICA EN PARALELO */}
                  <div className="space-y-2 border-t border-slate-800 pt-3">
                    <label className="block text-amber-400 font-bold">Captura Biométrica Requerida:</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setHuellaRegistrada(true)}
                        className={`p-3 rounded-xl border text-center transition flex items-center justify-center gap-2 ${
                          huellaRegistrada
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-amber-400'
                        }`}
                      >
                        <span className="text-xl">👆</span>
                        <span className="font-bold">{huellaRegistrada ? 'Huella Registrada ✓' : 'Escanear Huella'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFacialRegistrado(true)}
                        className={`p-3 rounded-xl border text-center transition flex items-center justify-center gap-2 ${
                          facialRegistrado
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-amber-400'
                        }`}
                      >
                        <span className="text-xl">📸</span>
                        <span className="font-bold">{facialRegistrado ? 'Rostro Guardado ✓' : 'Captura Facial'}</span>
                      </button>
                    </div>
                  </div>

                  <Link
                    href="/"
                    className="block text-center w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-xs transition uppercase shadow-lg shadow-amber-400/20"
                  >
                    💾 Guardar Registro Multimodal y Solicitar Acceso
                  </Link>
                </>
              )}
            </form>
          ) : (
            /* INGRESO SEGUNDA VEZ (CONFIGURACIÓN HORIZONTAL) */
            <div className="space-y-6 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-bold">Correo Electrónico Registrado:</label>
                <input
                  type="email"
                  value={correoIngresado}
                  onChange={(e) => setCorreoIngresado(e.target.value)}
                  placeholder="ejemplo@alexbakery.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-400 focus:outline-none font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-slate-400 font-bold">Método de Autenticación:</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-bold">
                  {(['CLAVE', 'HUELLA', 'FACIAL', 'OTP'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMetodoAutenticacion(m)}
                      className={`p-3 rounded-xl border text-center transition ${
                        metodoAutenticacion === m
                          ? 'bg-amber-400 text-slate-950 border-amber-400'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {m === 'CLAVE' ? '🔑 Clave' : m === 'HUELLA' ? '👆 Huella' : m === 'FACIAL' ? '📸 Facial' : '📲 SMS'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                {metodoAutenticacion === 'CLAVE' && (
                  <div>
                    <label className="block text-slate-400 mb-1 font-bold">Clave de Seguridad:</label>
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                )}

                {metodoAutenticacion === 'HUELLA' && (
                  <div className="text-center py-2 space-y-1">
                    <span className="text-3xl block animate-bounce">👆</span>
                    <p className="text-slate-400 text-[11px]">Coloque su dedo en el lector para validar...</p>
                  </div>
                )}

                {metodoAutenticacion === 'FACIAL' && (
                  <div className="text-center py-2 space-y-1">
                    <span className="text-3xl block">📸</span>
                    <p className="text-slate-400 text-[11px]">Cámara activa. Escaneando geometría facial...</p>
                  </div>
                )}

                {metodoAutenticacion === 'OTP' && (
                  <div>
                    <label className="block text-slate-400 mb-1 font-bold">Código SMS:</label>
                    <input
                      type="text"
                      placeholder="123456"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-center text-white font-mono tracking-widest text-lg focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                )}
              </div>

              <Link
                href="/"
                className="block text-center w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-xs transition uppercase shadow-lg shadow-amber-400/20"
              >
                🚀 Validar e Ingresar al Sistema
              </Link>
            </div>
          )}

        </div>
      </main>

      {/* PIE DE PÁGINA ANCHO HORIZONTAL */}
      <footer className="relative z-10 flex justify-between items-center border-t border-slate-800/80 pt-4 text-[10px] font-mono text-slate-500">
        <span>SISTEMA DE SEGURIDAD AUTO-DEFENSIVO Y CERO CONFIANZA</span>
        <span className="text-amber-400 font-bold">ALEX BAKERY AI-OS v2.0</span>
      </footer>
    </div>
  );
}
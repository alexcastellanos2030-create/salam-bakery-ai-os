'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PortalEntradaIA() {
  const [esNuevoUsuario, setEsNuevoUsuario] = useState(false);
  const [tipoDocumento, setTipoDocumento] = useState<'RUT' | 'DNI' | 'CEDULA_E' | 'PASAPORTE'>('RUT');
  const [metodoAutenticacion, setMetodoAutenticacion] = useState<'CLAVE' | 'HUELLA' | 'FACIAL' | 'OTP'>('CLAVE');
  
  // Estado para la búsqueda de Ficha del Empleado
  const [correoIngresado, setCorreoIngresado] = useState('');
  const [docIngresado, setDocIngresado] = useState('');
  
  // Estados de Registro Inicial (1ª Vez)
  const [huellaRegistrada, setHuellaRegistrada] = useState(false);
  const [facialRegistrado, setFacialRegistrado] = useState(false);
  const [telefonoMovil, setTelefonoMovil] = useState('');
  const [progresoFichaHR, setProgresoFichaHR] = useState<number | null>(null);
  const [errorAutorizacion, setErrorAutorizacion] = useState(false);

  const guiaDocumento = {
    RUT: { ejemplo: '12.345.678-K', mascara: 'Ej: 12.345.678-K (Chile)' },
    DNI: { ejemplo: '87.654.321', mascara: 'Ej: 87.654.321 (DNI Argentina/Perú/España)' },
    CEDULA_E: { ejemplo: 'E-843.219', mascara: 'Ej: E-843.219 (Cédula Extranjería)' },
    PASAPORTE: { ejemplo: 'PA-9938210', mascara: 'Ej: PA-9938210 (Internacional)' },
  };

  // Validación de autorización del Administrador (Simulación de Ficha HR)
  const verificarAutorizacionHR = (documento: string) => {
    setDocIngresado(documento);
    if (documento.length >= 6) {
      // Simulación: Si termina en número par tiene 75% completado (Autorizado), si es impar tiene 30% (Bloqueado)
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
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-sans w-full">
      {/* FONDO FUTURISTA IA */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-slate-950/80 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* TARJETA GLASSMORPHISM */}
      <div className="relative z-10 w-full max-w-xl bg-slate-900/80 backdrop-blur-2xl border border-yellow-400/30 rounded-3xl p-8 shadow-[0_0_60px_rgba(250,204,21,0.15)] space-y-6">
        
        {/* ENCABEZADO */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-yellow-400/40 text-[10px] text-yellow-400 font-mono font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
            Control de Acceso Biométrico • Alex Bakery AI-OS
          </div>
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 tracking-wider uppercase">
            Autenticación de Personal
          </h1>
          <p className="text-slate-400 text-xs">
            Validación de Ficha Laboral por la Administración de la Empresa
          </p>
        </div>

        {/* SELECTOR MODO INGRESO */}
        <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold">
          <button
            onClick={() => setEsNuevoUsuario(false)}
            className={`py-2.5 rounded-xl transition ${
              !esNuevoUsuario
                ? 'bg-yellow-400 text-slate-950 shadow-md shadow-yellow-400/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🔑 Ingreso de Empleado
          </button>
          <button
            onClick={() => setEsNuevoUsuario(true)}
            className={`py-2.5 rounded-xl transition ${
              esNuevoUsuario
                ? 'bg-yellow-400 text-slate-950 shadow-md shadow-yellow-400/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📝 Primer Registro (1ª Vez)
          </button>
        </div>

        {/* ======================================================== */}
        {/* OPCIÓN A: REGISTRO PRIMERA VEZ CON AUTORIZACIÓN HR 50%   */}
        {/* ======================================================== */}
        {esNuevoUsuario ? (
          <form className="space-y-4 text-xs" onSubmit={(e) => e.preventDefault()}>
            <div className="p-3 bg-yellow-400/10 border border-yellow-400/30 rounded-xl text-[11px] text-yellow-300">
              🔒 <strong>Regla de Seguridad:</strong> El registro solo estará activo si el Administrador habilitó previamente tu <strong>Ficha de Datos Personales (Mínimo 50% completado)</strong>.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1 font-bold">Tipo de Documento:</label>
                <select
                  value={tipoDocumento}
                  onChange={(e) => setTipoDocumento(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:border-yellow-400 focus:outline-none"
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
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-yellow-400 focus:outline-none font-mono"
                />
              </div>
            </div>

            {/* INDICADOR DE AUTORIZACIÓN POR FICHA DE DATOS PERSONALES */}
            {progresoFichaHR !== null && (
              <div className={`p-3 rounded-xl border ${errorAutorizacion ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'}`}>
                <div className="flex justify-between items-center font-bold text-[11px]">
                  <span>{errorAutorizacion ? '⛔ Registro Bloqueado' : '✅ Autorizado por Administrador'}</span>
                  <span>Avance Ficha HR: {progresoFichaHR}% / 50% Requerido</span>
                </div>
                <p className="text-[10px] text-slate-300 mt-1">
                  {errorAutorizacion
                    ? 'Tu Ficha de Datos Personales no alcanza el 50% completado por el Administrador. Contacta a RRHH.'
                    : 'Verificación exitosa. Procede a registrar tus credenciales de acceso biométrico.'}
                </p>
              </div>
            )}

            {/* CAMPOS REQUERIDOS SI ESTÁ AUTORIZADO (MÍNIMO 50%) */}
            {progresoFichaHR !== null && !errorAutorizacion && (
              <>
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Nombres y Apellidos Completos:</label>
                  <input
                    type="text"
                    placeholder="Ej. Alexander Segundo Castellanos Perozo"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1 font-bold">Correo Electrónico Registrado:</label>
                    <input
                      type="email"
                      placeholder="ejemplo@alexbakery.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-bold">Teléfono Móvil (Envío SMS/OTP):</label>
                    <input
                      type="tel"
                      value={telefonoMovil}
                      onChange={(e) => setTelefonoMovil(e.target.value)}
                      placeholder="+56 9 1234 5678"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-yellow-400 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Crear Clave de Acceso Inicial:</label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>

                {/* REGISTRO OBLIGATORIO DE BIOMETRÍA */}
                <div className="space-y-2 border-t border-slate-800 pt-3">
                  <label className="block text-yellow-400 font-bold">Captura Obligatoria de Datos Biométricos:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setHuellaRegistrada(true)}
                      className={`p-3 rounded-xl border text-center transition flex flex-col items-center gap-1 ${
                        huellaRegistrada
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-yellow-400'
                      }`}
                    >
                      <span className="text-xl">👆</span>
                      <span className="text-[10px] font-bold">{huellaRegistrada ? 'Huella Guardada ✓' : 'Escanear Huella'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFacialRegistrado(true)}
                      className={`p-3 rounded-xl border text-center transition flex flex-col items-center gap-1 ${
                        facialRegistrado
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-yellow-400'
                      }`}
                    >
                      <span className="text-xl">📸</span>
                      <span className="text-[10px] font-bold">{facialRegistrado ? 'Rostro Guardado ✓' : 'Captura Facial'}</span>
                    </button>
                  </div>
                </div>

                <Link
                  href="/"
                  className="block text-center w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-black rounded-xl text-xs transition shadow-lg shadow-yellow-400/20 uppercase"
                >
                  💾 Finalizar Registro Multimodal y Bloquear Edición
                </Link>
              </>
            )}
          </form>
        ) : (
          /* ======================================================== */
          /* OPCIÓN B: INGRESO SEGUNDA VEZ CON PERFILES VINCULADOS    */
          /* ======================================================== */
          <div className="space-y-5 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-bold">Ingresa tu Correo Electrónico Registrado:</label>
              <input
                type="email"
                value={correoIngresado}
                onChange={(e) => setCorreoIngresado(e.target.value)}
                placeholder="ejemplo@alexbakery.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-yellow-400 focus:outline-none font-mono"
              />
            </div>

            {/* SELECCIÓN MÉTODOS DE AUTENTICACIÓN */}
            <div className="space-y-2">
              <label className="block text-slate-400 font-bold">Elige tu Método de Entrada Registrado:</label>
              <div className="grid grid-cols-2 gap-2 font-bold">
                <button
                  type="button"
                  onClick={() => setMetodoAutenticacion('CLAVE')}
                  className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2 ${
                    metodoAutenticacion === 'CLAVE'
                      ? 'bg-yellow-400 text-slate-950 border-yellow-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <span>🔑</span> Clave
                </button>

                <button
                  type="button"
                  onClick={() => setMetodoAutenticacion('HUELLA')}
                  className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2 ${
                    metodoAutenticacion === 'HUELLA'
                      ? 'bg-yellow-400 text-slate-950 border-yellow-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <span>👆</span> Huella Dactilar
                </button>

                <button
                  type="button"
                  onClick={() => setMetodoAutenticacion('FACIAL')}
                  className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2 ${
                    metodoAutenticacion === 'FACIAL'
                      ? 'bg-yellow-400 text-slate-950 border-yellow-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <span>📸</span> Reconocimiento Facial
                </button>

                <button
                  type="button"
                  onClick={() => setMetodoAutenticacion('OTP')}
                  className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2 ${
                    metodoAutenticacion === 'OTP'
                      ? 'bg-yellow-400 text-slate-950 border-yellow-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <span>📲</span> Código SMS
                </button>
              </div>
            </div>

            {/* VISTA SEGÚN MÉTODO ELEGIDO */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              {metodoAutenticacion === 'CLAVE' && (
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Ingresa tu Clave de Seguridad:</label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
              )}

              {metodoAutenticacion === 'HUELLA' && (
                <div className="text-center space-y-2 py-2">
                  <span className="text-4xl block animate-bounce">👆</span>
                  <p className="text-slate-400 text-[11px]">Validando huella dactilar guardada en el perfil...</p>
                </div>
              )}

              {metodoAutenticacion === 'FACIAL' && (
                <div className="text-center space-y-2 py-2">
                  <span className="text-4xl block">📸</span>
                  <p className="text-slate-400 text-[11px]">Camara activa. Escaneando geometría facial...</p>
                </div>
              )}

              {metodoAutenticacion === 'OTP' && (
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Código SMS enviado al móvil registrado:</label>
                  <input
                    type="text"
                    placeholder="123456"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-center text-white font-mono tracking-widest text-lg focus:border-yellow-400 focus:outline-none"
                  />
                </div>
              )}
            </div>

            <Link
              href="/"
              className="block text-center w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-black rounded-xl text-xs transition shadow-lg shadow-yellow-400/20 uppercase"
            >
              🚀 Autenticar e Ingresar al Sistema
            </Link>
          </div>
        )}

        {/* PIE DE PÁGINA */}
        <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-500">
          <span>SISTEMA MODIFICABLE SÓLO POR ADMIN</span>
          <span className="text-yellow-400">ALEX BAKERY AI-OS</span>
        </div>

      </div>
    </div>
  );
}
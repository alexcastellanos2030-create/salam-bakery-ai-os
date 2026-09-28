// src/app/components/FourColumnPortal.tsx
'use client';
import { useState, useEffect } from 'react';
import { Lock, UserPlus, MessageSquare, Fingerprint, ArrowRight, ShieldAlert, Clock, User, Mail, Key } from 'lucide-react';

interface FourColumnPortalProps {
  onUnlockSuperUser: (key: string) => void;
  superUserStatusMsg: string;
  onNavigateToRegister: () => void;
  registeredUsersCount: number;
}

export default function FourColumnPortal({
  onUnlockSuperUser,
  superUserStatusMsg,
  onNavigateToRegister,
  registeredUsersCount
}: FourColumnPortalProps) {
  const [masterKeyInput, setMasterKeyInput] = useState('');
  const [isSubPortalOpen, setIsSubPortalOpen] = useState(false);

  const [fullName, setFullName] = useState('Alexander Segundo Castellanos Perozo');
  const [email, setEmail] = useState('Alexcastellanos2030@gmail.com');
  const [secondKey, setSecondKey] = useState('');
  const [fingerprintStatus, setFingerprintStatus] = useState('Pendiente de escaneo');
  const [smsOtpValue, setSmsOtpValue] = useState('');
  const [facialStatus, setFacialStatus] = useState('Pendiente de validación fisonómica');

  const [sessionTime, setSessionTime] = useState(0);
  const [startTimeStr, setStartTimeStr] = useState('');

  useEffect(() => {
    const now = new Date();
    setStartTimeStr(now.toLocaleTimeString());
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleFirstStepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (masterKeyInput.trim() === 'Root_Master_2026###' || masterKeyInput.trim() === 'Iar661972') {
      setIsSubPortalOpen(true);
    } else {
      onUnlockSuperUser(masterKeyInput);
    }
  };

  const handleFinalSuperLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onUnlockSuperUser(masterKeyInput);
  };

  const [mobileNumber, setMobileNumber] = useState('+56951049399');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpSent(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#050508] text-white flex flex-col items-center justify-start py-8 px-4">
      
      {/* TÍTULO PRINCIPAL DE LA PLATAFORMA */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-orange-500">
          Alex Bakery AI-OS
        </h1>
        <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-bold">
          Plataforma Industrial de Gestión         
      </p>
      </div>

      {/* CONTENIDO CENTRAL: SUB-PORTAL O GRILLA DE 4 COLUMNAS */}
      <div className="flex-1 flex items-center justify-center w-full">
        {isSubPortalOpen ? (
          <div className="bg-[#090a0f] border-2 border-orange-500 rounded-3xl p-6 md:p-10 shadow-2xl relative max-w-5xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-6 border-b border-orange-500/30 gap-4">
              <div>
                <span className="bg-orange-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Sub-Portal de Seguridad • Super User
                </span>
                <h2 className="text-xl font-black uppercase text-orange-400 mt-2">Inicio de Sesión Avanzado</h2>
                <p className="text-xs text-gray-400">Verifique sus parámetros e identidades registrados para acceder al núcleo.</p>
              </div>

              <div className="bg-[#121620] border border-orange-500/40 rounded-2xl p-4 flex items-center gap-4">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-gray-400">Tiempo de Uso</div>
                  <div className="text-base font-black text-orange-300 tracking-wider font-mono">{formatTime(sessionTime)}</div>
                  <div className="text-[9px] text-gray-500">Desde: {startTimeStr}</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleFinalSuperLogin} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[10px] font-black uppercase text-orange-400 mb-1 flex items-center gap-1">
                    <User size={12} /> Nombre completo
                  </label>
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white text-gray-900 border border-orange-500/40 rounded-xl px-3 py-2.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-orange-400 mb-1 flex items-center gap-1">
                    <Mail size={12} /> Correo electrónico
                  </label>
                  <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white text-gray-900 border border-orange-500/40 rounded-xl px-3 py-2.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-orange-400 mb-1 flex items-center gap-1">
                    <Key size={12} /> Clave Maestra de Confirmación
                  </label>
                  <input 
                    type="password" 
                    value={secondKey}
                    onChange={(e) => setSecondKey(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-white text-gray-900 border border-orange-500/40 rounded-xl px-3 py-2.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-orange-400 mb-1 flex items-center gap-1">
                    <Fingerprint size={12} /> Huella Dactilar
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={fingerprintStatus} 
                      readOnly
                      className="w-full bg-gray-100 text-gray-700 border border-orange-500/30 rounded-xl px-3 py-2.5 text-xs font-medium outline-none"
                    />
                    <button 
                      type="button" 
                      onClick={() => setFingerprintStatus('✓ Huella Verificada')}
                      className="bg-orange-500/25 hover:bg-orange-500 hover:text-black border border-orange-500 text-orange-300 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Escanear
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-orange-400 mb-1">
                    Verificación SMS (+56951049399)
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={smsOtpValue}
                      onChange={(e) => setSmsOtpValue(e.target.value)}
                      placeholder="Código 6 dígitos"
                      className="w-full bg-white text-gray-900 border border-orange-500/40 rounded-xl px-3 py-2.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button 
                      type="button" 
                      onClick={() => alert('Mensaje SMS OTP enviado al dispositivo autorizado.')}
                      className="bg-orange-500/25 hover:bg-orange-500 hover:text-black border border-orange-500 text-orange-300 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap"
                    >
                      Enviar MSJ
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-orange-400 mb-1">
                    Validación Fisonómica / Facial
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={facialStatus} 
                      readOnly
                      className="w-full bg-gray-100 text-gray-700 border border-orange-500/30 rounded-xl px-3 py-2.5 text-xs font-medium outline-none"
                    />
                    <button 
                      type="button" 
                      onClick={() => setFacialStatus('✓ Reconocimiento OK')}
                      className="bg-orange-500/25 hover:bg-orange-500 hover:text-black border border-orange-500 text-orange-300 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Validar
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-orange-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 bg-orange-950/30 border border-orange-500/40 p-3.5 rounded-2xl w-full md:w-auto flex-1">
                  <ShieldAlert className="text-orange-400 shrink-0" size={20} />
                  <div>
                    <div className="text-[11px] font-black uppercase text-orange-400">Protocolo de Seguridad Estricto</div>
                    <div className="text-[10px] text-gray-300">Auditoría de accesos activa para Head of Production Workshop.</div>
                  </div>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                  <button 
                    type="button"
                    onClick={() => setIsSubPortalOpen(false)}
                    className="px-5 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-800 text-xs font-bold uppercase transition-all cursor-pointer"
                  >
                    Regresar
                  </button>
                  <button 
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
                  >
                    Acceder al Sistema AI-OS
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap justify-center items-stretch gap-5 max-w-[1700px] mx-auto w-full mt-4 px-2">
            
            {/* COLUMNA 1: ACCESO RESTRINGIDO */}
            <div className="w-[265px] bg-[#090a0f] border-2 border-orange-500/50 hover:border-orange-500 rounded-3xl p-5 flex flex-col justify-between shadow-2xl transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-orange-400">
                    <Lock size={22} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black tracking-wider uppercase text-orange-400">ACCESO RESTRINGIDO</h2>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Solo acceso para el SUPER USER</span>
                  </div>
                </div>

                <form onSubmit={handleFirstStepSubmit} className="space-y-4 mt-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-orange-400 mb-1">Clave Maestra</label>
                    <input 
                      type="password"
                      value={masterKeyInput}
                      onChange={(e) => setMasterKeyInput(e.target.value)}
                      placeholder="Ej: Root_Master_2026###"
                      className="w-full bg-white text-gray-900 border border-orange-500/40 rounded-xl px-3 py-2.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black py-3 rounded-xl text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
                  >
                    INGRESAR
                  </button>
                </form>
              </div>

              {superUserStatusMsg && (
                <div className="mt-4 p-2.5 bg-orange-950/40 border border-orange-500/40 rounded-xl text-[11px] text-orange-300 font-bold text-center">
                  {superUserStatusMsg}
                </div>
              )}
            </div>

            {/* COLUMNA 2: REGISTRO PERSONAL */}
            <div className="w-[265px] bg-[#090a0f] border-2 border-orange-500/50 hover:border-orange-500 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-orange-400">
                    <UserPlus size={22} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black tracking-wider uppercase text-orange-400">Registro Personal</h2>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Gestión de Plantilla</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  Complete el registro biométrico y credenciales para operar en el sistema.
                </p>

                <div className="bg-[#121620] border border-orange-500/20 rounded-2xl p-3.5 mb-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-300">Registrados activos:</span>
                  <span className="bg-orange-500/25 border border-orange-500/50 text-orange-400 px-3 py-1 rounded-xl text-xs font-black">
                    {registeredUsersCount}
                  </span>
                </div>
              </div>

              <button 
                onClick={onNavigateToRegister}
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black py-3 rounded-xl text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <span>Nuevo Registro</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* COLUMNA 3: ACCESO SMS OTP */}
            <div className="w-[265px] bg-[#090a0f] border-2 border-orange-500/50 hover:border-orange-500 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-orange-400">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black tracking-wider uppercase text-orange-400">Acceso SMS OTP</h2>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Verificación Móvil</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  Validación de identidad rápida mediante código temporal de un solo uso.
                </p>

                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-orange-400 mb-1">Móvil:</label>
                    <input 
                      type="text"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full bg-white text-gray-900 border border-orange-500/40 rounded-xl px-3 py-2.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black py-3 rounded-xl text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
                  >
                    {otpSent ? 'OTP Enviado' : 'Enviar OTP'}
                  </button>
                </form>
              </div>

              {otpSent && (
                <div className="mt-4 p-2 bg-green-950/30 border border-green-500/40 rounded-xl text-[10px] text-green-300 font-bold text-center">
                  ✓ Código SMS enviado con éxito.
                </div>
              )}
            </div>

            {/* COLUMNA 4: BIOMETRÍA AVANZADA */}
            <div className="w-[265px] bg-[#090a0f] border-2 border-orange-500/50 hover:border-orange-500 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-orange-400">
                    <Fingerprint size={22} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black tracking-wider uppercase text-orange-400">Biometría Avanzada</h2>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Escaneo Rápido</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  Acceso seguro mediante escaneo fisonómico o validación dactilar en terminal.
                </p>

                <div className="space-y-3">
                  <button 
                    type="button"
                    onClick={() => alert('Activando cámara para escaneo fisonómico...')}
                    className="w-full bg-[#121620] hover:bg-orange-500 hover:text-black border border-orange-500/30 text-orange-300 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Fingerprint size={16} />
                    <span>Escaneo Fisonómico</span>
                  </button>

                  <button 
                    type="button"
                    onClick={() => alert('Leyendo huella digital del sensor biométrico...')}
                    className="w-full bg-[#121620] hover:bg-orange-500 hover:text-black border border-orange-500/30 text-orange-300 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Fingerprint size={16} />
                    <span>Huella Dactilar</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-orange-500/20 text-center">
                <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Zero Trust Security • Activo</span>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* PIE DE PÁGINA */}
      <div className="text-center mt-6 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
        Alex Bakery AI-OS © 2026 — Plataforma Industrial
      </div>

    </div>
  );
}
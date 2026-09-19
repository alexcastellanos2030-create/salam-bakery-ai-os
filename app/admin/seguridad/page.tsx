'use client';

import React, { useState } from 'react';

export default function Page() {
  const [pestaña, setPestaña] = useState<'NORMAS' | 'MANUAL' | 'AUDITORIA'>('NORMAS');

  const normasSeguridad = [
    {
      id: 'SEC-01',
      titulo: '1. Principio de Confianza Cero (Zero Trust) y Bloqueo Absoluto',
      creacion: 'Diseñado en la arquitectura base v2.0 para eliminar la confianza implícita por red o jerarquía.',
      finalidad: 'Garantizar que ninguna entidad (humano, bot, IA, proceso externo) pueda acceder sin verificación explícita.',
      funcion: 'Intercepta cada petición HTTP, WebSocket o consulta a la IA y exige firmas criptográficas válidas.',
      mision: 'Establecer una barrera infranqueable donde el acceso sea denegado por defecto.',
      observaciones: 'Monitoreo en milisegundos mediante clúster Redis y verificación de firma JWT en Edge Server.',
      conclusiones: 'Nadie puede eludir este control; cualquier paquete no autenticado es descartado en la capa de red.'
    },
    {
      id: 'SEC-02',
      titulo: '2. Registro Multimodal Condicionado a Ficha de Personal (HR ≥ 50%)',
      creacion: 'Implementado como regla de gobernanza laboral y de seguridad integrada.',
      finalidad: 'Impedir el autoregistro de usuarios no contratados o no validados previamente por la Administración.',
      funcion: 'Evalúa el avance del expediente del trabajador. Si el progreso es menor al 50%, bloquea el registro.',
      mision: 'Vincular jurídicamente la identidad digital del sistema con el expediente legal del empleado.',
      observaciones: 'Una vez registrado, el perfil queda congelado y solo el Administrador puede modificar datos o permisos.',
      conclusiones: 'Evita la creación de usuarios fantasma, suplantaciones o accesos no autorizados por personal externo.'
    },
    {
      id: 'SEC-03',
      titulo: '3. Aislamiento y Salvaguardas para Agentes de Inteligencia Artificial (AI Guardrails)',
      creacion: 'Desarrollado para prevenir inyecciones de comandos (Prompt Injection) y evasión de políticas.',
      finalidad: 'Asegurar que los modelos de IA integrados ejecuten órdenes dentro del estricto margen de permisos del usuario.',
      funcion: 'Somete cada entrada/salida de la IA a un filtro de seguridad (*Safety Guard*) independiente en Sandbox.',
      mision: 'Proteger la base de datos contra extracciones masivas de información guiadas por lenguaje natural.',
      observaciones: 'La IA no posee permisos de superusuario ni capacidad para autoconcederse privilegios.',
      conclusiones: 'Incluso ante ataques avanzados de ingeniería social hacia la IA, el motor rechaza solicitudes no autorizadas.'
    },
    {
      id: 'SEC-04',
      titulo: '4. Cortafuegos Adaptativo y Trampas de Red (Honeypots & Decoys)',
      creacion: 'Mecanismo defensivo de engaño y desaceleración activa (*Tarpitting*).',
      finalidad: 'Detectar, confundir y neutralizing herramientas de escaneo masivo, bots o piratas informáticos.',
      funcion: 'Despliega rutas falsas invisibles. Si una entidad intenta tocar estas rutas, se asume intención hostil.',
      mision: 'Desencadenar el baneo inmediato de IP y huella digital (*Device Fingerprint*) a nivel de red.',
      observaciones: 'Los tiempos de respuesta ante tráfico sospechoso se incrementan exponencialmente para agotar al atacante.',
      conclusiones: 'Cualquier intento de penetración automatizada resulta en el aislamiento permanente del atacante.'
    },
    {
      id: 'SEC-05',
      titulo: '5. Inmutabilidad de Datos y Registro Forense (Audit-Trail Criptográfico)',
      creacion: 'Protocolo de trazabilidad inalterable para auditorías internas y normativas.',
      finalidad: 'Registrar cada evento de inicio de sesión, cambio de permiso o modificación de fórmula sin posibilidad de borrado.',
      funcion: 'Cifra y firma cada registro con algoritmos AES-256-GCM y Sellado de Tiempo (*Timestamping*).',
      mision: 'Proporcionar evidencia irrefutable ante intentos de sabotaje, alteración de recetas o fraude.',
      observaciones: 'Ni siquiera los usuarios con acceso al servidor pueden alterar los historiales de auditoría generados.',
      conclusiones: 'Garantía total de integridad operacional para la dirección corporativa.'
    }
  ];

  return (
    <div className="space-y-6 text-xs text-slate-300 font-sans p-6">
      <header className="border-b border-slate-800 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-400/40 text-[10px] text-amber-400 font-mono font-bold uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Portal Oficial de Seguridad & Cero Confianza
          </div>
          <h1 className="text-2xl font-black text-white">🛡️ Protocolo de Seguridad & Manual de Uso</h1>
          <p className="text-slate-400 text-xs">Alex Bakery AI-OS — Especificaciones de Protección Militar e Inteligencia Artificial</p>
        </div>

        <div className="flex gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 font-bold">
          <button
            onClick={() => setPestaña('NORMAS')}
            className={`px-4 py-2 rounded-lg transition ${
              pestaña === 'NORMAS'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📜 Normas de Seguridad
          </button>

          <button
            onClick={() => setPestaña('MANUAL')}
            className={`px-4 py-2 rounded-lg transition ${
              pestaña === 'MANUAL'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📘 Manual de Uso Seguro
          </button>

          <button
            onClick={() => setPestaña('AUDITORIA')}
            className={`px-4 py-2 rounded-lg transition ${
              pestaña === 'AUDITORIA'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🚨 Kill-Switch & Respuesta
          </button>
        </div>
      </header>

      {pestaña === 'NORMAS' && (
        <div className="space-y-6">
          <div className="p-4 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-slate-200 space-y-1">
            <h3 className="font-bold text-amber-400 text-sm">⚠️ Directiva de Seguridad Incondicional:</h3>
            <p className="text-xs">
              Estas normas no admiten excepciones. Cualquier usuario, sistema informático, agente de IA o dispositivo que no cumpla con la totalidad de estas reglas será bloqueado de forma <strong>INMEDIATA Y PERMANENTE</strong>.
            </p>
          </div>

          <div className="space-y-4">
            {normasSeguridad.map((norma) => (
              <div key={norma.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg hover:border-amber-400/40 transition">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <h2 className="font-bold text-amber-400 text-sm">{norma.titulo}</h2>
                  <span className="font-mono text-[10px] bg-slate-950 text-slate-400 px-2.5 py-1 rounded-lg border border-slate-800">{norma.id}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-amber-400/80 font-bold text-[10px] uppercase font-mono block">🛠️ Creación:</span>
                    <p className="text-slate-300">{norma.creacion}</p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-amber-400/80 font-bold text-[10px] uppercase font-mono block">🎯 Finalidad:</span>
                    <p className="text-slate-300">{norma.finalidad}</p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-amber-400/80 font-bold text-[10px] uppercase font-mono block">⚙️ Función:</span>
                    <p className="text-slate-300">{norma.funcion}</p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-amber-400/80 font-bold text-[10px] uppercase font-mono block">🚀 Misión:</span>
                    <p className="text-slate-300">{norma.mision}</p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-amber-400/80 font-bold text-[10px] uppercase font-mono block">👁️ Observaciones:</span>
                    <p className="text-slate-300">{norma.observaciones}</p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-amber-400/80 font-bold text-[10px] uppercase font-mono block">📌 Conclusiones:</span>
                    <p className="text-slate-300">{norma.conclusiones}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {pestaña === 'MANUAL' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <span>📘</span> Manual de Operación y Buenas Prácticas para Empleados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-2xl">1️⃣</span>
              <h3 className="font-bold text-white">Paso 1: Solicitud a Administrador</h3>
              <p className="text-slate-400 text-[11px]">
                El empleado debe verificar que su Ficha de Datos Personales tenga al menos un 50% de llenado por el Administrador.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-2xl">2️⃣</span>
              <h3 className="font-bold text-white">Paso 2: Registro Multimodal</h3>
              <p className="text-slate-400 text-[11px]">
                En <code>/login</code> seleccione Primer Registro y guarde clave, huella, rostro y teléfono.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-2xl">3️⃣</span>
              <h3 className="font-bold text-white">Paso 3: Bloqueo de Modificación</h3>
              <p className="text-slate-400 text-[11px]">
                Sus datos quedarán congelados para edición del Administrador únicamente.
              </p>
            </div>
          </div>
        </div>
      )}

      {pestaña === 'AUDITORIA' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🚨</span>
            <div>
              <h2 className="text-lg font-bold text-rose-400">Protocolo de Respuesta Inmediata (*Kill-Switch*)</h2>
              <p className="text-slate-400 text-xs">Defensa autónoma activa ante intentos de vulneración</p>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-rose-500/30 space-y-2 font-mono text-[11px] text-rose-300">
            <p>1. Revocación instantánea de tokens de sesión JWT (&lt; 1 ms).</p>
            <p>2. Aislamiento de IP y Device Fingerprint a nivel de firewall.</p>
            <p>3. Congelamiento preventivo de la cuenta de usuario afectada.</p>
          </div>
        </div>
      )}

      <footer className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>SECURITY CORE V2.0 • ZERO TRUST ARCHITECTURE</span>
        <span className="text-amber-400">ALEX BAKERY AI-OS</span>
      </footer>
    </div>
  );
}
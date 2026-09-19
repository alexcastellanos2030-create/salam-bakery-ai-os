'use client';

import { useState } from 'react';

export default function PerfilDatosPersonalesPage() {
  const [perfil, setPerfil] = useState({
    nombres: 'Alexander Segundo',
    apellidos: 'Castellanos Perozo',
    tipoDocumento: 'Cédula', // Cédula, RUT, DNI, Pasaporte
    nroDocumento: 'V-18234567',
    fechaNacimiento: '1990-05-14',
    fechaAlta: '2022-01-15',
    fechaRetiro: '', // Vacío si sigue activo
    direccion: 'Av. Principal Las Acacias, Edif. Central, Apt 4B',
    // Contacto de Emergencia
    emergenciaNombre: 'María Perozo',
    emergenciaParentesco: 'Madre',
    emergenciaTelefono: '+58 412 555 0199',
  });

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 text-xs text-slate-300">
      <header className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-black text-amber-500">👤 Expediente de Datos Personales</h1>
        <p className="text-slate-400">Información del trabajador vinculada al sistema Alex Bakery AI-OS</p>
      </header>

      <form className="space-y-6 bg-slate-900 border border-slate-800 p-6 rounded-xl">
        {/* Nombres y Apellidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-bold block mb-1 text-slate-400">Nombres</label>
            <input
              type="text"
              value={perfil.nombres}
              onChange={(e) => setPerfil({ ...perfil, nombres: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
            />
          </div>
          <div>
            <label className="font-bold block mb-1 text-slate-400">Apellidos</label>
            <input
              type="text"
              value={perfil.apellidos}
              onChange={(e) => setPerfil({ ...perfil, apellidos: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
            />
          </div>
        </div>

        {/* Documentación Identificación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="font-bold block mb-1 text-slate-400">Tipo de Documento</label>
            <select
              value={perfil.tipoDocumento}
              onChange={(e) => setPerfil({ ...perfil, tipoDocumento: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
            >
              <option value="Cédula E">Cédula E</option>
              <option value="RUT">RUT</option>
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div>
            <label className="font-bold block mb-1 text-slate-400">Nro. de Documento</label>
            <input
              type="text"
              value={perfil.nroDocumento}
              onChange={(e) => setPerfil({ ...perfil, nroDocumento: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
            />
          </div>
          <div>
            <label className="font-bold block mb-1 text-slate-400">Fecha de Nacimiento</label>
            <input
              type="date"
              value={perfil.fechaNacimiento}
              onChange={(e) => setPerfil({ ...perfil, fechaNacimiento: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
            />
          </div>
        </div>

        {/* Fechas de Empresa y Dirección */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="font-bold block mb-1 text-slate-400">Fecha de Alta en Empresa</label>
            <input
              type="date"
              value={perfil.fechaAlta}
              onChange={(e) => setPerfil({ ...perfil, fechaAlta: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
            />
          </div>
          <div>
            <label className="font-bold block mb-1 text-slate-400">Fecha de Retiro (si aplica)</label>
            <input
              type="date"
              value={perfil.fechaRetiro}
              onChange={(e) => setPerfil({ ...perfil, fechaRetiro: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
            />
          </div>
          <div>
            <label className="font-bold block mb-1 text-slate-400">Dirección de Habitación</label>
            <input
              type="text"
              value={perfil.direccion}
              onChange={(e) => setPerfil({ ...perfil, direccion: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
            />
          </div>
        </div>

        {/* Familiar de Emergencia */}
        <div className="border-t border-slate-800 pt-4 space-y-3">
          <h2 className="text-amber-500 font-bold uppercase tracking-wider text-xs">
            🚨 Familiar a llamar en caso de Emergencia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="font-bold block mb-1 text-slate-400">Nombre Completo del Familiar</label>
              <input
                type="text"
                value={perfil.emergenciaNombre}
                onChange={(e) => setPerfil({ ...perfil, emergenciaNombre: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="font-bold block mb-1 text-slate-400">Parentesco</label>
              <input
                type="text"
                value={perfil.emergenciaParentesco}
                onChange={(e) => setPerfil({ ...perfil, emergenciaParentesco: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="font-bold block mb-1 text-slate-400">Teléfono de Contacto</label>
              <input
                type="text"
                value={perfil.emergenciaTelefono}
                onChange={(e) => setPerfil({ ...perfil, emergenciaTelefono: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => alert('Ficha personal actualizada.')}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2 rounded text-xs transition"
        >
          Guardar Expediente
        </button>
      </form>
    </div>
  );
}
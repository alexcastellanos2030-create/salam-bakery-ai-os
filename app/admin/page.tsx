'use client';

import { useState } from 'react';

interface PermisoBoton {
  id: string;
  nombreAccion: string;
  autorizado: boolean;
}

interface UsuarioCargo {
  id: string;
  nombre: string;
  cargo: string;
  permisos: PermisoBoton[];
}

export default function ControlPermisosAdminPage() {
  const [usuarios, setUsuarios] = useState<UsuarioCargo[]>([
    {
      id: 'USR-01',
      nombre: 'Alexander Castellanos',
      cargo: 'Administrador General',
      permisos: [
        { id: 'BTN_PROD_GUARDAR', nombreAccion: 'Registrar Batida', autorizado: true },
        { id: 'BTN_IMP_CONSOLIDADO', nombreAccion: 'Imprimir Consolidados', autorizado: true },
        { id: 'BTN_ETIQ_CREAR', nombreAccion: 'Generar Etiquetas', autorizado: true },
      ],
    },
    {
      id: 'USR-02',
      nombre: 'Carlos Mendoza',
      cargo: 'Jefe de Mezcla / Amasado',
      permisos: [
        { id: 'BTN_PROD_GUARDAR', nombreAccion: 'Registrar Batida', autorizado: true },
        { id: 'BTN_IMP_CONSOLIDADO', nombreAccion: 'Imprimir Consolidados', autorizado: false },
        { id: 'BTN_ETIQ_CREAR', nombreAccion: 'Generar Etiquetas', autorizado: false },
      ],
    },
  ]);

  const togglePermiso = (usuarioId: string, permisoId: string) => {
    setUsuarios(
      usuarios.map((u) => {
        if (u.id === usuarioId) {
          return {
            ...u,
            permisos: u.permisos.map((p) =>
              p.id === permisoId ? { ...p, autorizado: !p.autorizado } : p
            ),
          };
        }
        return u;
      })
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 text-xs text-slate-300">
      <header className="border-b border-slate-800 pb-4">
        <span className="bg-red-500/10 text-red-500 font-bold px-2.5 py-1 rounded-full border border-red-500/20">
          SOLO ACCESO ADMINISTRADOR
        </span>
        <h1 className="text-2xl font-black text-white mt-2">🛡️ Control Atómico de Permisos y Acciones</h1>
        <p className="text-slate-400">
          Autorización botón por botón asignada según el cargo y perfil del trabajador.
        </p>
      </header>

      <div className="space-y-4">
        {usuarios.map((u) => (
          <div key={u.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <div>
                <span className="font-bold text-white text-sm">{u.nombre}</span>
                <span className="text-slate-500 ml-2 font-mono">({u.cargo})</span>
              </div>
              <span className="text-amber-500 font-mono font-bold">{u.id}</span>
            </div>

            <p className="font-bold text-slate-400 uppercase text-[10px]">
              Botones y Funciones Autorizadas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {u.permisos.map((p) => (
                <div
                  key={p.id}
                  onClick={() => togglePermiso(u.id, p.id)}
                  className={`p-2.5 rounded-lg border cursor-pointer flex justify-between items-center transition ${
                    p.autorizado
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                      : 'bg-slate-950 border-slate-800 text-slate-500'
                  }`}
                >
                  <span className="font-medium">{p.nombreAccion}</span>
                  <span className="font-bold">{p.autorizado ? '✅ Autorizado' : '🚫 Bloqueado'}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
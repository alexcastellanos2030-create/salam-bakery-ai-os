'use client';

import { useState } from 'react';

// Tipos de permisos individuales por acción
interface ModulePermissions {
  ver: boolean;
  agregar: boolean;
  editar: boolean;
  eliminar: boolean;
  imprimir: boolean;
}

// Estructura de usuario con su mapa de permisos por módulo
interface UserProfile {
  id: string;
  name: string;
  role: string;
  permissions: {
    incidencias: ModulePermissions;
    avisos: ModulePermissions;
    impresion: ModulePermissions;
  };
}

export default function DashboardPage() {
  // Identificador de perfil activo para pruebas de vista
  const [activeUserId, setActiveUserId] = useState<string>('admin');

  // Base de datos de usuarios y permisos (Gestionada únicamente por el Admin)
  const [users, setUsers] = useState<UserProfile[]>([
    {
      id: 'admin',
      name: 'Alexander Segundo Castellanos Perozo',
      role: 'Administrador Único 👑',
      permissions: {
        incidencias: { ver: true, agregar: true, editar: true, eliminar: true, imprimir: true },
        avisos: { ver: true, agregar: true, editar: true, eliminar: true, imprimir: true },
        impresion: { ver: true, agregar: true, editar: true, eliminar: true, imprimir: true },
      },
    },
    {
      id: 'operador-1',
      name: 'Carlos (Maestro Panadero)',
      role: 'Jefe de Planta',
      permissions: {
        incidencias: { ver: true, agregar: true, editar: false, eliminar: false, imprimir: true },
        avisos: { ver: true, agregar: true, editar: false, eliminar: false, imprimir: false },
        impresion: { ver: true, agregar: false, editar: false, eliminar: false, imprimir: true },
      },
    },
    {
      id: 'cajero-1',
      name: 'María (Atención al Cliente)',
      role: 'Cajera',
      permissions: {
        incidencias: { ver: true, agregar: false, editar: false, eliminar: false, imprimir: false },
        avisos: { ver: true, agregar: false, editar: false, eliminar: false, imprimir: false },
        impresion: { ver: true, agregar: false, editar: false, eliminar: false, imprimir: true },
      },
    },
  ]);

  // Usuario actualmente simulando en pantalla
  const currentUser = users.find((u) => u.id === activeUserId) || users[0];
  const isAdmin = currentUser.id === 'admin';

  // Estados de interfaz
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    matrizPermisos: true,
    incidencias: true,
    avisos: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Función para que el Admin cambie un permiso a cualquier usuario
  const handleTogglePermission = (
    userId: string,
    moduleKey: 'incidencias' | 'avisos' | 'impresion',
    actionKey: keyof ModulePermissions
  ) => {
    if (!isAdmin) return; // Restricción de seguridad

    setUsers((prevUsers) =>
      prevUsers.map((u) => {
        if (u.id !== userId) return u;
        return {
          ...u,
          permissions: {
            ...u.permissions,
            [moduleKey]: {
              ...u.permissions[moduleKey],
              [actionKey]: !u.permissions[moduleKey][actionKey],
            },
          },
        };
      })
    );
  };

  // Función universal de impresión condicional
  const handlePrint = (title: string, allowed: boolean) => {
    if (!allowed) {
      alert('No tienes permiso para imprimir este documento.');
      return;
    }
    window.print();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 print:p-0">
      {/* Encabezado y Selector de Vista de Usuario */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-5 print:hidden">
        <div>
          <h1 className="text-3xl font-black text-amber-500">Alex Bakery AI-OS</h1>
          <p className="text-slate-400 text-sm">Sistema de Control Operativo y Permisos Dinámicos</p>
        </div>

        {/* Simulación de Usuario Activo */}
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2 rounded-xl">
          <span className="text-xs text-slate-400 font-medium">Ver sistema como:</span>
          <select
            value={activeUserId}
            onChange={(e) => setActiveUserId(e.target.value)}
            className="bg-slate-950 text-amber-400 border border-slate-800 font-bold text-xs rounded-lg p-1.5 focus:outline-none"
          >
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name} ({u.role})
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* 👑 MÓDULO EXCLUSIVO DEL ADMIN: MATRIZ CONFIGURADORA DE PERMISOS */}
      {isAdmin && (
        <div className="bg-slate-900 border border-amber-500/40 rounded-xl overflow-hidden print:hidden shadow-lg shadow-amber-500/5">
          <button
            onClick={() => toggleSection('matrizPermisos')}
            className="w-full p-4 flex justify-between items-center text-left bg-slate-900 hover:bg-slate-800/50 transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-amber-500 font-bold text-xl">🛡️</span>
              <div>
                <h2 className="font-bold text-white text-lg">Panel Administrador: Otorgar Permisos de Botones</h2>
                <p className="text-xs text-amber-400/80">Solo tú puedes activar o desactivar opciones para el personal</p>
              </div>
            </div>
            <span className="text-slate-400">{openSections.matrizPermisos ? '▲' : '▼'}</span>
          </button>

          {openSections.matrizPermisos && (
            <div className="p-4 border-t border-slate-800 bg-slate-950/60 overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-amber-400 border-b border-slate-800 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Usuario / Personal</th>
                    <th className="p-3">Módulo</th>
                    <th className="p-3 text-center">👁️ Solo Ver</th>
                    <th className="p-3 text-center">➕ Agregar</th>
                    <th className="p-3 text-center">✏️ Editar</th>
                    <th className="p-3 text-center">🗑️ Eliminar</th>
                    <th className="p-3 text-center">🖨️ Imprimir</th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    .filter((u) => u.id !== 'admin')
                    .map((user) => (
                      (['incidencias', 'avisos', 'impresion'] as const).map((modKey) => (
                        <tr key={`${user.id}-${modKey}`} className="border-b border-slate-800/40 hover:bg-slate-900/40">
                          <td className="p-3 font-bold text-white">
                            {user.name} <span className="text-slate-500 text-[10px] block">{user.role}</span>
                          </td>
                          <td className="p-3 capitalize font-semibold text-amber-500/90">{modKey}</td>
                          {(['ver', 'agregar', 'editar', 'eliminar', 'imprimir'] as keyof ModulePermissions[]).map((action) => {
                            const isChecked = user.permissions[modKey][action as keyof ModulePermissions];
                            return (
                              <td key={action} className="p-3 text-center">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleTogglePermission(user.id, modKey, action as keyof ModulePermissions)}
                                  className="w-4 h-4 accent-amber-500 cursor-pointer rounded"
                                />
                              </td>
                            );
                          })}
                        </tr>
                      ))
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* 📋 SUBMÓDULO: INCIDENCIAS DE CIERRE DE TURNO */}
      {currentUser.permissions.incidencias.ver ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden print:hidden">
          <button
            onClick={() => toggleSection('incidencias')}
            className="w-full p-4 flex justify-between items-center text-left bg-slate-900 hover:bg-slate-800/50 transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-amber-500 font-bold">📋</span>
              <h2 className="font-bold text-white text-lg">Incidencias de Cierre de Turno</h2>
            </div>
            <span className="text-slate-400">{openSections.incidencias ? '▲' : '▼'}</span>
          </button>

          {openSections.incidencias && (
            <div className="p-4 border-t border-slate-800 bg-slate-950/50 space-y-4">
              {/* Botones de acción general según permisos */}
              <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-800">
                {currentUser.permissions.incidencias.agregar && (
                  <button className="bg-amber-500 text-black px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-amber-400 transition">
                    ➕ Nueva Incidencia
                  </button>
                )}
                {currentUser.permissions.incidencias.imprimir && (
                  <button
                    onClick={() => handlePrint('Incidencias', true)}
                    className="bg-slate-800 text-amber-400 border border-amber-500/30 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-700 transition"
                  >
                    🖨️ Imprimir Reporte
                  </button>
                )}
              </div>

              {/* Registro de Incidencia con sus propios botones de acción */}
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div>
                  <span className="text-xs text-amber-400 font-bold">Turno Tarde - Maquinaria</span>
                  <p className="text-sm text-slate-200 mt-1">
                    Falla de temperatura leve en el Horno Rotativo #1 durante el último horneado.
                  </p>
                </div>

                <div className="flex gap-1.5 self-end md:self-auto">
                  {currentUser.permissions.incidencias.ver && (
                    <button className="bg-slate-800 text-slate-300 text-[11px] px-2.5 py-1 rounded font-bold border border-slate-700 hover:bg-slate-700">
                      👁️ Ver
                    </button>
                  )}
                  {currentUser.permissions.incidencias.editar && (
                    <button className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[11px] px-2.5 py-1 rounded font-bold hover:bg-blue-500/30">
                      ✏️ Editar
                    </button>
                  )}
                  {currentUser.permissions.incidencias.eliminar && (
                    <button className="bg-red-500/20 text-red-400 border border-red-500/30 text-[11px] px-2.5 py-1 rounded font-bold hover:bg-red-500/30">
                      🗑️ Eliminar
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-xl text-center text-xs text-slate-500">
          🔒 No tienes permiso para visualizar el Módulo de Incidencias.
        </div>
      )}

      {/* 📢 MÓDULO: TABLÓN DE AVISOS Y COMUNICACIÓN */}
      {currentUser.permissions.avisos.ver ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden print:hidden">
          <button
            onClick={() => toggleSection('avisos')}
            className="w-full p-4 flex justify-between items-center text-left bg-slate-900 hover:bg-slate-800/50 transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-amber-500 font-bold">📢</span>
              <h2 className="font-bold text-white text-lg">Mural de Avisos e Interacción</h2>
            </div>
            <span className="text-slate-400">{openSections.avisos ? '▲' : '▼'}</span>
          </button>

          {openSections.avisos && (
            <div className="p-4 border-t border-slate-800 bg-slate-950/50 space-y-4">
              {currentUser.permissions.avisos.agregar && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Escribe un mensaje o solicitud..."
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                  <button className="bg-amber-500 text-black px-4 py-2 rounded-lg text-xs font-bold hover:bg-amber-400 transition">
                    ➕ Agregar Mensaje
                  </button>
                </div>
              )}

              <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <span className="text-xs text-amber-400 font-bold">Carlos (Hornero)</span>
                  <p className="text-xs text-slate-300 mt-1">Llegada de materia prima programada para el lunes a las 7:00 AM.</p>
                </div>

                <div className="flex gap-1.5">
                  {currentUser.permissions.avisos.editar && (
                    <button className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] px-2 py-1 rounded font-bold">
                      ✏️ Editar
                    </button>
                  )}
                  {currentUser.permissions.avisos.eliminar && (
                    <button className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] px-2 py-1 rounded font-bold">
                      🗑️ Eliminar
                    </button>
                  )}
                  {currentUser.permissions.avisos.imprimir && (
                    <button
                      onClick={() => handlePrint('Aviso', true)}
                      className="bg-slate-800 text-amber-400 border border-amber-500/30 text-[10px] px-2 py-1 rounded font-bold"
                    >
                      🖨️ Imprimir
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-xl text-center text-xs text-slate-500">
          🔒 No tienes permiso para visualizar el Mural de Avisos.
        </div>
      )}
    </div>
  );
}
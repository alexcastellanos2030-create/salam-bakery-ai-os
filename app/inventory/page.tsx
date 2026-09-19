'use client';

import { useState } from 'react';

// Estructura Atómica de Permisos (Categorizados por Operaciones)
interface AtomicPermissions {
  // 1. Gestión de Usuarios y Accesos
  crearUsuario: boolean;
  editarUsuario: boolean;
  eliminarUsuario: boolean;
  asignarCargos: boolean;

  // 2. Producción y Masas
  verConsolidadoBatida: boolean;
  imprimirConsolidadoBatida: boolean;
  aprobarFormulaBatida: boolean;

  // 3. Empaque, Cestas y Unidades
  verConsolidadoEmpaqueCantidad: boolean;
  imprimirConsolidadoEmpaqueCantidad: boolean;
  verConsolidadoBolsasCestas: boolean;
  imprimirConsolidadoBolsasCestas: boolean;

  // 4. Pedidos y Ventas
  verConsolidadoPedidos: boolean;
  imprimirConsolidadoPedidos: boolean;
  autorizarDescuentoPedido: boolean;

  // 5. Logística, Entregas y Vehículos
  verConsolidadoEntrega: boolean;
  imprimirConsolidadoEntrega: boolean;
  definirRutasVehiculos: boolean;
  imprimirHojaRutaVehiculo: boolean;

  // 6. Reportes e Imágenes
  imprimirFormatoGenerico: boolean;
  imprimirRelacionOperativa: boolean;
  imprimirReporteEjecutivo: boolean;
  capturarImprimirImagenModulo: boolean;
}

// Estructura de Perfil de Personal
interface UserRoleProfile {
  id: string;
  name: string;
  cargo: string;
  permissions: AtomicPermissions;
}

export default function DashboardPage() {
  // Estado para simular la vista activa (Admin u Operador)
  const [activeUserId, setActiveUserId] = useState<string>('admin');

  // Base de datos de Personal y Permisos Granulares
  const [roleProfiles, setRoleProfiles] = useState<UserRoleProfile[]>([
    {
      id: 'admin',
      name: 'Alexander Segundo Castellanos Perozo',
      cargo: 'Administrador Único 👑',
      permissions: {
        crearUsuario: true, editarUsuario: true, eliminarUsuario: true, asignarCargos: true,
        verConsolidadoBatida: true, imprimirConsolidadoBatida: true, aprobarFormulaBatida: true,
        verConsolidadoEmpaqueCantidad: true, imprimirConsolidadoEmpaqueCantidad: true,
        verConsolidadoBolsasCestas: true, imprimirConsolidadoBolsasCestas: true,
        verConsolidadoPedidos: true, imprimirConsolidadoPedidos: true, autorizarDescuentoPedido: true,
        verConsolidadoEntrega: true, imprimirConsolidadoEntrega: true, definirRutasVehiculos: true, imprimirHojaRutaVehiculo: true,
        imprimirFormatoGenerico: true, imprimirRelacionOperativa: true, imprimirReporteEjecutivo: true, capturarImprimirImagenModulo: true,
      },
    },
    {
      id: 'jefe-produccion',
      name: 'Carlos Mendoza',
      cargo: 'Jefe de Producción y Masas',
      permissions: {
        crearUsuario: false, editarUsuario: false, eliminarUsuario: false, asignarCargos: false,
        verConsolidadoBatida: true, imprimirConsolidadoBatida: true, aprobarFormulaBatida: true,
        verConsolidadoEmpaqueCantidad: true, imprimirConsolidadoEmpaqueCantidad: false,
        verConsolidadoBolsasCestas: false, imprimirConsolidadoBolsasCestas: false,
        verConsolidadoPedidos: true, imprimirConsolidadoPedidos: false, autorizarDescuentoPedido: false,
        verConsolidadoEntrega: false, imprimirConsolidadoEntrega: false, definirRutasVehiculos: false, imprimirHojaRutaVehiculo: false,
        imprimirFormatoGenerico: true, imprimirRelacionOperativa: true, imprimirReporteEjecutivo: false, capturarImprimirImagenModulo: true,
      },
    },
    {
      id: 'jefe-despacho',
      name: 'Luis Alarcón',
      cargo: 'Jefe de Logística y Repartidores',
      permissions: {
        crearUsuario: false, editarUsuario: false, eliminarUsuario: false, asignarCargos: false,
        verConsolidadoBatida: false, imprimirConsolidadoBatida: false, aprobarFormulaBatida: false,
        verConsolidadoEmpaqueCantidad: true, imprimirConsolidadoEmpaqueCantidad: true,
        verConsolidadoBolsasCestas: true, imprimirConsolidadoBolsasCestas: true,
        verConsolidadoPedidos: true, imprimirConsolidadoPedidos: true, autorizarDescuentoPedido: false,
        verConsolidadoEntrega: true, imprimirConsolidadoEntrega: true, definirRutasVehiculos: true, imprimirHojaRutaVehiculo: true,
        imprimirFormatoGenerico: true, imprimirRelacionOperativa: true, imprimirReporteEjecutivo: false, capturarImprimirImagenModulo: true,
      },
    },
  ]);

  const currentUser = roleProfiles.find((u) => u.id === activeUserId) || roleProfiles[0];
  const isAdmin = currentUser.id === 'admin';

  // Cambiar permiso de un botón específico (Exclusivo para el Admin)
  const toggleAtomicPermission = (profileId: string, permKey: keyof AtomicPermissions) => {
    if (!isAdmin) return;
    setRoleProfiles((prev) =>
      prev.map((profile) => {
        if (profile.id !== profileId) return profile;
        return {
          ...profile,
          permissions: {
            ...profile.permissions,
            [permKey]: !profile.permissions[permKey],
          },
        };
      })
    );
  };

  // Función de impresión con validación atómica
  const executeAtomicPrint = (documentName: string, hasPermission: boolean) => {
    if (!hasPermission) {
      alert(`⚠️ ACCESO DENEGADO: Tu cargo (${currentUser.cargo}) no tiene permiso para imprimir: ${documentName}`);
      return;
    }
    window.print();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 print:p-0">
      {/* Selector de Cargo para Pruebas */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-5 print:hidden">
        <div>
          <h1 className="text-3xl font-black text-amber-500">Alex Bakery AI-OS</h1>
          <p className="text-slate-400 text-sm">Matriz Atómica de Permisos y Control por Cargos</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2 rounded-xl">
          <span className="text-xs text-slate-400 font-medium">Simular Vista por Cargo:</span>
          <select
            value={activeUserId}
            onChange={(e) => setActiveUserId(e.target.value)}
            className="bg-slate-950 text-amber-400 border border-slate-800 font-bold text-xs rounded-lg p-1.5 focus:outline-none"
          >
            {roleProfiles.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — [{p.cargo}]
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* 👑 MATRIZ CENTRAL DE PERMISOS ATÓMICOS (SOLO VISIBLE/MODIFICABLE POR EL ADMINISTRADOR) */}
      {isAdmin ? (
        <section className="bg-slate-900 border border-amber-500/40 rounded-xl p-5 space-y-6 print:hidden">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🛡️</span> Matriz de Autorizaciones por Cargo
              </h2>
              <p className="text-xs text-slate-400">Activa o desactiva cada botón y formato según las funciones exactas del trabajador.</p>
            </div>
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs px-3 py-1 rounded-full font-bold">
              Panel del Administrador Único
            </span>
          </div>

          <div className="space-y-6">
            {roleProfiles
              .filter((p) => p.id !== 'admin')
              .map((profile) => (
                <div key={profile.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
                    <span className="font-bold text-white text-sm">
                      {profile.name} <span className="text-amber-500">({profile.cargo})</span>
                    </span>
                  </div>

                  {/* Bloques de Permisos Organizados */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                    {/* Bloque 1: Usuarios */}
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2">
                      <span className="font-bold text-slate-400 block border-b border-slate-800 pb-1">👥 Usuarios y Sistema</span>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.crearUsuario} onChange={() => toggleAtomicPermission(profile.id, 'crearUsuario')} className="accent-amber-500" />
                        Agregar Nuevo Usuario
                      </label>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.editarUsuario} onChange={() => toggleAtomicPermission(profile.id, 'editarUsuario')} className="accent-amber-500" />
                        Editar Datos de Usuario
                      </label>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.eliminarUsuario} onChange={() => toggleAtomicPermission(profile.id, 'eliminarUsuario')} className="accent-amber-500" />
                        Eliminar Usuario
                      </label>
                    </div>

                    {/* Bloque 2: Batidas y Producción */}
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2">
                      <span className="font-bold text-slate-400 block border-b border-slate-800 pb-1">🥣 Batidas y Producción</span>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.verConsolidadoBatida} onChange={() => toggleAtomicPermission(profile.id, 'verConsolidadoBatida')} className="accent-amber-500" />
                        Ver Consolidado de Batida
                      </label>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.imprimirConsolidadoBatida} onChange={() => toggleAtomicPermission(profile.id, 'imprimirConsolidadoBatida')} className="accent-amber-500" />
                        🖨️ Imprimir Consolidado de Batida
                      </label>
                    </div>

                    {/* Bloque 3: Empaque, Cestas y Bolsas */}
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2">
                      <span className="font-bold text-slate-400 block border-b border-slate-800 pb-1">📦 Empaque y Cestas</span>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.imprimirConsolidadoEmpaqueCantidad} onChange={() => toggleAtomicPermission(profile.id, 'imprimirConsolidadoEmpaqueCantidad')} className="accent-amber-500" />
                        🖨️ Empaque por Cantidad de Producto
                      </label>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.imprimirConsolidadoBolsasCestas} onChange={() => toggleAtomicPermission(profile.id, 'imprimirConsolidadoBolsasCestas')} className="accent-amber-500" />
                        🖨️ Consolidado por Bolsas y Cestas
                      </label>
                    </div>

                    {/* Bloque 4: Entregas y Vehículos */}
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2">
                      <span className="font-bold text-slate-400 block border-b border-slate-800 pb-1">🚚 Logística y Vehículos</span>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.imprimirConsolidadoEntrega} onChange={() => toggleAtomicPermission(profile.id, 'imprimirConsolidadoEntrega')} className="accent-amber-500" />
                        🖨️ Consolidado de Entrega
                      </label>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.definirRutasVehiculos} onChange={() => toggleAtomicPermission(profile.id, 'definirRutasVehiculos')} className="accent-amber-500" />
                        Definir Rutas de Vehículos
                      </label>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.imprimirHojaRutaVehiculo} onChange={() => toggleAtomicPermission(profile.id, 'imprimirHojaRutaVehiculo')} className="accent-amber-500" />
                        🖨️ Hoja de Ruta de Repartidores
                      </label>
                    </div>

                    {/* Bloque 5: Formatos e Imágenes */}
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2">
                      <span className="font-bold text-slate-400 block border-b border-slate-800 pb-1">🖼️ Formatos e Imágenes</span>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.imprimirFormatoGenerico} onChange={() => toggleAtomicPermission(profile.id, 'imprimirFormatoGenerico')} className="accent-amber-500" />
                        🖨️ Imprimir Formato Generico
                      </label>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.imprimirRelacionOperativa} onChange={() => toggleAtomicPermission(profile.id, 'imprimirRelacionOperativa')} className="accent-amber-500" />
                        🖨️ Imprimir Relación Operativa
                      </label>
                      <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                        <input type="checkbox" checked={profile.permissions.capturarImprimirImagenModulo} onChange={() => toggleAtomicPermission(profile.id, 'capturarImprimirImagenModulo')} className="accent-amber-500" />
                        📸 Imprimir Imagen de Módulo
                      </label>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ) : (
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-xs text-amber-400">
          ℹ️ Modo Vista Operativa: Estás navegando con el cargo <strong>{currentUser.cargo}</strong>. Los botones habilitados a continuación responden a las autorizaciones concedidas por el Administrador Único.
        </div>
      )}

      {/* 🖨️ CENTRAL DE DOCUMENTOS Y BOTONES SEGÚN EL CARGO SIMULADO */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span>🖨️</span> Consolidados, Formatos e Impresión
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Botón Batida */}
          <button
            onClick={() => executeAtomicPrint('Consolidado de Batida', currentUser.permissions.imprimirConsolidadoBatida)}
            className={`p-3 rounded-lg border text-left text-xs font-bold transition flex justify-between items-center ${
              currentUser.permissions.imprimirConsolidadoBatida
                ? 'bg-slate-900 border-amber-500/40 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-950 border-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            <span>🥣 Consolidado de Batida</span>
            <span>{currentUser.permissions.imprimirConsolidadoBatida ? '🖨️' : '🔒'}</span>
          </button>

          {/* Botón Empaque por Cantidad */}
          <button
            onClick={() => executeAtomicPrint('Empaque por Cantidad', currentUser.permissions.imprimirConsolidadoEmpaqueCantidad)}
            className={`p-3 rounded-lg border text-left text-xs font-bold transition flex justify-between items-center ${
              currentUser.permissions.imprimirConsolidadoEmpaqueCantidad
                ? 'bg-slate-900 border-amber-500/40 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-950 border-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            <span>📦 Empaque por Cantidad</span>
            <span>{currentUser.permissions.imprimirConsolidadoEmpaqueCantidad ? '🖨️' : '🔒'}</span>
          </button>

          {/* Botón Bolsas y Cestas */}
          <button
            onClick={() => executeAtomicPrint('Consolidado Bolsas y Cestas', currentUser.permissions.imprimirConsolidadoBolsasCestas)}
            className={`p-3 rounded-lg border text-left text-xs font-bold transition flex justify-between items-center ${
              currentUser.permissions.imprimirConsolidadoBolsasCestas
                ? 'bg-slate-900 border-amber-500/40 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-950 border-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            <span>🧺 Bolsas y Cestas</span>
            <span>{currentUser.permissions.imprimirConsolidadoBolsasCestas ? '🖨️' : '🔒'}</span>
          </button>

          {/* Botón Consolidado de Entrega */}
          <button
            onClick={() => executeAtomicPrint('Consolidado de Entrega', currentUser.permissions.imprimirConsolidadoEntrega)}
            className={`p-3 rounded-lg border text-left text-xs font-bold transition flex justify-between items-center ${
              currentUser.permissions.imprimirConsolidadoEntrega
                ? 'bg-slate-900 border-amber-500/40 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-950 border-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            <span>📋 Consolidado de Entrega</span>
            <span>{currentUser.permissions.imprimirConsolidadoEntrega ? '🖨️' : '🔒'}</span>
          </button>

          {/* Botón Rutas de Vehículos */}
          <button
            onClick={() => executeAtomicPrint('Rutas de Vehículos Repartidores', currentUser.permissions.imprimirHojaRutaVehiculo)}
            className={`p-3 rounded-lg border text-left text-xs font-bold transition flex justify-between items-center ${
              currentUser.permissions.imprimirHojaRutaVehiculo
                ? 'bg-slate-900 border-amber-500/40 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-950 border-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            <span>🚚 Rutas de Repartidores</span>
            <span>{currentUser.permissions.imprimirHojaRutaVehiculo ? '🖨️' : '🔒'}</span>
          </button>

          {/* Botón Capturar Imagen de Módulo */}
          <button
            onClick={() => executeAtomicPrint('Imagen de Módulo', currentUser.permissions.capturarImprimirImagenModulo)}
            className={`p-3 rounded-lg border text-left text-xs font-bold transition flex justify-between items-center ${
              currentUser.permissions.capturarImprimirImagenModulo
                ? 'bg-slate-900 border-amber-500/40 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-950 border-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            <span>📸 Imagen del Módulo</span>
            <span>{currentUser.permissions.capturarImprimirImagenModulo ? '🖨️' : '🔒'}</span>
          </button>
        </div>
      </section>
    </div>
  );
}
'use client';

import { useState } from 'react';

interface Notice {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  approved: boolean;
}

export default function DashboardPage() {
  // Control de Rol Estricto: Solo 'admin' puede autorizar o eliminar
  const [userRole, setUserRole] = useState<'admin' | 'operador'>('admin');
  const isAdmin = userRole === 'admin';

  // Secciones abiertas
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    impresion: true,
    avisos: true,
  });

  // Lista de Avisos y Permisos
  const [notices, setNotices] = useState<Notice[]>([
    {
      id: '1',
      author: 'Carlos (Hornero)',
      content: 'Solicitud de permiso: Salida anticipada el Viernes a las 4:00 PM.',
      createdAt: 'Hoy, 09:00 AM',
      approved: false,
    },
  ]);
  const [newNotice, setNewNotice] = useState('');

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Agregar solicitud o mensaje
  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNotice.trim()) return;

    setNotices([
      {
        id: Date.now().toString(),
        author: isAdmin ? 'Administrador' : 'Operador de Planta',
        content: newNotice,
        createdAt: 'Ahora mismo',
        approved: isAdmin, // Solo el admin se auto-aprueba
      },
      ...notices,
    ]);
    setNewNotice('');
  };

  // Funciones Restringidas EXCLUSIVAS del Administrador
  const handleApprove = (id: string) => {
    if (!isAdmin) return;
    setNotices(notices.map((n) => (n.id === id ? { ...n, approved: true } : n)));
  };

  const handleDelete = (id: string) => {
    if (!isAdmin) return;
    setNotices(notices.filter((n) => n.id !== id));
  };

  // Función de Impresión Universal de Documentos y Etiquetas
  const handlePrintDocument = (docType: string) => {
    window.print();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 print:p-0 print:bg-white print:text-black">
      {/* Selector de Rol y Encabezado (Oculto al imprimir) */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-5 print:hidden">
        <div>
          <h1 className="text-3xl font-black text-amber-500">Alex Bakery AI-OS</h1>
          <p className="text-slate-400 text-sm">Control Directivo, Impresión y Autorizaciones</p>
        </div>

        {/* Switch de Seguridad de Rol */}
        <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setUserRole('operador')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              !isAdmin ? 'bg-amber-500 text-black' : 'text-slate-400'
            }`}
          >
            Vista Operador
          </button>
          <button
            onClick={() => setUserRole('admin')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              isAdmin ? 'bg-amber-500 text-black' : 'text-slate-400'
            }`}
          >
            Administrador (Acceso Total) 🔑
          </button>
        </div>
      </header>

      {/* 1. MÓDULO DE IMPRESIÓN DIRECTA (Documentos, Formatos y Etiquetas) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden print:hidden">
        <button
          onClick={() => toggleSection('impresion')}
          className="w-full p-4 flex justify-between items-center text-left bg-slate-900 hover:bg-slate-800/50 transition"
        >
          <div className="flex items-center gap-3">
            <span className="text-amber-500 font-bold">🖨️</span>
            <h2 className="font-bold text-white text-lg">Central de Impresión de Documentos y Etiquetas</h2>
          </div>
          <span className="text-slate-400">{openSections.impresion ? '▲' : '▼'}</span>
        </button>

        {openSections.impresion && (
          <div className="p-4 border-t border-slate-800 bg-slate-950/50 space-y-4">
            <p className="text-xs text-slate-400">
              Compatible con impresoras térmicas (POS), impresoras de etiquetas de código de barras e impresoras estándar de oficina.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <button
                onClick={() => handlePrintDocument('Comanda de Hornada')}
                className="bg-slate-900 hover:border-amber-500 border border-slate-800 p-3 rounded-lg text-left transition"
              >
                <span className="block text-xs font-bold text-amber-400">📄 Orden de Horneado</span>
                <span className="text-[11px] text-slate-400">Formato para cocina/horno</span>
              </button>

              <button
                onClick={() => handlePrintDocument('Etiquetas de Lote')}
                className="bg-slate-900 hover:border-amber-500 border border-slate-800 p-3 rounded-lg text-left transition"
              >
                <span className="block text-xs font-bold text-amber-400">🏷️ Etiquetas de Producto</span>
                <span className="text-[11px] text-slate-400">Fecha de empaque y vencimiento</span>
              </button>

              <button
                onClick={() => handlePrintDocument('Ticket de Cierre')}
                className="bg-slate-900 hover:border-amber-500 border border-slate-800 p-3 rounded-lg text-left transition"
              >
                <span className="block text-xs font-bold text-amber-400">🧾 Ticket Cierre de Caja</span>
                <span className="text-[11px] text-slate-400">Resumen térmico para dueños</span>
              </button>

              <button
                onClick={() => handlePrintDocument('Reporte Personal')}
                className="bg-slate-900 hover:border-amber-500 border border-slate-800 p-3 rounded-lg text-left transition"
              >
                <span className="block text-xs font-bold text-amber-400">📊 Reporte de Asistencia</span>
                <span className="text-[11px] text-slate-400">Hoja de novedades e incidencias</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 2. MÓDULO DE AUTORIZACIONES (Exclusivo Administrador) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden print:hidden">
        <button
          onClick={() => toggleSection('avisos')}
          className="w-full p-4 flex justify-between items-center text-left bg-slate-900 hover:bg-slate-800/50 transition"
        >
          <div className="flex items-center gap-3">
            <span className="text-amber-500 font-bold">🛡️</span>
            <h2 className="font-bold text-white text-lg">Solicitudes y Autorizaciones del Administrador</h2>
          </div>
          <span className="text-slate-400">{openSections.avisos ? '▲' : '▼'}</span>
        </button>

        {openSections.avisos && (
          <div className="p-4 border-t border-slate-800 bg-slate-950/50 space-y-4">
            <form onSubmit={handleAddNotice} className="flex gap-2">
              <input
                type="text"
                value={newNotice}
                onChange={(e) => setNewNotice(e.target.value)}
                placeholder="Solicitar permiso, insumos o publicar aviso..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-4 rounded-lg transition"
              >
                Enviar Solicitud
              </button>
            </form>

            <div className="space-y-3">
              {notices.map((n) => (
                <div
                  key={n.id}
                  className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-400">{n.author}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        n.approved ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {n.approved ? 'Aprobado por Admin' : 'Pendiente de Autorización'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">{n.content}</p>
                  </div>

                  {/* Botones con Control de Acceso Directo */}
                  <div className="flex gap-2">
                    {!n.approved && (
                      <button
                        onClick={() => handleApprove(n.id)}
                        disabled={!isAdmin}
                        className={`text-xs px-3 py-1 rounded font-bold border transition ${
                          isAdmin
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30'
                            : 'bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed'
                        }`}
                        title={!isAdmin ? 'Solo el Administrador puede autorizar' : ''}
                      >
                        ✓ Autorizar
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(n.id)}
                      disabled={!isAdmin}
                      className={`text-xs px-3 py-1 rounded font-bold border transition ${
                        isAdmin
                          ? 'bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30'
                          : 'bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed'
                      }`}
                      title={!isAdmin ? 'Solo el Administrador puede eliminar' : ''}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [productoAbierto, setProductoAbierto] = useState(true);
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen p-4 flex flex-col justify-between text-xs print:hidden fixed left-0 top-0 bottom-0 z-50">
      <div className="space-y-6">
        {/* LOGO BRANDING */}
        <div className="border-b border-slate-800 pb-4">
          <Link href="/" className="text-xl font-black text-yellow-400 tracking-wider">
            ALEX BAKERY <span className="text-white text-xs font-normal block">AI-OS System</span>
          </Link>
        </div>

        {/* NAVEGACIÓN PRINCIPAL */}
        <nav className="space-y-1">
          <Link
            href="/"
            className={`flex items-center gap-2 p-2.5 rounded-lg font-bold transition ${
              pathname === '/' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            📊 Dashboard Principal
          </Link>

          <Link
            href="/produccion"
            className={`flex items-center gap-2 p-2.5 rounded-lg font-bold transition ${
              pathname === '/produccion' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            🥣 Producción y Trazabilidad
          </Link>

          {/* MÓDULO CON SUBMÓDULOS DESPLEGABLES */}
          <div className="space-y-1">
            <button
              onClick={() => setProductoAbierto(!productoAbierto)}
              className="w-full flex items-center justify-between p-2.5 rounded-lg font-bold text-slate-300 hover:bg-slate-800 transition"
            >
              <span className="flex items-center gap-2">📦 Información de Producto</span>
              <span>{productoAbierto ? '▾' : '▸'}</span>
            </button>

            {productoAbierto && (
              <div className="pl-4 space-y-1 border-l-2 border-yellow-400/40 ml-2">
                <Link
                  href="/producto/ficha-tecnica"
                  className={`block p-2 rounded font-medium transition ${
                    pathname === '/producto/ficha-tecnica'
                      ? 'text-yellow-400 font-bold bg-slate-800'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  📋 Ficha Técnica (Hoja Carta)
                </Link>
                <Link
                  href="/producto/ficha-receta"
                  className={`block p-2 rounded font-medium transition ${
                    pathname === '/producto/ficha-receta'
                      ? 'text-yellow-400 font-bold bg-slate-800'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  📖 Ficha de Receta
                </Link>
                <Link
                  href="/producto/etiqueta"
                  className={`block p-2 rounded font-medium transition ${
                    pathname === '/producto/etiqueta'
                      ? 'text-yellow-400 font-bold bg-slate-800'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🏷️ Etiquetas por Empaque
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/impresion"
            className={`flex items-center gap-2 p-2.5 rounded-lg font-bold transition ${
              pathname === '/impresion' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            🖨️ Impresión y Consolidados
          </Link>

          <Link
            href="/perfil"
            className={`flex items-center gap-2 p-2.5 rounded-lg font-bold transition ${
              pathname === '/perfil' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            👤 Ficha Datos Personales
          </Link>

          <Link
            href="/admin/permisos"
            className={`flex items-center gap-2 p-2.5 rounded-lg font-bold transition ${
              pathname === '/admin/permisos' ? 'bg-yellow-400 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            🛡️ Control de Permisos Admin
          </Link>
        </nav>
      </div>

      <div className="border-t border-slate-800 pt-3 text-[10px] text-slate-500">
        Alex Bakery AI-OS v2.0
      </div>
    </aside>
  );
}
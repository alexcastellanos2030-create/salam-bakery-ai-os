'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  if (pathname === '/login') return null;

  const [seccionOperacion, setSeccionOperacion] = useState(true);
  const [seccionAbastecimiento, setSeccionAbastecimiento] = useState(true);
  const [seccionSeguridad, setSeccionSeguridad] = useState(true);

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800/80 min-h-screen p-3 flex flex-col justify-between font-sans text-xs text-slate-300 relative z-40 select-none shadow-2xl">
      <div className="space-y-4">
        {/* LOGO */}
        <div className="flex justify-between items-center px-2 pt-1 border-b border-slate-800/60 pb-3">
          <div>
            <h1 className="text-lg font-black italic tracking-wider text-amber-400 uppercase">
              ALEX BAKERY
            </h1>
            <p className="text-[9px] font-mono tracking-widest text-slate-500 uppercase font-bold">
              PLATAFORMA AI-OS
            </p>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#f59e0b]" />
        </div>

        {/* USUARIO EN EL TOPO */}
        <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center font-bold text-amber-400 font-mono text-xs">
              AC
            </div>
            <div>
              <p className="font-bold text-white text-[11px] leading-tight">Alex Castellanos</p>
              <p className="text-[9px] font-mono text-amber-400 uppercase font-bold tracking-wider">
                SUPER USUARIO
              </p>
            </div>
          </div>
        </div>

        {/* NAVEGACIÓN Y SUBMÓDULOS */}
        <nav className="space-y-3">
          
          {/* SECCIÓN OPERACIÓN */}
          <div className="space-y-1">
            <button
              onClick={() => setSeccionOperacion(!seccionOperacion)}
              className="w-full flex items-center justify-between px-2 py-1 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase hover:text-slate-300 transition"
            >
              <span>OPERACIÓN</span>
              <span className="text-[8px]">{seccionOperacion ? '▲' : '▼'}</span>
            </button>

            {seccionOperacion && (
              <div className="space-y-1 pl-1">
                <Link
                  href="/produccion"
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-bold transition text-xs ${
                    pathname.startsWith('/produccion') || pathname === '/'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span>🥣</span>
                  <span className="uppercase">PLANTA</span>
                </Link>

                <Link
                  href="/empaque"
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-bold transition text-xs ${
                    pathname === '/empaque'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span>📦</span>
                  <span className="uppercase">EMPAQUE</span>
                </Link>

                <Link
                  href="/entregas"
                  className={`flex items-center justify-between px-2.5 py-2 rounded-xl font-bold transition text-xs ${
                    pathname === '/entregas'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span>🚚</span>
                    <span className="uppercase">ENTREGAS</span>
                  </div>
                  <span className="bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded font-mono text-[9px] font-black">
                    4
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* SECCIÓN ABASTECIMIENTO */}
          <div className="space-y-1">
            <button
              onClick={() => setSeccionAbastecimiento(!seccionAbastecimiento)}
              className="w-full flex items-center justify-between px-2 py-1 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase hover:text-slate-300 transition"
            >
              <span>ABASTECIMIENTO</span>
              <span className="text-[8px]">{seccionAbastecimiento ? '▲' : '▼'}</span>
            </button>

            {seccionAbastecimiento && (
              <div className="space-y-1 pl-1">
                <Link
                  href="/inventario"
                  className={`flex items-center justify-between px-2.5 py-2 rounded-xl font-bold transition text-xs ${
                    pathname === '/inventario'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span>📊</span>
                    <span className="uppercase">INVENTARIO</span>
                  </div>
                  <span className="bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded font-mono text-[9px] font-black">
                    9+
                  </span>
                </Link>

                <Link
                  href="/bodega"
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-bold transition text-xs ${
                    pathname === '/bodega'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span>🏢</span>
                  <span className="uppercase">BODEGA 360</span>
                </Link>

                <Link
                  href="/catalogo"
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-bold transition text-xs ${
                    pathname === '/catalogo'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span>🏷️</span>
                  <span className="uppercase">CATÁLOGO</span>
                </Link>
              </div>
            )}
          </div>

          {/* SECCIÓN SEGURIDAD */}
          <div className="space-y-1">
            <button
              onClick={() => setSeccionSeguridad(!seccionSeguridad)}
              className="w-full flex items-center justify-between px-2 py-1 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase hover:text-slate-300 transition"
            >
              <span>SEGURIDAD & ADMIN</span>
              <span className="text-[8px]">{seccionSeguridad ? '▲' : '▼'}</span>
            </button>

            {seccionSeguridad && (
              <div className="space-y-1 pl-1">
                <Link
                  href="/admin/seguridad"
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-bold transition text-xs ${
                    pathname === '/admin/seguridad'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span>🛡️</span>
                  <span className="uppercase">NORMAS SEGURIDAD</span>
                </Link>

                <Link
                  href="/admin/permisos"
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-bold transition text-xs ${
                    pathname === '/admin/permisos'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span>🔑</span>
                  <span className="uppercase">PERMISOS ADMIN</span>
                </Link>
              </div>
            )}
          </div>

        </nav>
      </div>

      {/* RODAPÉ */}
      <div className="space-y-2 border-t border-slate-800/80 pt-2">
        <Link
          href="/login"
          className="w-full bg-slate-950 hover:bg-rose-500/10 border border-slate-800 hover:border-rose-500/30 text-rose-400 font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-2 transition text-xs uppercase tracking-wider"
        >
          <span>[→</span>
          <span>SALIR</span>
        </Link>
      </div>
    </aside>
  );
}
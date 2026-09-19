'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  // Ocultar barra lateral na rota de login
  if (pathname === '/login') return null;

  // Estados para controle de listas dobráveis/expansíveis
  const [seccionOperacion, setSeccionOperacion] = useState(true);
  const [seccionAbastecimiento, setSeccionAbastecimiento] = useState(true);
  const [seccionSeguridad, setSeccionSeguridad] = useState(true);

  return (
    <aside className="w-72 bg-slate-950 border-r border-slate-800/80 min-h-screen p-4 flex flex-col justify-between font-sans text-xs text-slate-300 relative z-40 select-none shadow-2xl">
      
      <div className="space-y-5">
        {/* LOGO & PLATAFORMA */}
        <div className="flex justify-between items-center px-1 pt-1 border-b border-slate-800/60 pb-3">
          <div>
            <h1 className="text-xl font-black italic tracking-wider text-amber-400 uppercase">
              ALEX BAKERY
            </h1>
            <p className="text-[9px] font-mono tracking-widest text-slate-500 uppercase font-bold">
              PLATAFORMA AI-OS
            </p>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#f59e0b]" />
        </div>

        {/* CARTÃO DE USUÁRIO (PERFIL NO TOPO) */}
        <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-2xl flex items-center justify-between shadow-lg hover:border-amber-400/40 transition">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center font-bold text-amber-400 font-mono text-sm">
              AC
            </div>
            <div>
              <p className="font-bold text-white text-xs leading-tight">Alex Castellanos</p>
              <p className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider">
                LÍDER PRODUCCIÓN
              </p>
            </div>
          </div>
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 gap-1">
            <button title="Modo Asistente IA" className="p-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-[11px] shadow">
              🤖
            </button>
            <button title="Sugerencias IA" className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-amber-400 transition text-[11px]">
              ✨
            </button>
          </div>
        </div>

        {/* MENU DE NAVEGAÇÃO / LISTAS PLEGÁVEIS */}
        <nav className="space-y-4">
          
          {/* SEÇÃO 1: OPERACIÓN */}
          <div className="space-y-1">
            <button
              onClick={() => setSeccionOperacion(!seccionOperacion)}
              className="w-full flex items-center justify-between px-2 py-1 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase hover:text-slate-300 transition"
            >
              <span>OPERACIÓN</span>
              <span className="text-[9px]">{seccionOperacion ? '▲' : '▼'}</span>
            </button>

            {seccionOperacion && (
              <div className="space-y-1 pl-1">
                <Link
                  href="/"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition ${
                    pathname === '/'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span className="text-base">🥣</span>
                  <span className="uppercase tracking-wider">PLANTA</span>
                </Link>

                <Link
                  href="/empaque"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition ${
                    pathname === '/empaque'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span className="text-base">📦</span>
                  <span className="uppercase tracking-wider">EMPAQUE</span>
                </Link>

                <Link
                  href="/entregas"
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-bold transition ${
                    pathname === '/entregas'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">🚚</span>
                    <span className="uppercase tracking-wider">ENTREGAS</span>
                  </div>
                  <span className="bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded-md font-mono text-[10px] font-black">
                    4
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* SEÇÃO 2: ABASTECIMIENTO */}
          <div className="space-y-1">
            <button
              onClick={() => setSeccionAbastecimiento(!seccionAbastecimiento)}
              className="w-full flex items-center justify-between px-2 py-1 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase hover:text-slate-300 transition"
            >
              <span>ABASTECIMIENTO</span>
              <span className="text-[9px]">{seccionAbastecimiento ? '▲' : '▼'}</span>
            </button>

            {seccionAbastecimiento && (
              <div className="space-y-1 pl-1">
                <Link
                  href="/inventario"
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-bold transition ${
                    pathname === '/inventario'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">📊</span>
                    <span className="uppercase tracking-wider">INVENTARIO</span>
                  </div>
                  <span className="bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded-md font-mono text-[10px] font-black">
                    9+
                  </span>
                </Link>

                <Link
                  href="/bodega"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition ${
                    pathname === '/bodega'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span className="text-base">🏢</span>
                  <span className="uppercase tracking-wider">BODEGA</span>
                </Link>

                <Link
                  href="/catalogo"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition ${
                    pathname === '/catalogo'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span className="text-base">🏷️</span>
                  <span className="uppercase tracking-wider">CATÁLOGO</span>
                </Link>
              </div>
            )}
          </div>

          {/* SEÇÃO 3: SEGURIDAD & ADMIN */}
          <div className="space-y-1">
            <button
              onClick={() => setSeccionSeguridad(!seccionSeguridad)}
              className="w-full flex items-center justify-between px-2 py-1 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase hover:text-slate-300 transition"
            >
              <span>SEGURIDAD & ADMIN</span>
              <span className="text-[9px]">{seccionSeguridad ? '▲' : '▼'}</span>
            </button>

            {seccionSeguridad && (
              <div className="space-y-1 pl-1">
                <Link
                  href="/admin/seguridad"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition ${
                    pathname === '/admin/seguridad'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span className="text-base">🛡️</span>
                  <span className="uppercase tracking-wider">NORMAS DE SEGURIDAD</span>
                </Link>

                <Link
                  href="/admin/permisos"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition ${
                    pathname === '/admin/permisos'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800/80'
                  }`}
                >
                  <span className="text-base">🔑</span>
                  <span className="uppercase tracking-wider">CONTROL PERMISOS</span>
                </Link>
              </div>
            )}
          </div>

        </nav>
      </div>

      {/* RODAPÉ DA BARRA LATERAL (CONTROLES DE TEMA, NOTIFICAÇÕES E SAÍDA) */}
      <div className="space-y-2 border-t border-slate-800/80 pt-3">
        {/* SELECTOR DE TEMAS (CLARO, ESCURO, SISTEMA) */}
        <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 grid grid-cols-3 gap-1 text-center">
          <button title="Claro" className="py-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition">
            ☀️
          </button>
          <button title="Escuro" className="py-1.5 rounded-lg bg-slate-950 text-amber-400 font-bold border border-slate-800">
            🌙
          </button>
          <button title="Sistema" className="py-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition">
            💻
          </button>
        </div>

        {/* BOTÃO ATUALIZAR E NOTIFICAÇÕES */}
        <div className="flex gap-2">
          <button className="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-2 transition text-xs">
            <span>🔄</span>
            <span className="uppercase tracking-wider">ACTUALIZAR</span>
          </button>

          <button className="relative bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 p-2 rounded-xl transition">
            🔔
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-mono text-[9px] font-black px-1.5 py-0.2 rounded-full animate-pulse">
              2
            </span>
          </button>
        </div>

        {/* BOTÃO DE SAÍDA */}
        <Link
          href="/login"
          className="w-full bg-slate-950 hover:bg-rose-500/10 border border-slate-800 hover:border-rose-500/30 text-rose-400 font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition text-xs uppercase tracking-wider"
        >
          <span>[→</span>
          <span>SALIR</span>
        </Link>
      </div>

    </aside>
  );
}
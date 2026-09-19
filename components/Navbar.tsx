'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { name: 'Dashboard', href: '/' },
    { name: '🥣 Producción y Trazabilidad', href: '/produccion' },
    { name: '📋 Ficha Técnica', href: '/producto/ficha-tecnica' },
    { name: '📖 Ficha Receta', href: '/producto/ficha-receta' },
    { name: '🏷️ Etiquetas', href: '/producto/etiqueta' },
    { name: '🖨️ Consolidados', href: '/impresion' },
    { name: '👤 Perfil Trabajador', href: '/perfil' },
    { name: '🛡️ Permisos (Admin)', href: '/admin/permisos' },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-800 p-4 print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-xl font-black text-amber-500 tracking-wider">
          ALEX BAKERY <span className="text-white text-xs font-normal">AI-OS</span>
        </Link>
        <div className="flex flex-wrap gap-2 text-xs">
          {menu.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
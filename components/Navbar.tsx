'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Inventario', path: '/inventory' },
  { name: 'Recetas', path: '/recipes' },
  { name: 'Producción', path: '/production' },
  { name: 'Ventas', path: '/orders' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xl font-black text-amber-500">Alex Bakery</span>
        <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">AI-OS</span>
      </div>
      <div className="flex gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium px-3 py-1.5 rounded-lg transition ${
                isActive
                  ? 'bg-amber-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
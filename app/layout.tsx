'use client';

import './globals.css';
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const esPaginaLogin = pathname === '/login';

  return (
    <html lang="es">
      <body className="bg-slate-950 text-white min-h-screen flex">
        {!esPaginaLogin && <Sidebar />}
        <main className={`flex-1 bg-slate-950 ${!esPaginaLogin ? 'ml-64 p-6' : 'p-0'}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
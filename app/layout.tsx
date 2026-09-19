import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import AlexCoreWidget from '@/components/AlexCoreWidget';

export const metadata: Metadata = {
  title: 'Alex Bakery AI-OS',
  description: 'Sistema Operativo con Inteligencia Artificial para Alex Bakery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
        
        {/* WIDGET FLOTANTE DE SUPER USUARIO */}
        <AlexCoreWidget />
      </body>
    </html>
  );
}
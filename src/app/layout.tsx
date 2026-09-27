// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Alex Bakery AI-OS',
  description: 'Plataforma Industrial de Gestión y Taller de Producción',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#050507] text-gray-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
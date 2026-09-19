import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Alex Bakery AI-OS",
  description: "Sistema de gestión de producción para Panadería Alex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
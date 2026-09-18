'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Item {
  id: number;
  nombre: string;
  categoria: string;
  stockActual: number;
  stockMinimo: number;
  unidad: string;
}

export default function InventoryPage() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, nombre: 'Harina de Trigo Panificable', categoria: 'Insumo Base', stockActual: 150, stockMinimo: 50, unidad: 'kg' },
    { id: 2, nombre: 'Levadura Fresca', categoria: 'Leudante', stockActual: 8, stockMinimo: 10, unidad: 'kg' },
    { id: 3, nombre: 'Manteca Vegetal', categoria: 'Grasas', stockActual: 25, stockMinimo: 15, unidad: 'kg' },
    { id: 4, nombre: 'Azúcar Refinada', categoria: 'Endulzante', stockActual: 40, stockMinimo: 20, unidad: 'kg' },
    { id: 5, nombre: 'Sal Final Fine', categoria: 'Condimentos', stockActual: 12, stockMinimo: 5, unidad: 'kg' },
  ]);

  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('Insumo Base');
  const [stockActual, setStockActual] = useState('');
  const [stockMinimo, setStockMinimo] = useState('');
  const [unidad, setUnidad] = useState('kg');

  const agregarInsumo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !stockActual || !stockMinimo) return;

    const nuevoItem: Item = {
      id: Date.now(),
      nombre,
      categoria,
      stockActual: parseFloat(stockActual),
      stockMinimo: parseFloat(stockMinimo),
      unidad,
    };

    setItems([...items, nuevoItem]);
    setNombre('');
    setStockActual('');
    setStockMinimo('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-amber-400 hover:underline text-sm font-semibold">
              ← Volver al Dashboard
            </Link>
          </div>
          <h1 className="text-2xl font-black text-amber-400 mt-2">CONTROL DE INVENTARIO Y MATERIA PRIMA</h1>
          <p className="text-xs text-slate-400">Salam Bakery AI-OS — Monitoreo de insumos en tiempo real</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h2 className="text-lg font-bold text-amber-400 mb-4">Registrar Nuevo Insumo</h2>
          <form onSubmit={agregarInsumo} className="space-y-4 text-sm">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Nombre del Insumo</label>
              <input
                type="text"
                placeholder="Ej. Harina Integral"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Categoría</label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="Insumo Base">Insumo Base</option>
                <option value="Leudante">Leudante</option>
                <option value="Grasas">Grasas</option>
                <option value="Endulzante">Endulzante</option>
                <option value="Condimentos">Condimentos</option>
                <option value="Empaque">Empaque</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Stock Actual</label>
                <input
                  type="number"
                  placeholder="0"
                  value={stockActual}
                  onChange={(e) => setStockActual(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Stock Mínimo</label>
                <input
                  type="number"
                  placeholder="0"
                  value={stockMinimo}
                  onChange={(e) => setStockMinimo(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Unidad de Medida</label>
              <select
                value={unidad}
                onChange={(e) => setUnidad(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="kg">Kilogramos (kg)</option>
                <option value="gr">Gramos (gr)</option>
                <option value="litros">Litros (L)</option>
                <option value="unidades">Unidades</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2 px-4 rounded transition mt-2"
            >
              + Agregar Insumo
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h2 className="text-lg font-bold text-slate-100 mb-4">Materia Prima en Almacén</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="text-xs uppercase bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-3">Insumo</th>
                  <th className="p-3">Categoría</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {items.map((item) => {
                  const bajoStock = item.stockActual <= item.stockMinimo;
                  return (
                    <tr key={item.id} className="hover:bg-slate-950/50">
                      <td className="p-3 font-semibold text-slate-100">{item.nombre}</td>
                      <td className="p-3 text-slate-400">{item.categoria}</td>
                      <td className="p-3 font-bold">
                        {item.stockActual} {item.unidad}
                      </td>
                      <td className="p-3">
                        {bajoStock ? (
                          <span className="px-2 py-1 text-xs rounded bg-red-950 text-red-400 border border-red-800 font-bold">
                            ⚠️ Stock Bajo (&lt; {item.stockMinimo} {item.unidad})
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                            ✓ Normal
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

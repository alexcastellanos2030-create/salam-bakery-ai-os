'use client';

import { useState } from 'react';
import { Ingredient } from '@/types/inventory';

const initialIngredients: Ingredient[] = [
  { id: '1', name: 'Harina de Trigo Hazaña', category: 'Harinas', stock: 150, unit: 'kg', minStock: 50, costPerUnit: 1.2 },
  { id: '2', name: 'Levadura Fresca', category: 'Levaduras', stock: 8, unit: 'kg', minStock: 10, costPerUnit: 3.5 },
  { id: '3', name: 'Mantequilla Sin Sal', category: 'Lácteos', stock: 25, unit: 'kg', minStock: 15, costPerUnit: 6.0 },
];

export default function InventoryPage() {
  const [ingredients, setIngredients] = useState<Ingredient[]>(initialIngredients);
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Ingredient['category']>('Harinas');
  const [stock, setStock] = useState(0);
  const [unit, setUnit] = useState<Ingredient['unit']>('kg');
  const [minStock, setMinStock] = useState(0);
  const [cost, setCost] = useState(0);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    const newItem: Ingredient = {
      id: Date.now().toString(),
      name,
      category,
      stock,
      unit,
      minStock,
      costPerUnit: cost,
    };

    setIngredients([...ingredients, newItem]);
    setName('');
    setStock(0);
    setMinStock(0);
    setCost(0);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-black text-amber-500">Módulo de Inventario de Materia Prima</h1>
        <p className="text-slate-400">Control de stock e insumos para Panadería Alex</p>
      </header>

      {/* Formulario */}
      <form onSubmit={handleAdd} className="bg-slate-900 border border-slate-800 p-4 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Nombre del insumo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-slate-800 border border-slate-700 p-2 rounded text-white"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Ingredient['category'])}
          className="bg-slate-800 border border-slate-700 p-2 rounded text-white"
        >
          <option value="Harinas">Harinas</option>
          <option value="Lácteos">Lácteos</option>
          <option value="Levaduras">Levaduras</option>
          <option value="Endulzantes">Endulzantes</option>
          <option value="Otros">Otros</option>
        </select>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Stock inicial"
            value={stock || ''}
            onChange={(e) => setStock(Number(e.target.value))}
            className="bg-slate-800 border border-slate-700 p-2 rounded text-white w-full"
            required
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as Ingredient['unit'])}
            className="bg-slate-800 border border-slate-700 p-2 rounded text-white"
          >
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="L">L</option>
            <option value="unidades">unidades</option>
          </select>
        </div>
        <input
          type="number"
          placeholder="Stock mínimo"
          value={minStock || ''}
          onChange={(e) => setMinStock(Number(e.target.value))}
          className="bg-slate-800 border border-slate-700 p-2 rounded text-white"
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Costo por unidad ($)"
          value={cost || ''}
          onChange={(e) => setCost(Number(e.target.value))}
          className="bg-slate-800 border border-slate-700 p-2 rounded text-white"
          required
        />
        <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black font-bold p-2 rounded transition">
          + Agregar Insumo
        </button>
      </form>

      {/* Tabla de Insumos */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800 text-slate-400">
            <tr>
              <th className="p-3">Insumo</th>
              <th className="p-3">Categoría</th>
              <th className="p-3">Stock Actual</th>
              <th className="p-3">Stock Mínimo</th>
              <th className="p-3">Costo/U</th>
              <th className="p-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((item) => {
              const isLowStock = item.stock <= item.minStock;
              return (
                <tr key={item.id} className="border-b border-slate-800">
                  <td className="p-3 font-semibold text-white">{item.name}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3">{item.stock} {item.unit}</td>
                  <td className="p-3">{item.minStock} {item.unit}</td>
                  <td className="p-3">${item.costPerUnit.toFixed(2)}</td>
                  <td className="p-3">
                    {isLowStock ? (
                      <span className="bg-red-950 text-red-400 border border-red-800 text-xs px-2 py-1 rounded">
                        Stock Bajo
                      </span>
                    ) : (
                      <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs px-2 py-1 rounded">
                        Ok
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
  );
}
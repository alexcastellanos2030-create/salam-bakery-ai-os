'use client';

import { useState } from 'react';

// Estructura de Insumo con Registro de Lote de Materia Prima
interface InsumoTrazable {
  id: string;
  nombre: string;
  porcentajePanadero: number;
  loteMateriaPrima: string; // Lote del proveedor de harina, levadura, etc.
}

// Estructura Completa de Trazabilidad de Orden de Batida
interface BatidaTrazable {
  idLoteProduccion: string; // Identificador único de producción
  fechaHora: string;
  producto: string;
  sacosHarina: number;
  kilosHarina: number;
  totalMasaEsperadaKg: number;
  
  // Parámetros de Control de Calidad y Proceso
  tempAmbienteC: number;
  tempAguaC: number;
  tempMasaFinalC: number;
  tiempoAmasadoMin: number;
  
  // Trazabilidad de Insumos Utilizados
  insumos: InsumoTrazable[];
  
  // Personal Responsable
  operadorMezcla: string;
  supervisorCalidad: string;
  
  estado: 'Registrado' | 'En Amasado' | 'En Fermentación' | 'Horneado' | 'Completado';
}

export default function ProduccionTrazabilidadPage() {
  // Datos Generales de la Batida Actual
  const [producto, setProducto] = useState<string>('Pan Canilla / Francés');
  const [sacos, setSacos] = useState<number>(2);
  const kilosPorSaco = 45;

  // Parámetros de Control
  const [tempAmbiente, setTempAmbiente] = useState<number>(24);
  const [tempAgua, setTempAgua] = useState<number>(12);
  const [tempMasaFinal, setTempMasaFinal] = useState<number>(26);
  const [tiempoAmasado, setTiempoAmasado] = useState<number>(14);
  
  // Responsables
  const [operador, setOperador] = useState<string>('Carlos Mendoza');
  const [supervisor, setSupervisor] = useState<string>('Ana Gutiérrez');

  // Insumos y sus Lotes de Proveedor
  const [insumos, setInsumos] = useState<InsumoTrazable[]>([
    { id: '1', nombre: 'Harina de Trigo Especial', porcentajePanadero: 100, loteMateriaPrima: 'HAR-202609-041' },
    { id: '2', nombre: 'Agua (Hidratación)', porcentajePanadero: 60, loteMateriaPrima: 'RED-MUNI-01' },
    { id: '3', nombre: 'Levadura Fresca', porcentajePanadero: 2.5, loteMateriaPrima: 'LEV-99823' },
    { id: '4', nombre: 'Sal Refinada', porcentajePanadero: 1.8, loteMateriaPrima: 'SAL-0041' },
    { id: '5', nombre: 'Azúcar Rubia', porcentajePanadero: 2.0, loteMateriaPrima: 'AZU-8821' },
    { id: '6', nombre: 'Manteca / Grasa Vegetal', porcentajePanadero: 3.0, loteMateriaPrima: 'MAN-7712' },
    { id: '7', nombre: 'Mejorador de Masa', porcentajePanadero: 0.8, loteMateriaPrima: 'MEJ-5510' },
  ]);

  // Histórico de Producción con Trazabilidad
  const [historialBatidas, setHistorialBatidas] = useState<BatidaTrazable[]>([
    {
      idLoteProduccion: 'LOTE-PROD-20260919-001',
      fechaHora: '2026-09-19 05:30 AM',
      producto: 'Pan Sobado / Campesino',
      sacosHarina: 3,
      kilosHarina: 135,
      totalMasaEsperadaKg: 229.6,
      tempAmbienteC: 22,
      tempAguaC: 10,
      tempMasaFinalC: 25.5,
      tiempoAmasadoMin: 16,
      insumos: [
        { id: '1', nombre: 'Harina de Trigo Especial', porcentajePanadero: 100, loteMateriaPrima: 'HAR-202609-040' },
        { id: '3', nombre: 'Levadura Fresca', porcentajePanadero: 2.5, loteMateriaPrima: 'LEV-99822' }
      ],
      operadorMezcla: 'Pedro Gómez',
      supervisorCalidad: 'Ana Gutiérrez',
      estado: 'Completado'
    }
  ]);

  const totalHarinaKg = sacos * kilosPorSaco;

  const calcularKilosInsumo = (porcentaje: number) => {
    return ((totalHarinaKg * porcentaje) / 100).toFixed(2);
  };

  const totalMasaKg = insumos
    .reduce((acc, item) => acc + (totalHarinaKg * item.porcentajePanadero) / 100, 0)
    .toFixed(2);

  // Actualizar Lote de Materia Prima
  const handleLoteChange = (id: string, nuevoLote: string) => {
    setInsumos(insumos.map(item => item.id === id ? { ...item, loteMateriaPrima: nuevoLote } : item));
  };

  // Generar Lote Único de Producción
  const generarCodigoLote = () => {
    const hoy = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const num = (historialBatidas.length + 1).toString().padStart(3, '0');
    return `LOTE-PROD-${hoy}-${num}`;
  };

  const registrarLoteProduccion = () => {
    const nuevaBatida: BatidaTrazable = {
      idLoteProduccion: generarCodigoLote(),
      fechaHora: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
      producto,
      sacosHarina: sacos,
      kilosHarina: totalHarinaKg,
      totalMasaEsperadaKg: parseFloat(totalMasaKg),
      tempAmbienteC: tempAmbiente,
      tempAguaC: tempAgua,
      tempMasaFinalC: tempMasaFinal,
      tiempoAmasadoMin: tiempoAmasado,
      insumos: [...insumos],
      operadorMezcla: operador,
      supervisorCalidad: supervisor,
      estado: 'Registrado',
    };

    setHistorialBatidas([nuevaBatida, ...historialBatidas]);
    alert(`✅ Lote de Producción ${nuevaBatida.idLoteProduccion} registrado exitosamente con trazabilidad completa.`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* HEADER (Oculto al imprimir) */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-5 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-500/10 text-amber-500 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-500/20">
              AUDITORÍA E INOCUIDAD
            </span>
            <span className="text-xs text-slate-400">Código de Lote Activo: <strong className="text-white font-mono">{generarCodigoLote()}</strong></span>
          </div>
          <h1 className="text-3xl font-black text-white mt-1">🥣 Trazabilidad de Producción y Amasado</h1>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm transition flex items-center gap-2"
        >
          <span>🖨️</span> Imprimir Ficha Auditables de Lote
        </button>
      </header>

      {/* ÁREA DE REGISTRO DE TRACABILIDAD */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:hidden">
        
        {/* PARÁMETROS DE MASA Y CONTROL AMBIENTAL */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider border-b border-slate-800 pb-2">
            1. Parámetros de Receta y Entorno
          </h2>
          
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400">Producto a Elaborar:</label>
            <select
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              className="w-full bg-slate-950 text-white border border-slate-800 rounded-lg p-2 text-xs focus:outline-none focus:border-amber-500"
            >
              <option value="Pan Canilla / Francés">Pan Canilla / Francés</option>
              <option value="Pan Sobado / Campesino">Pan Sobado / Campesino</option>
              <option value="Pan Dulce / Golfeado">Pan Dulce / Golfeado</option>
              <option value="Pan de Hamburguesa / Perro">Pan de Hamburguesa / Perro</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-400">Sacos (45kg):</label>
              <input
                type="number"
                min="0.5"
                step="0.5"
                value={sacos}
                onChange={(e) => setSacos(Number(e.target.value))}
                className="w-full bg-slate-950 text-amber-400 font-bold text-sm border border-slate-800 rounded-lg p-2 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400">T. Amasado (min):</label>
              <input
                type="number"
                value={tiempoAmasado}
                onChange={(e) => setTiempoAmasado(Number(e.target.value))}
                className="w-full bg-slate-950 text-white font-bold text-sm border border-slate-800 rounded-lg p-2 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2 border-t border-slate-800">
            Control de Temperatura (°C)
          </h2>
          
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-500 block">Ambiente</span>
              <input
                type="number"
                value={tempAmbiente}
                onChange={(e) => setTempAmbiente(Number(e.target.value))}
                className="w-full bg-transparent text-center font-mono font-bold text-white text-xs"
              />
            </div>
            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-500 block">Agua</span>
              <input
                type="number"
                value={tempAgua}
                onChange={(e) => setTempAgua(Number(e.target.value))}
                className="w-full bg-transparent text-center font-mono font-bold text-white text-xs"
              />
            </div>
            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-500 block">Masa Final</span>
              <input
                type="number"
                value={tempMasaFinal}
                onChange={(e) => setTempMasaFinal(Number(e.target.value))}
                className="w-full bg-transparent text-center font-mono font-bold text-emerald-400 text-xs"
              />
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div>
              <label className="text-xs font-semibold text-slate-400">Operador de Mezcla:</label>
              <input
                type="text"
                value={operador}
                onChange={(e) => setOperador(e.target.value)}
                className="w-full bg-slate-950 text-white text-xs border border-slate-800 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400">Supervisor Responsable:</label>
              <input
                type="text"
                value={supervisor}
                onChange={(e) => setSupervisor(e.target.value)}
                className="w-full bg-slate-950 text-white text-xs border border-slate-800 rounded-lg p-2"
              />
            </div>
          </div>

          <button
            onClick={registrarLoteProduccion}
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 rounded-xl text-xs transition uppercase"
          >
            🔒 Guardar y Vincular Lote
          </button>
        </div>

        {/* TABLA DE TRAZABILIDAD DE INSUMOS */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider">
              2. Trazabilidad de Insumos y Materia Prima
            </h2>
            <span className="text-xs text-slate-400 font-mono">Masa Total: <strong className="text-emerald-400">{totalMasaKg} kg</strong></span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase font-bold border-b border-slate-800">
                <tr>
                  <th className="p-2.5">Ingrediente</th>
                  <th className="p-2.5 text-center">% Pan.</th>
                  <th className="p-2.5 text-right">Peso (kg)</th>
                  <th className="p-2.5 text-right">N° Lote Proveedor / MP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {insumos.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-950/50">
                    <td className="p-2.5 font-semibold text-white">{item.nombre}</td>
                    <td className="p-2.5 text-center text-amber-400 font-mono">{item.porcentajePanadero}%</td>
                    <td className="p-2.5 text-right font-bold text-emerald-400 font-mono">
                      {calcularKilosInsumo(item.porcentajePanadero)} kg
                    </td>
                    <td className="p-2.5 text-right">
                      <input
                        type="text"
                        value={item.loteMateriaPrima}
                        onChange={(e) => handleLoteChange(item.id, e.target.value)}
                        className="bg-slate-950 text-right text-slate-200 border border-slate-800 rounded px-2 py-1 text-xs font-mono focus:border-amber-500 focus:outline-none"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* REGISTRO HISTÓRICO CON EXPEDIENTE DE AUDITORÍA */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 print:hidden">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider">📜 Expediente e Historial de Lotes Auditados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {historialBatidas.map((b) => (
            <div key={b.idLoteProduccion} className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-start border-b border-slate-800/80 pb-2">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-500 block">{b.idLoteProduccion}</span>
                  <p className="font-bold text-white text-sm">{b.producto}</p>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">
                  {b.estado}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-mono">
                <div>Harina: <strong>{b.kilosHarina} kg ({b.sacosHarina} sacos)</strong></div>
                <div>Masa Final: <strong className="text-emerald-400">{b.totalMasaEsperadaKg} kg</strong></div>
                <div>T. Amasado: <strong>{b.tiempoAmasadoMin} min</strong></div>
                <div>Temp. Masa: <strong>{b.tempMasaFinalC} °C</strong></div>
              </div>

              <div className="text-[11px] text-slate-500 border-t border-slate-800/60 pt-2 flex justify-between">
                <span>Op: {b.operadorMezcla}</span>
                <span>Sup: {b.supervisorCalidad}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🖨️ HOJA DE AUDITORÍA Y TRAZABILIDAD PARA IMPRESIÓN */}
      <div className="hidden print:block text-black p-4 space-y-4">
        <div className="border-b-2 border-black pb-3 text-center">
          <h1 className="text-xl font-black uppercase">ALEX BAKERY AI-OS - REGISTRO DE TRAZABILIDAD Y CALIDAD</h1>
          <p className="text-xs font-mono font-bold">CÓDIGO DE LOTE: {generarCodigoLote()}</p>
          <p className="text-xs">Fecha / Hora Emisión: {new Date().toLocaleString()}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs border p-2 rounded">
          <div>
            <p><strong>Producto:</strong> {producto}</p>
            <p><strong>Harina Procesada:</strong> {totalHarinaKg} kg ({sacos} sacos)</p>
            <p><strong>Rendimiento Esperado:</strong> {totalMasaKg} kg de Masa</p>
          </div>
          <div>
            <p><strong>Tiempo Amasado:</strong> {tiempoAmasado} min</p>
            <p><strong>Temperaturas (°C):</strong> Amb: {tempAmbiente}°C | Agua: {tempAgua}°C | Masa: {tempMasaFinal}°C</p>
            <p><strong>Operador / Supervisor:</strong> {operador} / {supervisor}</p>
          </div>
        </div>

        <h3 className="text-xs font-bold uppercase border-b border-black pt-2">Registro de Lotes de Materia Prima Utilizados</h3>
        <table className="w-full text-left border-collapse text-[11px]">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="py-1">INGREDIENTE</th>
              <th className="py-1 text-center">% PAN.</th>
              <th className="py-1 text-right">CANTIDAD (KG)</th>
              <th className="py-1 text-right">LOTE DE PROVEEDOR</th>
              <th className="py-1 text-center">VERIFICACIÓN</th>
            </tr>
          </thead>
          <tbody>
            {insumos.map((item) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="py-1 font-bold">{item.nombre}</td>
                <td className="py-1 text-center">{item.porcentajePanadero}%</td>
                <td className="py-1 text-right font-bold">{calcularKilosInsumo(item.porcentajePanadero)} kg</td>
                <td className="py-1 text-right font-mono">{item.loteMateriaPrima}</td>
                <td className="py-1 text-center">[  ] Conforme</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pt-8 grid grid-cols-2 gap-8 text-center text-xs">
          <div>
            <div className="border-t border-black pt-1">Firma Operador de Amasado</div>
          </div>
          <div>
            <div className="border-t border-black pt-1">Firma Control de Calidad / Auditoría</div>
          </div>
        </div>
      </div>

    </div>
  );
}
'use client';

export default function FichaTecnicaAmpliadaPage() {
  return (
    <div className="space-y-6 text-xs text-slate-300">
      <header className="flex justify-between items-center border-b border-slate-800 pb-4 print:hidden">
        <div>
          <h1 className="text-2xl font-black text-yellow-400">📋 Ficha Técnica Estándar (Formato Hoja Carta)</h1>
          <p className="text-slate-400">Especificación técnica ampliada para auditoría e inocuidad alimentaria</p>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold px-4 py-2 rounded text-xs transition"
        >
          🖨️ Imprimir Hoja Carta
        </button>
      </header>

      {/* HOJA CARTA AM PLIADA PARA PANTALLA E IMPRESIÓN */}
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl max-w-4xl mx-auto space-y-6 print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
        
        {/* ENCABEZADO TIPO AUDITORÍA */}
        <div className="border-b-2 border-slate-700 pb-4 flex justify-between items-center print:border-black">
          <div>
            <h2 className="text-xl font-black text-yellow-400 uppercase print:text-black">ALEX BAKERY AI-OS</h2>
            <p className="text-slate-400 print:text-black text-[10px]">SISTEMA INTEGRAL DE CALIDAD E INOCUIDAD</p>
          </div>
          <div className="text-right text-[10px] font-mono">
            <p className="font-bold text-white print:text-black">CÓDIGO: FT-PAN-2026-001</p>
            <p className="text-slate-400 print:text-black">VERSIÓN: 3.0 (Ampliada)</p>
          </div>
        </div>

        {/* 1. IDENTIFICACIÓN DEL PRODUCTO */}
        <section className="space-y-2">
          <h3 className="font-bold text-yellow-400 uppercase tracking-wider border-b border-slate-800 pb-1 print:text-black print:border-black">
            1. Identificación y Denominación del Producto
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div><strong>Nombre Comercial:</strong> Pan Canilla Especial Tradicional</div>
            <div><strong>Categoría Alimentaria:</strong> Panadería Fresca de Consumo Masivo</div>
            <div><strong>Peso Unitario Nominal:</strong> 250 g ± 5 g</div>
            <div><strong>Lote de Producción:</strong> Vinculado al Lote de Batida Diaria</div>
          </div>
        </section>

        {/* 2. ESPECIFICACIONES FÍSICAS Y ORGANOLÉPTICAS */}
        <section className="space-y-2">
          <h3 className="font-bold text-yellow-400 uppercase tracking-wider border-b border-slate-800 pb-1 print:text-black print:border-black">
            2. Características Físico-Químicas y Organolépticas
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div><strong>Corteza:</strong> Dorada, delgada, crocante.</div>
            <div><strong>Miga:</strong> Alvéolos uniformes, esponjosa y elástica.</div>
            <div><strong>Humedad Máxima:</strong> 35%</div>
            <div><strong>pH de Masa Final:</strong> 5.2 - 5.5</div>
          </div>
        </section>

        {/* 3. INFORMACIÓN NUTRICIONAL POR PORCIÓN (100g) */}
        <section className="space-y-2">
          <h3 className="font-bold text-yellow-400 uppercase tracking-wider border-b border-slate-800 pb-1 print:text-black print:border-black">
            3. Tabla Nutricional Estimada (Por 100g)
          </h3>
          <table className="w-full text-left border-collapse border border-slate-800 print:border-black">
            <thead>
              <tr className="bg-slate-950 text-slate-300 print:bg-gray-100 print:text-black">
                <th className="p-2 border border-slate-800 print:border-black">Nutriente</th>
                <th className="p-2 border border-slate-800 print:border-black">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-1.5 border border-slate-800 print:border-black">Valor Energético</td><td className="p-1.5 border border-slate-800 print:border-black">265 kcal</td></tr>
              <tr><td className="p-1.5 border border-slate-800 print:border-black">Proteínas</td><td className="p-1.5 border border-slate-800 print:border-black">8.5 g</td></tr>
              <tr><td className="p-1.5 border border-slate-800 print:border-black">Carbohidratos totales</td><td className="p-1.5 border border-slate-800 print:border-black">49.0 g</td></tr>
              <tr><td className="p-1.5 border border-slate-800 print:border-black">Grasas Totales</td><td className="p-1.5 border border-slate-800 print:border-black">3.2 g</td></tr>
            </tbody>
          </table>
        </section>

        {/* 4. EMPAQUE Y ALMACENAMIENTO */}
        <section className="space-y-2">
          <h3 className="font-bold text-yellow-400 uppercase tracking-wider border-b border-slate-800 pb-1 print:text-black print:border-black">
            4. Empaque, Conservación y Vida Útil
          </h3>
          <p><strong>Presentación:</strong> Bolsa microperforada de polietileno alimentario por 10 unidades.</p>
          <p><strong>Condiciones de Almacenamiento:</strong> Conservar a temperatura ambiente (18°C - 25°C) en lugar seco.</p>
          <p><strong>Vida Útil Recomendada:</strong> 5 a 7 días a partir de la fecha de horneado.</p>
        </section>

        {/* FIRMAS */}
        <div className="pt-8 grid grid-cols-2 gap-8 text-center text-xs">
          <div className="border-t border-slate-700 pt-1 print:border-black">Elaborado por: Control de Calidad</div>
          <div className="border-t border-slate-700 pt-1 print:border-black">Aprobado por: Dirección General Alex Bakery</div>
        </div>

      </div>
    </div>
  );
}
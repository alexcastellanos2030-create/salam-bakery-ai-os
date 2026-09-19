export interface Ingredient {
  id: string;
  name: string;
  category: 'Harinas' | 'Lácteos' | 'Levaduras' | 'Endulzantes' | 'Otros';
  stock: number;
  unit: 'kg' | 'g' | 'L' | 'unidades';
  minStock: number;
  costPerUnit: number;
}

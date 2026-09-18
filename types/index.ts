export type Prioridad = 'Normal' | 'Spress' | 'Atrasado' | 'Hacer de Nuevo';
export type EstadoPaso = 'Pendiente' | 'Pesaje' | 'Batido' | 'Fermentacion' | 'Horneado' | 'Empacado' | 'Completado';

export interface Pedido { id: string; producto: string; cantidad: number; prioridad: Prioridad; estado: EstadoPaso; observacion?: string; alertaAtraso: boolean; }

export interface OpcionSimulacion { id: string; nombre: string; estrategia: string; riesgoPorcentaje: number; beneficioPorcentaje: number; detalle: string; }

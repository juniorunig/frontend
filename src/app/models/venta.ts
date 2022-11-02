export interface VentaI {
  id?: number;
  fechaVenta: Date;
  SubTotal: number;
  impuesto: number;
  descuento: number;
  total: number;
}

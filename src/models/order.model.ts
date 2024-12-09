export enum OrderStatus {
    PENDENTE = 'PENDENTE',
    PAGO = 'PAGO',
    CANCELADO = 'CANCELADO',
  }
  
  export interface Order {
    id: number;
    totalAmount: number;
    status: OrderStatus;
    userId: number;
    eventId: number;
  }
  
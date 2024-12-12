export enum TicketStatus {
    DISPONÍVEL = 'DISPONÍVEL',
    RESERVADO = 'RESERVADO',
    VENDIDO = 'VENDIDO',
  }
  
  export interface Ticket {
    id: number;
    qrCode: string;
    status: TicketStatus;
    ticketTypeId: number;
    orderId: number;
    userId: number;
    eventId: number;
  }
  
export interface Transfer {
    id: number;
    originUserId: number;
    destinationUserCpf: string;  // Alterado de destinationUserId para destinationUserCpf
    ticketId: number;
    transferDate: Date;
}

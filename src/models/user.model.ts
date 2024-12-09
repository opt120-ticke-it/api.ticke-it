export enum UserType {
    CLIENTE = 'CLIENTE',
    ORGANIZADOR = 'ORGANIZADOR',
    FUNCIONARIO = 'FUNCIONARIO',
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    userType: UserType;
  }
  
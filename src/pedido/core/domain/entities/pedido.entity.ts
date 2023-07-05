import { Cliente } from './../../../../identificacao/core/domain/entities/cliente.entity';
import { StatusPedido } from '../enum/status-pedido.enum';
export class Pedido {
  id: number;
  codigo_pedido: string;
  cliente?: Cliente;
  valor_total: number;
  status: StatusPedido;
  createdAt?: Date;
  updatedAt?: Date;

  constructor() {
    this.codigo_pedido = this.generateRandomCode();
    this.status = StatusPedido.INICIADO;
  }

  //Gera um código randômico de 6 dígitos
  private generateRandomCode(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  }
}

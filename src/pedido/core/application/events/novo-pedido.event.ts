import { Pedido } from '../../domain/entities/pedido.entity';

export class NovoPedidoEvent {
  constructor(public pedido: Pedido) {}
}

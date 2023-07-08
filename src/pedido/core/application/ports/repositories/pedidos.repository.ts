import { StatusPedido } from './../../../domain/enum/status-pedido.enum';
import { Pedido } from './../../../domain/entities/pedido.entity';

export const IPedidosRepository = 'IPedidosRepository';

export interface IPedidosRepository {
  create(data: Pedido);

  findAll(status?: StatusPedido): Promise<Pedido[]>;

  update(id: number, pedido: Pedido);

  findByStatus(status: StatusPedido);
}

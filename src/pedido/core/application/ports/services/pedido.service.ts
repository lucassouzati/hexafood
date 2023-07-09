import { PedidoDTO } from 'src/pedido/adapter/driven/dto/pedido.dto';

export const IPedidosService = 'IPedidosService';

export interface IPedidosService {
  createNewPedido(pedidoDto: PedidoDTO): Promise<PedidoDTO>;
  listAllPedidos(): Promise<PedidoDTO[]>;
  findById(id: number): Promise<PedidoDTO>;
}

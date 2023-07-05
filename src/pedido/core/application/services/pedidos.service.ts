import { Injectable, Inject } from '@nestjs/common';
import { Pedido } from '../../domain/entities/pedido.entity';
import { IPedidosRepository } from './../ports/repositories/pedidos.repository';
import { CategoriasService } from './categorias.service';
import { CreatePedidoDto } from 'src/pedido/adapter/driven/dto/create-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(
    @Inject(IPedidosRepository)
    private pedidosRepository: IPedidosRepository,
  ) {}

  createNewPedido(pedidoDto: CreatePedidoDto) {
    const pedido = new Pedido();
    pedido.cliente = pedidoDto.cliente;
    pedido.valor_total = pedidoDto.valor_total;
    return this.pedidosRepository.create(pedido);
  }

  listAllPedidos() {
    return this.pedidosRepository.findAll();
  }
}

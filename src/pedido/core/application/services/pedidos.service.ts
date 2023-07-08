import { ClientesService } from './../../../../identificacao/core/application/services/clientes.service';
import { Injectable, Inject } from '@nestjs/common';
import { Item, Pedido } from '../../domain/entities/pedido.entity';
import { IPedidosRepository } from './../ports/repositories/pedidos.repository';
import { PedidoDTO } from 'src/pedido/adapter/driven/dto/pedido.dto';
import { ProdutosService } from './produtos.service';
import EventEmitter from 'events';
import { NovoPedidoEvent } from '../events/novo-pedido.event';
import { StatusPedido } from '../../domain/enum/status-pedido.enum';

@Injectable()
export class PedidosService {
  constructor(
    @Inject(IPedidosRepository)
    private pedidosRepository: IPedidosRepository,
    private produtosService: ProdutosService,
    private clientesService: ClientesService,
    @Inject('EventEmitter')
    private eventEmitter: EventEmitter,
  ) {}

  async createNewPedido(pedidoDto: PedidoDTO) {
    //TODO: implementar validações como por exemplo id de produtos existentes, id de cliente existente

    // Obtendo todos os IDs dos produtos dos itens para consulta de valor
    const productIds = pedidoDto.itens.map((item) => item.id_produto);
    // Consultar todos os produtos
    const produtos = await this.produtosService.findProdutosByIds(productIds);

    const pedido = new Pedido();

    if (pedidoDto.id_cliente) {
      const cliente = await this.clientesService.findById(pedidoDto.id_cliente);
      pedido.cliente = cliente;
    }

    pedido.id_cliente = pedidoDto.id_cliente;
    pedido.itens = pedidoDto.itens.map((item) => {
      const produto = produtos.find((p) => p.id === item.id_produto);
      return {
        quantidade: item.quantidade,
        valor: produto.valor,
        id_produto: item.id_produto,
      };
    });
    pedido.valor_total = this.calculaValorTotal(pedido.itens);
    const { id } = await this.pedidosRepository.create(pedido);
    pedido.id = id;
    console.log('Novo pedido criado: ', pedido);
    this.eventEmitter.emit('novo.pedido', new NovoPedidoEvent(pedido));

    return pedido;
  }

  async listAllPedidos(): Promise<PedidoDTO[]> {
    const pedidos = await this.pedidosRepository.findAll();
    return pedidos.map((pedido) => ({
      id_cliente: pedido.id_cliente,
      status: pedido.status.toString(),
      valor_total: pedido.valor_total,
      itens: pedido.itens.map((item) => ({
        quantidade: item.quantidade,
        valor: item.valor,
        id_produto: item.id_produto,
      })),
    }));
  }

  private calculaValorTotal(itens: Item[]): number {
    return itens.reduce(
      (total, item) => total + item.quantidade * item.valor,
      0,
    );
  }
  consultarPedidosPendentes(): PedidoDTO[] | PromiseLike<PedidoDTO[]> {
    return this.pedidosRepository.findAll(StatusPedido.RECEBIDO);
  }
  iniciarPreparacao(id: number): Promise<Pedido> {
    throw new Error('Method not implemented.');
  }
  finalizarPreparacao(id: number): Promise<Pedido> {
    throw new Error('Method not implemented.');
  }
  finalizarPedido(id: number): Promise<Pedido> {
    throw new Error('Method not implemented.');
  }
}

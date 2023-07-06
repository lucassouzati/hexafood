import { Injectable, Inject } from '@nestjs/common';
import { Item, Pedido } from '../../domain/entities/pedido.entity';
import { IPedidosRepository } from './../ports/repositories/pedidos.repository';
import { CategoriasService } from './categorias.service';
import { CreateItemDTO } from 'src/pedido/adapter/driven/dto/item.dto';
import { PedidoDTO } from 'src/pedido/adapter/driven/dto/pedido.dto';
import { ProdutosService } from './produtos.service';

@Injectable()
export class PedidosService {
  constructor(
    @Inject(IPedidosRepository)
    private pedidosRepository: IPedidosRepository,
    private produtosService: ProdutosService,
  ) {}

  async createNewPedido(pedidoDto: PedidoDTO) {
    //TODO: implementar validações como por exemplo id de produtos existentes, id de cliente existente

    // Obtendo todos os IDs dos produtos dos itens para consulta de valor
    const productIds = pedidoDto.itens.map((item) => item.id_produto);
    // Consultar todos os produtos
    const produtos = await this.produtosService.findProdutosByIds(productIds);

    const pedido = new Pedido();
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

    return this.pedidosRepository.create(pedido);
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
}

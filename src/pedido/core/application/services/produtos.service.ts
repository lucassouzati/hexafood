import { Injectable, Inject } from '@nestjs/common';
import { Pedido } from 'src/core/domain/pedidos/entities/pedido.entity';
import { Produto } from '../../domain/entities/produto.entity';
import { IProdutosRepository } from '../ports/repositories/produtos.repository';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject(IProdutosRepository)
    private produtosRepository: IProdutosRepository
    ) {}

    createManyProdutos(produto: Produto[]) {
    return this.produtosRepository.createManyProdutos(produto);
  }
  
  // create(produto: Produto) {
  //   return this.produtosRepository.create(produto);
  // }

  buscarPorIdCategoria(id_categoria: number): Promise<Produto[]> {
    return this.produtosRepository.buscarPorIdCategoria(id_categoria);
  }

  update(id: number, produto: Produto) {
    return this.produtosRepository.update(id, produto);
  }

  remove(id: number) {
    return this.produtosRepository.remove(id);
  }

}

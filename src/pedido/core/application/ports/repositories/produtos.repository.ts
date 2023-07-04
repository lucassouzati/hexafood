import { ProdutoDto } from "src/pedido/adapter/driven/dto/produto.dto";
import { Produto } from "src/pedido/core/domain/entities/produto.entity";

export const IProdutosRepository = 'IProdutosRepository';

export interface IProdutosRepository {
  createManyProdutos(data: ProdutoDto[]);

  findByIdCategoria(id_categoria: number): Promise<Produto[]>;

  update(id: number, produto: ProdutoDto);

  remove(id: number);
}

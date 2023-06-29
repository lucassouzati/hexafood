import { Produto } from '../../../domain/entities/produto.entity';

export const IProdutosRepository = 'IProdutosRepository';

export interface IProdutosRepository {
  createManyProdutos(data: Produto[]);
  // create(data: Produto);

  findByIdCategoria(id_categoria: number): Promise<Produto[]>;

  update(id: number, produto: Produto);

  remove(id: number);
}

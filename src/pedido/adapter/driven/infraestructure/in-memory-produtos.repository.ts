import { IProdutosRepository } from 'src/pedido/core/application/ports/repositories/produtos.repository';
import { Produto } from 'src/pedido/core/domain/entities/produto.entity';

export class InMemoryProdutosRepository implements IProdutosRepository {
  private produtos: Produto[] = [
    {
      id: 1,
      nome: 'Produto 1',
      valor: 10,
      descricao: 'Descrição do produto 1',
      imagem: 'imagem1.png',
      id_categoria: 1,
    },
  ];

  async createManyProdutos(produtos: Produto[]) {
    return produtos;
  }

  async findByIdCategoria(idCategoria: number) {
    return this.produtos.filter((p) => p.id_categoria == idCategoria);
  }

  async findAll() {
    return this.produtos;
  }

  async update(id: number, produto: Produto): Promise<Produto | null> {
    const item = this.produtos.find((p) => p.id == id);
    if (!item) {
      throw new Error(`Produto com id ${id} não encontrado!`);
    }
    const index = this.produtos.indexOf(item);
    this.produtos[index] = produto;
    return produto;
  }

  async remove(id: number): Promise<Produto | null> {
    const item = this.produtos.find((p) => p.id == id);
    if (!item) {
      throw new Error(`Produto com id ${id} não encontrado!`);
    }
    const index = this.produtos.indexOf(item);
    this.produtos.splice(index, 1);
    return item;
  }

  findByIds(ids: number[]) {
    throw new Error('Method not implemented!');
  }
}

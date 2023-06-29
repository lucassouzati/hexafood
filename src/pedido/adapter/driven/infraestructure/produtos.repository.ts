import { PrismaClient } from '@prisma/client';
import { Produto } from '../../../core/domain/entities/produto.entity';
import { IProdutosRepository } from './../../../core/application/ports/repositories/produtos.repository';

export class ProdutosRepository implements IProdutosRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createManyProdutos(produtos: Produto[]) {
    return this.prisma.produto.createMany({
      data: produtos,
    });
  }

  // async create(data: Produto): Promise<Produto> {
  //   return this.prisma.produto.create({ data });
  // }

  async findByIdCategoria(idCategoria: number) {
    return this.prisma.produto.findMany({
      where: {
        id_categoria: Number(idCategoria),
      },
    });
  }

  async update(id: number, produto: Produto): Promise<Produto | null> {
    const item = this.prisma.produto.findUnique({
      where: { id },
    });

    return this.prisma.produto.update({
      where: {
        id,
      },
      data: {
        nome: produto.nome,
        valor: produto.valor,
        descricao: produto.descricao,
        imagem: produto.imagem,
        updatedAt: produto.updatedAt,
      },
    });
  }

  async remove(id: number): Promise<Produto | null> {
    return this.prisma.produto.delete({
      where: {
        id,
      },
    });
  }
}

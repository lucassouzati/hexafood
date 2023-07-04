import { Injectable, Inject } from '@nestjs/common';
import { Produto } from '../../domain/entities/produto.entity';
import { IProdutosRepository } from '../ports/repositories/produtos.repository';
import { CategoriaInexistenteException } from '../exceptions/categoria-inexistente.exception';
import { ProdutoInvalidoException } from '../exceptions/produto-invalido.exception';
import { CategoriasService } from './categorias.service';
import { ProdutoDto } from 'src/pedido/adapter/driven/dto/produto.dto';

@Injectable()
export class ProdutosService implements IProdutosRepository {
  constructor(
    @Inject(IProdutosRepository)
    private produtosRepository: IProdutosRepository,
    private categoriasService: CategoriasService,
  ) {}

  async createManyProdutos(produtos: ProdutoDto[]) {
    if (produtos.some((produto) => !produto || Object.values(produto).some((value) => !value))) {
      throw new ProdutoInvalidoException();
    }

    const categorias =  await this.categoriasService.findAll();
    const categoriaIds = categorias.map((categoria) => categoria.id);

    for (const produto of produtos) {
      if (!categoriaIds.includes(produto.id_categoria)) {
        throw new CategoriaInexistenteException();
      }
    }
    
    return this.produtosRepository.createManyProdutos(produtos);
  }

  findByIdCategoria(id_categoria: number): Promise<Produto[]> {

    return this.produtosRepository.findByIdCategoria(id_categoria)
      .then((produtos) => {
        if (!produtos || produtos.length === 0) {
          throw new CategoriaInexistenteException();
        }
        return produtos;
      });
  }

  update(id: number, produto: ProdutoDto) {
    return this.produtosRepository.update(id, produto);
  }

  remove(id: number) {
    return this.produtosRepository.remove(id);
  }
}

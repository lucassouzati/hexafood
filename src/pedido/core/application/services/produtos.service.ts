import { Injectable, Inject } from '@nestjs/common';
import { Produto } from '../../domain/entities/produto.entity';
import { IProdutosRepository } from '../ports/repositories/produtos.repository';
import { CategoriasService } from './categorias.service';
import { ProdutoDto } from 'src/pedido/adapter/driven/dto/produto.dto';
import { CategoriaException } from '../exceptions/categoria.exception';
import { ProdutoException } from '../exceptions/produto.exception';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject(IProdutosRepository)
    private produtosRepository: IProdutosRepository,
    @Inject(CategoriasService)
    private categoriasService: CategoriasService,
  ) {}

  async createManyProdutos(produtosDto: ProdutoDto[]) {
    
    const produtos: ProdutoDto[] = await this.validarCamposProduto(produtosDto);
    
    return this.produtosRepository.createManyProdutos(produtos);
  }

  findAll() {
    return this.produtosRepository.findAll();
  }

  findByIdCategoria(id_categoria: number): Promise<Produto[]> {
    return this.produtosRepository
      .findByIdCategoria(id_categoria)
      .then((produtos) => {
        if (!produtos || produtos.length === 0) {
          throw new CategoriaException('A categoria informada não existe');
        }
        return produtos;
      });
  }

  async update(id: number, produto: ProdutoDto) {

    await this.validarIdProduto(id);
    return this.produtosRepository.update(id, produto);
  }

  async remove(id: number) {

    await this.validarIdProduto(id);  
    return this.produtosRepository.remove(id);
  }

  findProdutosByIds(ids: number[]): Promise<Produto[]> {
    return this.produtosRepository.findByIds(ids);
  }

  private async validarCamposProduto(produtos: ProdutoDto[]): Promise<ProdutoDto[]> {
    if (
      produtos.some(
        (produto) => !produto || Object.values(produto).some((value) => !value),
      )
    ) {
      throw new ProdutoException('Campo(s) não pode(m) ser vazio(s)');

    }
    const categorias = await this.categoriasService.findAll();
    const categoriaIds = categorias.map((categoria) => categoria.id);
    for (const produto of produtos) {
      if (!categoriaIds.includes(produto.id_categoria)) {
        throw new CategoriaException('A categoria informada não existe');
      }
    }

    return produtos;
  }



  private async validarIdProduto(id : number){
    const ids = this.setIdIntoList(id);
    const exist = await this.produtosRepository.findByIds(ids);
    if (!exist || exist.length !== ids.length) {
      throw new ProdutoException('O produto informado não existe.');
    }
  }
  
  private setIdIntoList(id: number): number[] {
    const listIds: number[] = [id];
      return listIds;
  }
}

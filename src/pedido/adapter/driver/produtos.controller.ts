import { Controller, Get, Post, Patch, Body, Param, Delete } from '@nestjs/common';
import { ProdutosService } from '../../core/application/services/produtos.service';
import { Produto } from '../../core/domain/entities/produto.entity';

import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @ApiBody({ type: [Produto] })
  createManyProdutos(@Body() produto: Produto[]) {
    return this.produtosService.createManyProdutos(produto);
  }

  // create(@Body() createCategoriaDto: CreateCategoriaDto) {

  // @Post()
  // // @ApiBody({ type: Produto })
  // create(@Body() produto: Produto) {
  //   return this.produtosService.create(produto);
  // }

  @Get(':id_categoria')
  async findByIdCategoria(
    @Param('id_categoria') id_categoria: number,
  ): Promise<Produto[] | null> {
    return await this.produtosService.buscarPorIdCategoria(id_categoria);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() produto: Produto) {
    return this.produtosService.update(+id, produto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
